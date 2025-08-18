import HeroBanner from "@/components/HeroBanner";
import SplineWrapper from "@/components/SplineWrapper";

export default function Home() {
  return (
    <main className="max-w-[1780px] mx-auto relative min-h-screen">
      <HeroBanner />
      <SplineWrapper
        scene="https://prod.spline.design/KBjsrR66V17nm0hW/scene.splinecode"
        className="!h-[800px]"
      />

      <section
        id="spaces"
        className="h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">Spaces Section</h2>
      </section>
      <section
        id="experiences"
        className="h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Experiences Section
        </h2>
      </section>
      <section
        id="gallery"
        className="h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">Gallery Section</h2>
      </section>
    </main>
  );
}
