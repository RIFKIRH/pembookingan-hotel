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
              Kami adalah destinasi perhotelan mewah yang menghadirkan standar hospitality kelas dunia. Dengan perpaduan arsitektur elegan, desain interior berkelas, dan pelayanan yang dipersonalisasi, kami menciptakan pengalaman menginap yang melampaui ekspektasi.
            </p>
              <p className="text-gray-700 py-5">
              Setiap ruang dirancang dengan presisi, setiap layanan diberikan dengan perhatian penuh terhadap detail, dan setiap tamu diperlakukan sebagai prioritas utama. Bagi kami, kemewahan bukan sekadar fasilitas — melainkan pengalaman yang terasa sejak langkah pertama Anda memasuki properti kami.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                  <p className="text-gray-600">
                    Menjadi ikon perhotelan premium yang diakui secara internasional atas keunggulan layanan, keanggunan desain, dan pengalaman menginap yang eksklusif.
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
                    <ul>
                    <li>Memberikan layanan personal yang elegan, profesional, dan berstandar global.</li>
                    <li>Menyediakan fasilitas premium dengan kualitas terbaik di setiap aspek pengalaman tamu.</li>
                    <li>Menghadirkan suasana yang memadukan kemewahan, kenyamanan, dan privasi.</li>
                    <li>Menjaga komitmen terhadap inovasi, kualitas, dan kepuasan tamu yang berkelanjutan.</li>
                    </ul>
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
