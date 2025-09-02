"use client";
import React from "react";
import Link from "next/link";

const RetreatSection = () => {
  return (
    <section
      id="retreat"
      className="bg-gradient-to-b from-white to-emerald-50 py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-900 to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6">
          Monsoon Magic Meets Inner Healing: A Beachside Retreat in Malvan
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          Escape the ordinary and rediscover yourself amidst the serene beauty
          of the Konkan coast. Join us for a transformative 2-day beachside
          healing retreat at the tranquil Chivla Paradise in Malvan.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Imagine: the gentle embrace of monsoon rains, the calming rhythm of
          ocean waves, and the rejuvenating power of nature harmonizing to
          uplift your spirit. This isn&apos;t just a getaway; it&apos;s a sacred
          space to reconnect with your innermost self and emerge lighter, freer,
          and full of life.
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent my-8" />

        <h3 className="text-2xl md:text-3xl font-semibold text-emerald-900 mb-4">
          What Awaits You
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-900 leading-relaxed marker:text-emerald-600">
          <li>
            <span className="font-semibold">Mindful Experiences</span>: Immerse
            yourself in the present moment with guided practices designed to
            cultivate inner peace.
          </li>
          <li>
            <span className="font-semibold">Guided Meditations by the Sea</span>
            : Let the ocean&apos;s calming energy deepen your meditative journey
            and soothe your soul.
          </li>
          <li>
            <span className="font-semibold">Dance Therapy</span>: Express,
            release, and rediscover joy through the liberating power of
            movement.
          </li>
          <li>
            <span className="font-semibold">
              Nature-Based Healing Activities
            </span>
            : Engage with the natural elements of Malvan for profound healing
            and grounding.
          </li>
          <li>
            <span className="font-semibold">
              Delicious Local Cuisine &amp; Soulful Conversations
            </span>
            : Nourish your body with wholesome, local flavors and connect with
            like-minded individuals in meaningful dialogue.
          </li>
        </ul>

        <div className="my-6">
          <h4 className="text-xl font-semibold text-emerald-900 mb-2">
            Dates (Limited Seats – Book Early!)
          </h4>
          <p className="text-gray-800">
            <span className="font-semibold">Batch 1</span>: 22nd-24th August
            2025
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Batch 2</span>: 12th-14th September
            2025
          </p>
        </div>

        <div className="mt-10">
          <p className="text-emerald-900 font-medium mb-4">
            Ready to Rejuvenate?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-900 to-[#009669] text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-all duration-300"
          >
            Reserve Your Spot Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RetreatSection;
