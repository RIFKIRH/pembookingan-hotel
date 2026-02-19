import { Metadata } from "next";
import { Suspense } from "react";
import HeaderSection from "@/components/header-section";
import Main from "@/components/main";
import RoomSkeleton from "@/components/skeletons/room-skeleton";

export const metadata: Metadata = {
  title: "Room & Rates",
  description: "Choose Your Best Room Today!",
};

const RoomPage = () => {
  return (
    <div>
      <HeaderSection
        title="Rooms & Rates"
        subTitle="Where Elegance Meets the Horizon"
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<RoomSkeleton/>}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
