import { useState } from "react";
import { Code } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Award,
  Briefcase,
  LayoutDashboard,
  MessageCircle,
  Mail,
  Globe,
  Sparkles,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const Layout = () => {
  const location = useLocation();

  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black"
      }`}
    >
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between backdrop-blur-lg bg-black/80 border-b border-gray-800/50 px-5 py-3 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/50"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
          </div>
          <div>
            <div className="font-bold text-sm">As'ad Mahmud A</div>
            <div className="text-xs text-gray-400">Aaccessible</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="text-gray-300 backdrop-blur-sm bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/20 transition-all duration-200"
          >
            {language === "en" ? "🇺🇸 EN" : "🇮🇩 ID"}
          </button>
          <button
            onClick={toggleTheme}
            className="text-gray-300 backdrop-blur-sm bg-white/10 border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-200"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 backdrop-blur-sm bg-white/10 border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-200"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-60 border-r border-gray-800/30 backdrop-blur-xl bg-black/40 flex-col fixed h-full z-30 overflow-y-auto scrollbar-hide">
        <SidebarContent
          toggleLanguage={toggleLanguage}
          toggleTheme={toggleTheme}
          language={language}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Mobile Sidebar (Overlay) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="w-64 backdrop-blur-xl bg-black/90 border-r border-gray-700/50 flex flex-col h-full transform transition-transform duration-300 ease-out overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent
              toggleLanguage={toggleLanguage}
              toggleTheme={toggleTheme}
              language={language}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="md:ml-60 p-8 overflow-y-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};

const SidebarContent = ({
  toggleLanguage,
  toggleTheme,
  language,
  isDarkMode,
}) => {
  const location = useLocation();

  return (
    <>
      {/* Profile Section */}
      <div className="p-5 flex flex-col items-center relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Profile Image with Glow Effect */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-2xl">
              <img
                src="/src/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Status */}
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              As'ad Mahmud
            </h2>
            <div className="text-gray-400 text-xs font-medium">
              @asadmahmudakram
            </div>
            <div className="text-xs text-blue-400 mt-1 flex items-center gap-1 justify-center">
              <Sparkles size={10} />
              Full Stack Developer
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-2 w-full">
            <button className="relative group px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-xs font-medium text-white shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                Available to Hire
              </div>
            </button>

            <div className="flex gap-2">
              <button
                onClick={toggleLanguage}
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-2.5 py-1 text-xs font-medium hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                {language === "en" ? "🇺🇸" : "🇮🇩"}
              </button>

              <button
                onClick={toggleTheme}
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-1.5 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                {isDarkMode ? <Sun size={12} /> : <Moon size={12} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 flex-1 pb-1">
        <div className="space-y-1">
          {[
            {
              to: "/",
              label: "Home",
              icon: Home,
              color: "from-blue-500 to-cyan-500",
            },
            {
              to: "/about",
              label: "About",
              icon: User,
              color: "from-purple-500 to-pink-500",
            },
            {
              to: "/skills",
              label: "Skills",
              icon: Code,
              color: "from-green-500 to-emerald-500",
            },
            {
              to: "/achievements",
              label: "Achievements",
              icon: Award,
              color: "from-yellow-500 to-orange-500",
            },
            {
              to: "/projects",
              label: "Projects",
              icon: Briefcase,
              color: "from-red-500 to-rose-500",
            },
            {
              to: "/dashboard",
              label: "Dashboard",
              icon: LayoutDashboard,
              color: "from-indigo-500 to-blue-500",
            },
            {
              to: "/contact",
              label: "Contact",
              icon: Mail,
              color: "from-teal-500 to-cyan-500",
            },
          ].map(({ to, label, icon: Icon, color }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                key={to}
                to={to}
                className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${color} shadow-lg text-white`
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Background Glow for Active Item */}
                {isActive && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg blur opacity-30`}
                  ></div>
                )}

                <div className="relative z-10 flex items-center gap-3 w-full">
                  <div
                    className={`p-1.5 rounded-md ${
                      isActive
                        ? "bg-white/20"
                        : "bg-white/10 group-hover:bg-white/20"
                    } transition-colors`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="font-medium text-sm">{label}</span>
                  {isActive && (
                    <ChevronRight size={14} className="ml-auto animate-pulse" />
                  )}
                </div>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-1 border-t border-gray-800/30">
        <div className="text-center">
          <div className="text-xs text-gray-500 font-medium">
            © 2025 As'ad Mahmud Akram
          </div>
          <div className="text-xs text-gray-600 mt-1">All rights reserved</div>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <div
              className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
