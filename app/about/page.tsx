import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="Learn more about our hotel" />
      <div className="max-width-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/about-image.jpg"
            width={650}
            height={579}
            alt="about image"
          />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              officia, ab voluptate eaque deleniti itaque sit nihil cupiditate
              doloribus odio.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Enim expedita quod sed sapiente et delectus.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime aperiam molestias amet ipsa dicta aspernatur!
                    Laboriosam quos dignissimos quisquam perspiciatis!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
