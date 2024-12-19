import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// TailwindIcon defined inline
const TailwindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 mx-auto text-blue-600"
    viewBox="0 0 256 154"
  >
    <path
      fill="skyblue"
      d="M128 0C93.867 0 72.533 17.067 64 51.2c10.667-17.067 25.6-25.6 44.8-25.6 16 0 28.8 8.533 38.4 25.6 9.6 16 9.6 35.2 0 57.6-11.733 23.467-33.067 35.2-64 35.2C29.867 144 9.6 112.533 0 51.2 14.933 76.8 33.067 89.6 54.4 89.6c17.067 0 30.933-8.533 41.6-25.6 9.6-16 9.6-34.133 0-54.4C99.2 3.2 77.867 0 44.8 0 9.6 0-10.667 17.067-19.2 51.2c10.667-17.067 25.6-25.6 44.8-25.6C96 0 108.8 8.533 118.4 25.6 128 41.6 128 60.8 118.4 83.2 106.667 105.6 85.333 117.333 54.4 117.333 22.4 117.333 2.133 97.067 0 51.2 14.933 76.8 33.067 89.6 54.4 89.6 70.4 89.6 84.267 81.067 96 64c9.6-16 9.6-34.133 0-54.4-10.667-17.067-30.933-25.6-60.8-25.6z"
    />
  </svg>
);

// Skills array
const skills = [
  { name: "JavaScript", icon: "fa-js",color: "text-yellow-500",dist: 300,bgco: " #eab308"},
  { name: "React", icon: "fa-react",color: "text-blue-300",dist:300,bgco: "#93c5fd"},
  { name: "CSS3", icon: "fa-css3" ,color:"text-blue-500",dist:320,bgco: "#3b82f6 "},
  { name: "HTML5", icon: "fa-html5",color: "text-orange-500",dist: 371,bgco: "#f97316"},
  { name: "Tailwind Css", customIcon: <TailwindIcon />,dist: 327,bgco:"#93c5fd"},
];

// Skills Component
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-6 mary">My Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2 active:scale-75 cursor-pointer ">
            {skill.customIcon ? (
              skill.customIcon
            ) : (
              <i className={`fab ${skill.icon} text-4xl ${skill.color}`}></i>
            )}
            <h4 className="text-lg font-semibold">{skill.name}</h4>
            <div className=" h-3 bg-gray-400 rounded-lg">
              <div className="h-3 bg-black rounded-lg"
              style={{width: skill.dist,backgroundColor: skill.bgco}}
              >

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
