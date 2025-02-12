"use client";
import React, { useState } from "react";
import Image from "next/image";

// Hard Skills - Liste avec images
const hardSkills = [
  { id: 1, name: "JavaScript", image: "/images/js.png" },
  { id: 2, name: "React", image: "/images/react.png" },
  { id: 3, name: "Node.js", image: "/images/node.png" },
  { id: 4, name: "TailwindCSS", image: "/images/tailwind.png" },
];

// Soft Skills - Liste avec icônes et description
const softSkills = [
  { id: 1, name: "Travail d'équipe 🤝 ", name2: "Résolution de problèmes 🧩"},
  { id: 2, name: "Résolution de problèmes", name2: "Travail d'équipe 🤝 " },
  { id: 3, name: "Communication efficace 🎤" },
  { id: 4, name: "Créativité 💡" },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"hardskills" | "softskills">("hardskills");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="w-full lg:h-96 bg-[#121212] text-white py-12 flex flex-col items-center">
      {/* Boutons de catégorie */}
      <div className="flex w-full max-w-3xl border-b border-gray-700">
        {(["hardskills", "softskills"] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-1/2 py-4 text-center text-lg font-semibold relative transition ${
              activeCategory === category ? "text-white" : "text-gray-400"
            }`}
          >
            {category === "hardskills" ? "Hard Skills" : "Soft Skills"}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* Affichage du contenu */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {activeCategory === "hardskills" ? (
          // Affichage des Hardskills (vignettes avec images)
          hardSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-800 rounded-lg shadow-md transition hover:bg-gray-700">
                <Image src={skill.image} alt={skill.name} width={50} height={50} className="rounded-md" />
              </div>
              {/* Affichage du texte au hover */}
              <span
                className={`mt-2 text-sm text-gray-300 transition-opacity duration-300 ${
                  hoveredSkill === skill.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))
        ) : (
          // Affichage des Softskills (liste stylée)
          <ul className="space-y-4 text-center">
            {softSkills.map((skill) => (
              <li key={skill.id} className="text-lg text-gray-300 font-medium flex items-center justify-between gap-2">
                <div className="mr-24 ml-24">{skill.name}</div><div className="mr-24 ml-24">{skill.name2}</div> 
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Skills;
