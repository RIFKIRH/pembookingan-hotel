import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import {
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact US",
};

const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="Contact Us"
        subTitle="Where Elegance Meets the Horizon"
      />
      <div className="max-width-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg text-gray-500 mb=3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touch Today
            </h1>
            <p className="text-gray-700 py-5">
            Kami siap membantu setiap kebutuhan dan pertanyaan Anda dengan layanan yang cepat, profesional, dan penuh perhatian. Baik untuk reservasi, permintaan khusus, maupun informasi lebih lanjut mengenai fasilitas dan layanan kami, tim kami selalu tersedia untuk memastikan pengalaman Anda berjalan sempurna.
             </p>
            <p className="text-gray-700 py-5">
            Silakan hubungi kami melalui telepon, email, atau kunjungi langsung properti kami. Kami menantikan kesempatan untuk menyambut Anda.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoMailOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Email :</h4>
                  <p>email-us@example.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoCallOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Phone Number :</h4>
                  <p>+62 8xxxxxxxxxxx, +62 8xxxxxxxxxxx</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Address :</h4>
                  <p>Aurelia Grand Vista Hotel, Pekanbaru, INDONESIA</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
            <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
