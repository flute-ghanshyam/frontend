import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          About Flute Connect
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Founded in 2018, Flute Connect is a vibrant platform dedicated to
          fostering meaningful connections and enriching lives through our core
          pillars: dating, astrology, and insightful blogs.
        </p>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            At Flute Connect, we believe in the power of connection—whether it’s
            finding love, exploring cosmic insights, or sparking inspiration
            through knowledge. Our mission is to create a dynamic, inclusive
            space where individuals can discover romance, gain astrological
            guidance, and engage with thought-provoking content that resonates
            with their passions and curiosities.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Do
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>Dating:</strong> We provide a safe and intuitive platform
              for singles to meet, connect, and build relationships that matter.
              Our innovative features help you find compatible matches and
              create lasting bonds.
            </li>
            <li>
              <strong>Astrology:</strong> Dive into the mysteries of the cosmos
              with personalized horoscopes, compatibility insights, and
              astrological advice tailored to guide you through life’s journey.
            </li>
            <li>
              <strong>Blogs:</strong> Our engaging blog content covers love,
              lifestyle, wellness, and astrology, offering fresh perspectives
              and practical tips to inspire and empower our community.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Flute Connect?
          </h2>
          <p className="text-gray-600">
            Since our inception, we’ve been committed to delivering authentic,
            user-centric experiences. Whether you’re seeking a soulmate, cosmic
            clarity, or a dose of inspiration, Flute Connect is your trusted
            companion. Join our growing community and let us help you connect
            with what matters most.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600">
            We envision a world where every individual feels connected,
            understood, and inspired. By blending technology, astrology, and
            storytelling, Flute Connect is redefining how people come together
            and explore life’s possibilities.
          </p>
        </div>

        {/* Closing Statement */}
        <p className="text-lg font-medium text-gray-900 text-center">
          <strong>Flute Connect</strong> – Where connections flourish, stars
          align, and stories come to life.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
