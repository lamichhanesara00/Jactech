import React from "react";
import teamData from "./TeamData";

export default function TeamSection() {
  const leaders = teamData.filter((member) => member.category === "leadership");
  const teamMembers = teamData.filter((member) => member.category === "team");

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-20 animate-fadeInUp">
        <div className="inline-block mb-4">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
            Our Team
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Expertly Driven.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
            Individually Inspired.
          </span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Our leadership and development team works together to build scalable,
          innovative, and future-ready digital solutions.
        </p>
      </div>

      {/* ================= LEADERSHIP TEAM ================= */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Visionary leaders architecting the future of digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-300 animate-slideInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-red-600">
                    Leadership
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold text-red-600 mb-5 tracking-wide uppercase">
                  {leader.role}
                </p>

                {/* Quote Section */}
                {leader.quote && (
                  <div className="mb-5 pl-4 border-l-4 border-red-600 bg-red-50/50 py-3 pr-3 rounded-r-lg">
                    <p className="text-sm italic text-gray-700 leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DEVELOPMENT TEAM ================= */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Development & Creative Team
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the architects of innovation — the experts who transform your
            digital dreams into reality
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-300 transform hover:-translate-y-2 animate-fadeInScale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  loading="lazy"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-red-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Role Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold text-red-600">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">
                  {member.role}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {member.description}
                </p>

                {/* Animated Arrow */}
                <div className="mt-4 flex items-center text-red-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 ml-2 animate-bounceRight"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceRight {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes floatDelay {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-fadeInScale {
          opacity: 0;
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-bounceRight {
          animation: bounceRight 1s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-floatDelay {
          animation: floatDelay 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
