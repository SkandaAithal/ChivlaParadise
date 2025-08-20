import React from "react";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import { OFFICIAL_EMAIL } from "@/lib/contants";
import { FloatingPaths } from "@/components/FloatingPaths";

const ContactPage = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-tr from-green-200 via-yellow-50 via-50% to-white">
      <div className="absolute inset-0 min-h-screen overflow-hidden translate-y-20 md:translate-y-0">
        <FloatingPaths position={0} className="text-green-800" />
      </div>
      <div className="min-h-screen text-white relative z-20 layout !pt-28 md:!pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-2xl max-w-4xl mx-auto bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl  mb-8 text-center">
            Your seaside escape is only a message away. Send us your queries or
            booking requests, and the Chivla Paradise team will be delighted to
            assist you promptly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !pb-20 fade-in">
            <ContactForm />
            <div className="space-y-10">
              <div>
                <h2 className="text-xl bg-gradient-to-r  from-green-900  to-[#009669] bg-clip-text text-transparent mb-4">
                  Quick Contact
                </h2>
                <div className="flex gap-8">
                  <Link href={`mailto:${OFFICIAL_EMAIL}`} className="group">
                    <SiGmail className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="https://wa.me/918291130446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <FaWhatsapp className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="tel:+918291130446" className="group">
                    <FaPhone className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent">
                  Our Location
                </h2>
                <p className="text-black text-sm">
                  Click to open in Google Maps
                </p>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
