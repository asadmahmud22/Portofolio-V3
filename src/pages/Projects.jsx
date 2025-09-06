import React, { useState } from "react";
import { BadgeCheck, ExternalLink, Eye, Code, X } from "lucide-react";

const projects = [
  {
    title: "Personal Website",
    description:
      "Situs pribadi dan portofolio milik As'ad Mahmud Akram, seorang pengembang web yang berfokus pada frontend development.",
    image: "/projects/site.png",
    tech: ["react", "tailwind", "eslint", "vite", "vercel"],
    featured: true,
    link: "https://asadmahmudakram.vercel.app",
    category: "Web Development",
  },
  {
    title: "Online Exam Siswa",
    description:
      "Aplikasi ujian online berbasis web dengan sistem login, manajemen soal, dan penyimpanan hasil ujian.",
    image: "/projects/online-exam.png",
    tech: ["html", "css", "js", "php", "mysql", "infinity"],
    featured: true,
    link: "https://asadmahmud.42web.io/index.php",
    category: "Full Stack",
  },
  {
    title: "Design UI/UX APP Store Shoes",
    description:
      "Desain UI/UX aplikasi e-commerce mobile Shoes Store menggunakan Figma.",
    image: "/projects/app-shoes.png",
    tech: ["figma"],
    featured: true,
    link: "https://www.figma.com/design/7ceElGN2RimU2X0ekNFn6e/UI-UX-Wireframe-for-Mobile-E-Commerce",
    category: "UI/UX Design",
  },
  {
    title: "SiDompet - Aplikasi Pengelolaan Keuangan",
    description:
      "Aplikasi mobile Kotlin + SQLite untuk mencatat pemasukan dan pengeluaran harian.",
    image: "/projects/app-SiDompet.png",
    tech: ["kotlin", "sqlite"],
    link: "#",
    category: "Mobile App",
  },
  {
    title: "Website MyLinksPage",
    description:
      "Website sederhana untuk mengumpulkan semua link pribadi seperti Linktree.",
    image: "/projects/my-link.png",
    tech: ["html", "css", "js"],
    link: "https://my-link-lemon.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Website Katalog Kopi",
    description:
      "Website katalog sederhana bertema kopi dengan tampilan minimalis modern.",
    image: "/projects/kopi-senja.png",
    tech: ["html", "css"],
    link: "https://kopisenja-rouge.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Website Kuliner Khas Jogja",
    description:
      "Website informatif untuk menampilkan kuliner khas Yogyakarta.",
    image: "/projects/kuliner-khas-jogja.png",
    tech: ["html", "css"],
    link: "https://kuliner-jogja-rho.vercel.app/",
    category: "Web Development",
  },
];

const techIcons = {
  html: "🌐",
  css: "🎨",
  php: "🐘",
  ts: "📘",
  mysql: "🗄️",
  js: "⚡",
  react: "⚛️",
  vue: "💚",
  next: "▲",
  tailwind: "🌊",
  vercel: "🔺",
  infinity: "♾️",
  eslint: "🔧",
  vite: "⚡",
  kotlin: "🤖",
  figma: "🎯",
  sqlite: "📱",
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false); // untuk dropdown mobile

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="text-white min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="relative text-center py-5 px-4 md:py-1">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Several projects that I have worked on.
            <br />
            <span className="text-blue-400">
              Crafted with passion and precision.
            </span>
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full flex justify-center mb-8 px-4">
        {/* Tabs Filter - Hanya tampil di Desktop */}
        <div className="hidden md:block">
          <div className="flex gap-2 p-2 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Dropdown Filter - Hanya tampil di Mobile */}
<div className="block md:hidden w-full">
  <div className="relative inline-block text-left w-full">
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="inline-flex justify-between w-full rounded-md border border-gray-700 shadow px-4 py-2 bg-black/70 text-white text-sm font-medium hover:bg-black/80 focus:outline-none"
    >
      {filter.charAt(0).toUpperCase() + filter.slice(1)}
      <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {open && (
      <div className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5 z-10">
        {/* Tombol X Close */}
        <div className="flex justify-end p-2 border-b border-white/10">
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-md hover:bg-white/10 transition"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        <div className="py-1 text-white">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-black/70"
            >
              {cat === "all"
                ? "All Projects"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</div>

      </div>

      {/* Projects Grid */}
      <div className="px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/20"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] md:text-xs px-2 py-1 rounded-full font-bold shadow-md flex items-center gap-1">
                  <BadgeCheck size={10} />
                  Featured
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-sm text-[10px] md:text-xs px-2 py-1 rounded-full text-gray-300 border border-white/20">
                {project.category}
              </div>

              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-blue-600/80 to-purple-600/80 z-20 transition-opacity duration-300 flex items-center justify-center ${
                    hoveredProject === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <Eye className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <Code className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      <span>{techIcons[tech]}</span>
                      <span className="capitalize">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg md:rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 group text-xs md:text-sm"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    Visit Project
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 md:px-6 md:py-3 bg-gray-700/50 text-gray-400 font-semibold rounded-lg md:rounded-xl text-xs md:text-sm cursor-not-allowed">
                    <Code size={14} />
                    Private Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
