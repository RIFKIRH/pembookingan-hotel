import { getReservation } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

const ReservationList = async () => {
  const reservation = await getReservation();
  if (!reservation?.length) return <p>No Reservation Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Image
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Name
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Arrival
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Departure
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Room Name
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Price
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    text-left"
            >
              Created At
            </th>
            <th
              className="px-6 py-3  text-sm font-bold text-gray-700 uppercase
                    "
            >
              Payment Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reservation.map((reserve) => (
            <tr key={reserve.id} className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={reserve.Room.image}
                    fill
                    sizes="20vw"
                    alt="room image"
                    className="object cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{reserve.User.name}</td>
              <td className="px-6 py-4">
                {formatDate(reserve.startDate.toISOString())}
              </td>
              <td className="px-6 py-4">
                {formatDate(reserve.endDate.toISOString())}
              </td>
              <td className="px-6 py-4">{reserve.Room.name}</td>
              <td className="px-6 py-4">{formatCurrency(reserve.price)}</td>
              <td className="px-6 py-4">
                {formatDate(reserve.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right">
                <span className="capitalize">{reserve.Payment?.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
