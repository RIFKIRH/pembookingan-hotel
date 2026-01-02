"use client";

import { useRef, useState, useTransition } from "react";
import { useActionState } from "react";
import { saveRoom } from "@/lib/actions";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { type PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { BarLoader } from "react-spinners";
import type { Amenities } from "@/app/generated/prisma";
import type { RoomProps } from "@/types/room";
import clsx from "clsx";

const EditForm = ({
  amenities,
  room,
}: {
  amenities: Amenities[];
  room: RoomProps;
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  /**
   * =========================
   * IMAGE STATE (FIX UTAMA)
   * =========================
   */
  const [image, setImage] = useState<string>(room.image ?? "");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  /**
   * =========================
   * VALID IMAGE CHECK
   * =========================
   */
  const isValidImageSrc =
    typeof image === "string" &&
    (image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("/"));

  /**
   * =========================
   * UPLOAD IMAGE
   * =========================
   */
  const handleUpload = () => {
    if (!inputFileRef.current?.files) return;
    const file = inputFileRef.current.files[0];

    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message ?? "Upload failed");
          return;
        }

        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.error(error);
        setMessage("Upload error");
      }
    });
  };

  /**
   * =========================
   * DELETE IMAGE
   * =========================
   */
  const deleteImage = (imageUrl: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${imageUrl}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.error(error);
      }
    });
  };

  /**
   * =========================
   * FORM ACTION
   * =========================
   */
  const [state, formAction, isPending] = useActionState(
    saveRoom.bind(null, image),
    null
  );

 const checkedAmenities = room.RoomAmenities.map(
  (item: { amenitiesId: string }) => item.amenitiesId
);


  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-12 gap-5">
        {/* LEFT */}
        <div className="col-span-8 bg-white p-4">
          {/* NAME */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              defaultValue={room.name}
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Room Name..."
            />
            <span className="text-sm text-red-500">
              {state?.error?.name}
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <textarea
              name="description"
              rows={8}
              defaultValue={room.description}
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Description"
            />
            <span className="text-sm text-red-500">
              {state?.error?.description}
            </span>
          </div>

          {/* AMENITIES */}
          <div className="mb-4 grid md:grid-cols-3">
            {amenities.map((item) => (
              <div className="flex items-center mb-4" key={item.id}>
                <input
                  type="checkbox"
                  name="amenities"
                  defaultValue={item.id}
                  defaultChecked={checkedAmenities.includes(item.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="ms-2 text-sm capitalize">
                  {item.name}
                </label>
              </div>
            ))}
            <span className="text-sm text-red-500">
              {state?.error?.amenities}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-4 bg-white p-4">
          {/* IMAGE */}
          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center
              aspect-video border-2 border-dashed rounded-md cursor-pointer
              bg-gray-50 relative"
          >
            {pending && <BarLoader />}

            {isValidImageSrc && (
              <button
                type="button"
                onClick={() => deleteImage(image)}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded"
              >
                <IoTrashOutline />
              </button>
            )}

            {!isValidImageSrc ? (
              <>
                <IoCloudUploadOutline className="size-8 text-gray-500" />
                <p className="text-sm font-bold">Select Image</p>
                {message && (
                  <p className="text-xs text-red-500">{message}</p>
                )}
                <input
                  type="file"
                  ref={inputFileRef}
                  onChange={handleUpload}
                  id="input-file"
                  className="hidden"
                />
              </>
            ) : (
              <Image
                src={image}
                alt="Room Image"
                width={640}
                height={360}
                className="absolute inset-0 object-cover rounded-md"
              />
            )}
          </label>

          {/* CAPACITY */}
          <div className="mb-4">
            <input
              type="number"
              name="capacity"
              defaultValue={room.capacity}
              className="py-2 px-4 border w-full"
              placeholder="Capacity..."
            />
            <span className="text-sm text-red-500">
              {state?.error?.capacity}
            </span>
          </div>

          {/* PRICE */}
          <div className="mb-4">
            <input
              type="number"
              name="price"
              defaultValue={room.price}
              className="py-2 px-4 border w-full"
              placeholder="Price..."
            />
            <span className="text-sm text-red-500">
              {state?.error?.price}
            </span>
          </div>

          {/* MESSAGE */}
          {state?.message && (
            <div className="mb-4 bg-red-100 p-2">
              <span className="text-sm">{state.message}</span>
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isPending}
            className={clsx(
              "bg-orange-400 text-white w-full py-2.5 text-lg font-semibold",
              { "opacity-50": isPending }
            )}
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
