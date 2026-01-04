import { Metadata } from "next";
import { Suspense } from "react";
import HeaderSection from "@/components/header-section";
import Main from "@/components/main";

export const metadata: Metadata = {
  title: "Room & Rates",
  description: "Choose Your Best Room Today!",
};

const RoomPage = () => {
  return (
    <div>
      <HeaderSection
        title="Rooms & Rates"
        subTitle="Lorem ipsum dolor sit amet."
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<p>Loading....</p>}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
