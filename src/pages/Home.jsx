import { Code, Coffee, Award } from "lucide-react";
import { useEffect, useState } from "react";

const skills = [
  { name: "Html", color: "border-orange-500", logo: "/logos/html.svg" },
  { name: "JavaScript", color: "border-yellow-500", logo: "/logos/js.svg" },
  { name: "PHP", color: "border-blue-600", logo: "/logos/php.svg" },
  { name: "sqlite", color: "border-red-600", logo: "/logos/sqlite.svg" },
  { name: "Next.js", color: "border-green-500", logo: "/logos/nextjs.svg" },
  { name: "Vite", color: "border-purple-900", logo: "/logos/vite.svg" },
  { name: "GitHub", color: "border-gray-800", logo: "/logos/github.svg" },
  { name: "Kotlin", color: "border-purple-700", logo: "/logos/kotlin.svg" },
  { name: "TailwindCSS", color: "border-blue-500", logo: "/logos/tailwind.svg" },
  { name: "CSS", color: "border-blue-500", logo: "/logos/css.svg" },
  { name: "Autoprefixer", color: "border-blue-500", logo: "/logos/autoprefixer.svg" },
  { name: "Mysql", color: "border-blue-500", logo: "/logos/mysql.svg" },
  { name: "Invinity", color: "border-purple-500", logo: "/logos/infinity.svg" },
  { name: "Eslint", color: "border-blue-500", logo: "/logos/eslint.svg" },
  { name: "Vercel", color: "border-purple-700", logo: "/logos/vercel.svg" },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Inject CSS animasi
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
      .animate-marquee { animation: marquee 30s linear infinite; }
      .animate-marquee-right { animation: marquee-right 35s linear infinite; }

      @media (max-width: 740px) {
        .animate-marquee { animation: marquee 15s linear infinite; }
        .animate-marquee-right { animation: marquee-right 20s linear infinite; }

        /* Flip Card */
        .flip-card { perspective: 1000px; }
        .flip-card-inner {
          position: relative;
          width: 100%; height: 100%;
          text-align: center;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%; height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        .flip-card-back { transform: rotateY(180deg); }

        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(100px) scale(0.8); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
      }

      .marquee-container:hover .animate-marquee,
      .marquee-container:hover .animate-marquee-right {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => {
      document.head.removeChild(style);
      clearTimeout(timer);
    };
  }, []);

  // Bagi skill jadi row isi 3 untuk mobile
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 3) {
    skillRows.push(skills.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen  text-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Status */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-400">Status</div>
            <div className="text-green-400 text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for work
            </div>
          </div>
          <div className="border-t border-gray-800"></div>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            Hi, I'm As'ad Mahmud Akram
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 text-gray-400 text-sm mb-4">
            <div className="flex items-center gap-2">Based in Klaten, Indonesia 🇮🇩</div>
            <div className="flex items-center gap-2">Onsite</div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Saya adalah mahasiswa Teknologi Komputer di Universitas Teknologi Digital
            Indonesia angkatan 2023. Fokus utama saya pada pengembangan frontend
            menggunakan React, dengan pemahaman berbagai teknologi web. Saya juga
            tertarik pada desain UI/UX, untuk menciptakan antarmuka yang fungsional
            sekaligus menarik secara visual.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code size={20} />
            <h2 className="text-xl font-semibold">Skills</h2>
          </div>
          <p className="text-gray-400 mb-6">My professional skills and technologies</p>

          {/* Mobile grid flip-card */}
          <div className="block sm:hidden space-y-3">
            {skillRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-2">
                {row.map((skill, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`flip-card h-20 w-full ${
                      isVisible ? "animate-slide-in-right" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(rowIndex * 3 + colIndex) * 100}ms` }}
                  >
                    <div className="flip-card-inner h-full w-full relative">
                      {/* Front */}
                      <div
                        className={`flip-card-front absolute inset-0 px-2 py-2 flex flex-col items-center justify-center gap-1 border ${skill.color} bg-white/10 rounded-lg shadow-sm`}
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                          onError={(e) => (e.target.style.display = "none")}
                        />
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                      {/* Back */}
                      <div
                        className={`flip-card-back absolute inset-0 flex items-center justify-center border ${skill.color} bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-sm`}
                      >
                        <span className="text-xs font-bold">{skill.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop marquee */}
          <div className="hidden sm:block">
            <div className="overflow-hidden relative marquee-container mb-4">
              <div className="flex w-max animate-marquee gap-3">
                {skills.concat(skills).map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 flex items-center gap-2 border ${skill.color} bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:bg-white/20 transition whitespace-nowrap`}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden relative marquee-container">
              <div className="flex w-max animate-marquee-right gap-3">
                {skills.concat(skills).map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 flex items-center gap-2 border ${skill.color} bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:bg-white/20 transition whitespace-nowrap`}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Coffee size={20} />
            <h2 className="text-xl font-semibold">Service</h2>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Sebagai seorang pengembang frontend lepas, saya berdedikasi untuk
            menciptakan situs web yang luar biasa dan solusi web strategis
            untuk merek, perusahaan, institusi, dan startup. Dengan pengalaman
            mendalam dalam pengembangan web modern, saya siap membantu
            mewujudkan visi digital Anda.
          </p>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-lg p-5 border border-blue-500/30">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Award size={18} /> Let's work together!
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Ready to create something amazing together? Let's discuss your
              project and bring your vision to life.
            </p>
            <a
              href="../contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition transform hover:scale-105 inline-block"
            >
              Get In Touch
            </a>
          </div>

          <div className="bg-gray-900 rounded-lg p-5 border border-gray-800">
            <h4 className="text-lg font-semibold mb-2">Connect with me</h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow my work and connect on social media
            </p>
            <a
              href="../contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition transform hover:scale-105 inline-block"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
