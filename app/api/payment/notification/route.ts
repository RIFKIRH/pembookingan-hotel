import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";
import crypto from "crypto";
import { error } from "console";

export const POST = async (request: Request) => {
  const data: PaymentProps = await request.json();
  const reservationId = data.order_id;

  let responseData = null;

  const transactionStatus = data.transaction_status;
  const paymentType = data.payment_type || null;
  const fraudStatus = data.fraud_status;
  const statusCode = data.status_code;
  const grossAmount = data.gross_amount;
  const signaturKey = data.signature_key;

  const hash = crypto
    .createHash("sha512")
    .update(
      `${reservationId}${statusCode}${grossAmount}${process.env.MIDTRANS_SERVER_KEY}`
    )
    .digest("hex");

  if (signaturKey !== hash) {
    return NextResponse.json(
      { error: "Missing Signature Key" },
      { status: 400 }
    );
  }
  if (transactionStatus == "capture") {
    if (fraudStatus == " accept") {
      const transaction = await prisma.payment.update({
        data: {
          method: paymentType,
          status: "paid",
        },
        where: { reservationId },
      });
      responseData = transaction;
    }
  } else if (transactionStatus == "settlement") {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "paid",
      },
      where: { reservationId },
    });
    responseData = transaction;
  } else if (
    transactionStatus == "cancle" ||
    transactionStatus == "deny" ||
    transactionStatus == "expire"
  ) {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "failure",
      },
      where: { reservationId },
    });
  } else if (transactionStatus == "pending") {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "pending",
      },
      where: { reservationId },
    });
  }
  return NextResponse.json({ responseData }, { status: 200 });
};
