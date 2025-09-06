import { useState } from "react";
import {
  Send,
  Instagram,
  Linkedin,
  Mail,
  Github,
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
  Star,
  Sparkles,
  Heart,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success feedback
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    
    // Show success message (you can replace this with your actual implementation)
    alert("Message sent successfully!");
  };

  const socialLinks = [
    {
      title: "Stay in Touch",
      description: "Reach out via email for any inquiries or collaborations.",
      link: "mailto:asadmahmudakram@gmail.com",
      buttonText: "Send Email",
      bg: "from-red-500/80 to-pink-500/80",
      icon: <Mail size={28} />,
      iconBg: "bg-red-500/20",
      hoverBg: "group-hover:from-red-400/90 group-hover:to-pink-400/90",
    },
    {
      title: "Follow My Journey",
      description: "Stay updated with my latest posts and stories on Instagram.",
      link: "https://instagram.com/asaddakram",
      buttonText: "Follow Me",
      bg: "from-purple-500/80 to-pink-500/80",
      icon: <Instagram size={28} />,
      iconBg: "bg-purple-500/20",
      hoverBg: "group-hover:from-purple-400/90 group-hover:to-pink-400/90",
    },
    {
      title: "Let's Connect",
      description: "Connect for collaboration or explore my professional experience.",
      link: "https://linkedin.com/in/asad-mahmud-akram",
      buttonText: "Connect",
      bg: "from-blue-500/80 to-cyan-500/80",
      icon: <Linkedin size={28} />,
      iconBg: "bg-blue-500/20",
      hoverBg: "group-hover:from-blue-400/90 group-hover:to-cyan-400/90",
    },
    {
      title: "Join the Fun",
      description: "Follow me on TikTok for entertaining and engaging content.",
      link: "https://www.tiktok.com/@asad-akram",
      buttonText: "Watch Videos",
      bg: "from-gray-600/80 to-gray-500/80",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      iconBg: "bg-gray-500/20",
      hoverBg: "group-hover:from-gray-500/90 group-hover:to-gray-400/90",
    },
    {
      title: "Explore the Code",
      description: "Explore the source code for all my projects on GitHub.",
      link: "https://github.com/asadmahmud22",
      buttonText: "View Code",
      bg: "from-gray-800/80 to-gray-700/80",
      icon: <Github size={28} />,
      iconBg: "bg-gray-700/20",
      hoverBg: "group-hover:from-gray-700/90 group-hover:to-gray-600/90",
    },
  ];

  return (
    <div className="text-white min-h-screen ">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0  blur-3xl"></div>
        <div className="relative text-center py-5 px-2">
          <h1 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-md text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's create something amazing together.
            <br />
            <span className="text-blue-400">I'm always open to new opportunities and collaborations.</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-1 pb-16">
        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">asadmahmudakram@gmail.com</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Depok, Yogyakarta, Indonesia</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Response Time</h3>
            <p className="text-gray-400 text-sm">Within 24 hours</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Find me on social media
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${social.bg} ${social.hoverBg} backdrop-blur-xl rounded-2xl p-6 border border-white/20 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 ${social.iconBg} backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <div className={`transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1 -translate-y-1' : ''}`}>
                      <ArrowUpRight className="w-5 h-5 text-white/70" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {social.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-6 leading-relaxed">
                    {social.description}
                  </p>
                  
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                      {social.buttonText}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <Send className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Send me a message
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          
          <div className="text-gray-500 text-sm space-y-1">
            <p>COPYRIGHT © 2025</p>
            <p className="font-semibold">As'ad Mahmud Akram. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Contact;