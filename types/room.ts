export type RoomProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  capacity: number;
  RoomAmenities: {
    amenitiesId: string;
  }[];
};
