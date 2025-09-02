import HeroBanner from "@/components/HeroBanner";
import RetreatSection from "@/components/RetreatSection";
import SplineWrapper from "@/components/SplineWrapper";
import Image from "next/image";
import { Wifi } from "lucide-react";
import ScrollToOnLoad from "@/components/ScrollToOnLoad";
import {
  GALLERY_IMAGES,
  PROPERTY_IMAGES,
  RESTAURANT_IMAGES,
  OFFICIAL_EMAIL,
} from "@/lib/contants";
import Scroller from "@/components/Scroller";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  } else if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else {
    return "Today";
  }
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollToOnLoad />
      <HeroBanner />
      <RetreatSection />
      <section id="about" className="min-h-screen flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:sticky lg:top-0 h-80 lg:h-screen w-full lg:w-1/3">
          <Image
            src="/aboutus.jpg"
            alt="about us"
            height={1024}
            width={300}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="!my-0 relative flex-1 overflow-y-auto">
          <div className="px-4 md:px-6 lg:px-10 pb-8 pt-8 lg:pt-40">
            <Image
              src="/beach-bg.png"
              alt="about us"
              height={150}
              width={150}
              className="object-cover absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -z-10 hidden lg:block"
            />
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6 w-fit mx-auto text-center">
              Journey by the Shore
            </h1>
            <p className="text-center text-base sm:text-lg max-w-4xl mx-auto font-semibold">
              Discover Chivla Paradise, your coastal getaway by the Malvan
              shore. Spacious rooms, breathtaking views, and unmatched service
              create the perfect setting for relaxation.
            </p>
            <p className="text-center text-base sm:text-lg max-w-4xl mx-auto font-semibold mt-4">
              Our team knows that travelling can be exhausting, and will do
              their best to make your stay easy and satisfying. Take a look at
              our site to find out more about our rooms, food and amenities, and
              get in touch if there&apos;s anything else we can help you with.
              We look forward to welcoming you soon!
            </p>
            <div className="my-8 lg:my-10">
              <div className="flex  flex-col justify-center items-center">
                <Image
                  src="/founder.png"
                  alt="Inda Khopkar"
                  height={100}
                  width={100}
                  className="rounded-full h-40 object-cover w-40 mb-4"
                />
                <h2 className="text-2xl font-semibold">Inda Khopkar</h2>
                <div className="flex items-center justify-center gap-4 my-4">
                  <Link
                    href={`mailto:indakhopkar93@gmail.com`}
                    className="bg-gradient-to-r from-green-900 to-[#009669] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <SiGmail className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/inda07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#009669] text-[#009669] px-6 py-2.5 rounded-full font-semibold hover:bg-[#009669] hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <p className="text-center text-base sm:text-lg max-w-4xl mx-auto font-semibold">
                I am the founder of Chivla Paradise, a serene beachside retreat
                in Malvan, where I blend hospitality with healing through
                immersive wellness experiences. I am an internationally
                certified NLP Trainer and Life Coach dedicated to helping people
                unlock their fullest potential. With corporate experience,
                expertise in personal growth, and a passion for dance and
                movement therapy, I inspire transformation by guiding
                individuals to reconnect with their authentic selves.
              </p>
            </div>

            <div className="my-8 lg:my-10" id="amenities">
              <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6 w-fit mx-auto text-center">
                Amenities
              </h1>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto px-2 lg:px-4">
                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 lg:p-4 rounded-full mb-3 lg:mb-4">
                      <Image
                        src="/amenities/restaurant.png"
                        alt="In-House Restaurant"
                        height={60}
                        width={60}
                        className="object-cover w-12 h-12 lg:w-15 lg:h-15"
                      />
                    </div>
                    <h3 className="font-semibold text-base lg:text-lg text-gray-800 mb-2">
                      In-House Restaurant
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      Delicious local and international cuisine
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 lg:p-4 rounded-full mb-3 lg:mb-4">
                      <Image
                        src="/amenities/parking.png"
                        alt="Free Parking"
                        height={60}
                        width={60}
                        className="object-cover w-12 h-12 lg:w-15 lg:h-15"
                      />
                    </div>
                    <h3 className="font-semibold text-base lg:text-lg text-gray-800 mb-2">
                      Free Parking
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      Secure parking space for your vehicle
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 lg:p-4 rounded-full mb-3 lg:mb-4">
                      <Image
                        src="/amenities/practice.png"
                        alt="Practice Area"
                        height={60}
                        width={60}
                        className="object-cover w-12 h-12 lg:w-15 lg:h-15"
                      />
                    </div>
                    <h3 className="font-semibold text-base lg:text-lg text-gray-800 mb-2">
                      Curated Experience
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      Personalized activities and experiences
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 lg:p-4 rounded-full mb-3 lg:mb-4">
                      <Image
                        src="/amenities/taxi.png"
                        alt="Taxi Service"
                        height={60}
                        width={60}
                        className="object-cover w-12 h-12 lg:w-15 lg:h-15"
                      />
                    </div>
                    <h3 className="font-semibold text-base lg:text-lg text-gray-800 mb-2">
                      Taxi Service
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      Convenient transportation options
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-3 lg:p-4 rounded-full mb-3 lg:mb-4">
                      <Wifi size={48} className="w-12 h-12 lg:w-15 lg:h-15" />
                    </div>
                    <h3 className="font-semibold text-base lg:text-lg text-gray-800 mb-2">
                      Free WiFi
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      High-speed internet access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-6 w-fit mx-auto gap-1">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6 w-fit mx-auto text-center translate-y-5">
                Rooms at
              </h1>
              <Image
                src="/chivla-paradise-logo.png"
                alt="Chivla Paradise"
                height={200}
                width={200}
                className="w-32 md:w-60"
              />
            </div>

            <div className="text-center text-base sm:text-lg max-w-4xl mx-auto font-semibold mb-8">
              Choose between our Sea View Room, offering breathtaking vistas of
              the ocean, and our Standard Room, a cozy retreat with all the
              comforts you need for a peaceful stay.{" "}
              <Link
                href="/stay"
                className="text-blue-600 underline underline-offset-4"
              >
                View Rooms
              </Link>
            </div>
            <Scroller onHoverStop>
              {PROPERTY_IMAGES.map((image) => (
                <Image
                  src={image}
                  alt="Gallery"
                  key={image}
                  width={400}
                  height={400}
                  priority
                  className="h-80 w-96 object-cover"
                />
              ))}
            </Scroller>
          </div>
          <div className="mt-8">
            <div className="flex justify-center items-center mb-6 w-fit mx-auto gap-1">
              <Image
                src="/chivla-paradise-logo.png"
                alt="Chivla Paradise"
                height={200}
                width={200}
                className="w-32 md:w-60"
              />
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6 w-fit mx-auto text-center translate-y-5">
                Restaurant
              </h1>
            </div>
            <p className="text-center text-base sm:text-lg max-w-4xl mx-auto font-semibold mb-8">
              The food we serve at Chivla Paradise is authentic Malvani cuisine
              and has been carefully crafted. We only use fresh fish and
              ingredients, and are happy to cater to different dietary
              requirements.
            </p>
            <Scroller onHoverStop direction="row" move="right">
              {RESTAURANT_IMAGES.map((image) => (
                <Image
                  src={image}
                  alt="Gallery"
                  key={image}
                  width={400}
                  height={400}
                  priority
                  className="h-80  w-96 object-cover"
                />
              ))}
            </Scroller>
          </div>
        </div>
      </section>
      <section className="relative" id="gallery">
        <SplineWrapper
          scene="https://prod.spline.design/KBjsrR66V17nm0hW/scene.splinecode"
          className="md:!h-[1000px] !h-[600px]"
        />

        <div className="layout pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-4 sm:mb-6 w-fit mx-auto text-center px-4">
            Our Gallery
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto font-semibold my-6 sm:my-8 md:my-10 px-4">
            Chivla Paradise rests at the edge of the beach, where rustic charm
            blends with the rhythm of the waves. From sunrise to starlit skies,
            our gallery reflects the beauty and serenity of this seaside escape.
          </p>

          <div className="gallery place-content-center px-2 sm:px-4 grid">
            {GALLERY_IMAGES.map((image) => (
              <Image
                src={image}
                alt="Gallery"
                key={image}
                height={400}
                width={400}
                className="w-full h-auto"
              />
            ))}
          </div>

          <div className="block md:hidden">
            <Scroller>
              {GALLERY_IMAGES.map((image) => (
                <Image
                  src={image}
                  alt="Gallery"
                  key={image}
                  height={300}
                  width={300}
                  className="w-full h-64 object-cover rounded-xl mx-2"
                />
              ))}
            </Scroller>
          </div>
        </div>
      </section>

      <section
        id="experiences"
        className="min-h-screen bg-gradient-to-br from-white to-orange-100 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900 to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-4">
              Guest Experiences
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover what our guests have to say about their magical stay at
              Chivla Paradise
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Review 1 - Julia Westmore */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-lg">
                      J
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Julia Westmore
                    </h4>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(
                        new Date(Date.now() - 5 * 30 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;This place is magic. I spent 10 days in a beachfront
                facing room. Very clean and comfortable with hot water, fan and
                air conditioning. The staff are amazing, especially Snehal who
                took the time to understand me, in fact all the staff were
                extremely helpful, and the food was very good. Thank you so
                much.&rdquo;
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Holiday · Solo</span>
                </div>
              </div>
            </div>

            {/* Review 2 - Swapnil Ghadigaonkar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      S
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Swapnil Ghadigaonkar
                    </h4>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(
                        new Date(Date.now() - 7 * 30 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;My favourite place to be whenever we visit Malvan. The
                hospitality is really good. The positive aura you feel when you
                enter this place. The hotel rooms are well maintained, the food
                is authentic and the best beach view. Strongly recommended if
                you are planning to stay in Malvan.&rdquo;
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Holiday · Family</span>
                </div>
              </div>
            </div>

            {/* Review 3 - sarvesh kunkolienkar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-lg">
                      S
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      sarvesh kunkolienkar
                    </h4>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(
                        new Date(Date.now() - 4 * 30 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;Chivla Paradise provided a wonderful weekend escape. The
                beachfront location is stunning, and the owners&apos; warmth
                truly stood out. Their flexibility and accommodative nature made
                my stay incredibly comfortable, and the personal attention was
                exceptional. Plus, the home-cooked meals were delectable.&rdquo;
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Holiday · Family</span>
                </div>
              </div>
            </div>

            {/* Review 4 - Neelam V */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      N
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Neelam V</h4>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(
                        new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;Chivla Paradise is a serene, beachside retreat perfect
                for relaxation. Stunning views, delicious food, and warm,
                attentive service made our stay truly enjoyable. Highly
                recommended for a peaceful getaway.&rdquo;
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Holiday · Family</span>
                </div>
              </div>
            </div>

            {/* Review 5 - Bhagyashree Sawant */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-lg">
                      B
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Bhagyashree Sawant
                    </h4>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(
                        new Date(Date.now() - 1 * 30 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;We stayed here for 1 night during off season. The
                location is awesome and since it was off season, the beach was
                also not crowded. And the best part was that it was just across
                the road. The rooms were clean. Food was also tasty. Overall it
                was a wonderful experience and i would definitely recommend this
                paradise. 😊&rdquo;
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Holiday · Family</span>
                </div>
              </div>
            </div>

            {/* Review 6 - Abel Light */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 font-semibold text-lg">
                      A
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Abel Light</h4>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(
                        new Date(Date.now() - 5 * 30 * 24 * 60 * 60 * 1000)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;Great space, location and a calm and peaceful
                environment. The beachfront view is absolutely stunning and the
                staff is very friendly and helpful. The food is delicious and
                authentic Malvani cuisine. Highly recommended for a relaxing
                getaway.&rdquo;
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Holiday · Couple</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Experience Paradise?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our satisfied guests and create your own magical memories
                at Chivla Paradise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-green-900 to-[#009669] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Your Stay
                </Link>
                <Link
                  className="border-2 border-[#009669] text-[#009669] px-8 py-3 rounded-full font-semibold hover:bg-[#009669] hover:text-white transition-all duration-300"
                  target="_blank"
                  href="https://www.google.com/travel/search?q=chivla%20paradise&g2lb=4965990%2C4969803%2C72248047%2C72248049%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958624%2C72959983%2C72990342%2C73059275&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRwopEicyJTB4M2JlYWE5YWNjNzE2ZWZmYjoweDYyYTBmYTRhYjgwNmI2MWMSGhIUCgcI6Q8QCBgUEgcI6Q8QCBgVGAEyAhAA&qs=CAEyE0Nnb0luT3lhd0t2SnZ0QmlFQUU4AkIJCRy2BrhK-qBiQgkJHLYGuEr6oGI&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjw-LWYzpePAxUAAAAAHQAAAAAQBQ"
                >
                  View More Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
