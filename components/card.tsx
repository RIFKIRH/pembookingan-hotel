import { RoomProps } from "@/types/room";
import Image from "next/image";
import Link from "next/link";
import { IoPencilOutline } from "react-icons/io5";
import { formatCurrency } from "@/lib/utils";

const Card = ({ room }: { room: RoomProps }) => {
  return (
    <div className="bg-white shadow-lg rounded-sm">
      <div className="h-65 relative">
        <Image
          src={room.image}
          fill
          alt={room.name}
          className="object-cover rounded-t-sm"
        />
      </div>

      <div className="p-8">
        <h4 className="text-2xl font-medium">
          <Link
            href={`/room/${room.id}`}
            className="hover:text-gray-800 transition duration-150"
          >
            {room.name}
          </Link>
        </h4>

        <h4 className="text-2xl mb-7">
          <span className="font-semibold text-gray-600">
             {formatCurrency(room.price)}
          </span>
          <span className="text-gray-400 text-sm"> /Night</span>
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPencilOutline />
            <span>
              {room.capacity} {room.capacity === 1 ? "person" : "people"}
            </span>
          </div>

          <Link
            href={`/room/${room.id}`}
            className="px-6 py-2.5 bg-orange-400 text-white rounded-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
