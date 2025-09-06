import React from "react";

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 80, color: "bg-cyan-400" },
        { name: "Next.js", level: 75, color: "bg-black" },
        { name: "JavaScript", level: 85, color: "bg-yellow-400" },
        { name: "TypeScript", level: 50, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 70, color: "bg-green-500" },
        { name: "Python", level: 65, color: "bg-blue-400" },
        { name: "Express", level: 20, color: "bg-gray-400" },
        { name: "Php", level: 70, color: "bg-blue-600" },
        { name: "REST APIs", level: 85, color: "bg-purple-500" },
        { name: "GraphQL", level: 75, color: "bg-pink-500" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", level: 90, color: "bg-orange-600" },
        { name: "Docker", level: 75, color: "bg-blue-500" },
        { name: "AWS", level: 70, color: "bg-yellow-500" },
        { name: "CI/CD", level: 80, color: "bg-gray-500" },
        { name: "Linux", level: 85, color: "bg-yellow-600" },
        { name: "Vercel", level: 90, color: "bg-black" },
      ],
    },
    {
      category: "Design & UX",
      items: [
        { name: "Figma", level: 85, color: "bg-purple-400" },
        { name: "UI Design", level: 80, color: "bg-pink-400" },
        { name: "UX Principles", level: 75, color: "bg-indigo-500" },
        { name: "Adobe XD", level: 70, color: "bg-pink-600" },
      ],
    },
  ];

  return (
    <div className="min-h-screen  text-white ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            My Skills
          </h1>
          <p className="text-mb-6 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillCategory, index) => (
            <div 
              key={index}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-green-400 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-6 text-green-400 flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse"></span>
                {skillCategory.category}
              </h2>
              <div className="space-y-5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Additional Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Redux", "MongoDB", "PostgreSQL", "Firebase", "Jest", 
              "React Testing Library", "Webpack", "Babel", "Sass", 
              "Styled Components", "Material UI", "Ant Design", "Three.js",
              "GSAP", "JWT", "OAuth", "Nginx", "Jenkins", "Kubernetes"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full text-sm border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
          <h2 className="text-2xl font-semibold mb-8 text-purple-400">Experience Timeline</h2>
          <div className="space-y-8">
            {[
              {
                year: "2023 - Present",
                role: "Senior Frontend Developer",
                company: "Tech Innovations Inc.",
                description: "Leading the frontend team to build scalable web applications using React and Next.js."
              },
              {
                year: "2021 - 2023",
                role: "Frontend Developer",
                company: "Digital Solutions Co.",
                description: "Developed and maintained multiple client-facing applications with modern JavaScript frameworks."
              },
              {
                year: "2019 - 2021",
                role: "Junior Web Developer",
                company: "StartUp Ventures",
                description: "Built responsive websites and collaborated with designers to implement UI/UX best practices."
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-green-400">
                <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-green-400 border-4 border-gray-900"></div>
                <div className="mb-1">
                  <span className="text-sm text-green-400">{item.year}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;