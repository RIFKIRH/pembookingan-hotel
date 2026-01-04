import Card from "@/components/card";
import { getRooms } from "@/lib/data";
import { RoomProps } from "@/types/room";

const Main = async () => {
  const rooms = await getRooms();

  return (
    <div className="max-width-screen-xl py-6 pb-20 px-4 mx-auto">
      <div className="grid gap-7 md:grid-cols-3">
        {rooms.map((room: RoomProps) => (
  <Card room={room} key={room.id} />
))}
      </div>
    </div>
  );
};

export default Main;
