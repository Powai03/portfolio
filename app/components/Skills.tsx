"use client";
import React, { useState } from "react";
import Image from "next/image";

// Hard Skills - Liste avec images
const hardSkills = [
  { id: 1, name: "JavaScript", image: "/images/js.png" },
  { id: 2, name: "React", image: "/images/react.png" },
  { id: 3, name: "Node.js", image: "/images/node.png" },
  { id: 4, name: "TailwindCSS", image: "/images/tailwind.png" },
  { id: 5, name: "TailwindCSS", image: "/images/tailwind.png" },
  { id: 6, name: "TailwindCSS", image: "/images/tailwind.png" },
  { id: 7, name: "TailwindCSS", image: "/images/tailwind.png" },
  { id: 8, name: "TailwindCSS", image: "/images/tailwind.png" },
];
    
// Soft Skills - Liste avec icônes et description
const softSkills = [
  { id: 1, name: "Travail d\'équipe 🤝 ", name2: "Résolution de problèmes 🧩"},
  { id: 2, name: "Résolution de problèmes", name2: "Travail d\'équipe 🤝 " },
  { id: 3, name: "Communication efficace 🎤" , name2: "Créativité 💡"},
  { id: 4, name: "Créativité 💡", name2: "Communication efficace 🎤" },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"hardskills" | "softskills">("hardskills");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="w-full lg:h-96 bg-[#121212] text-white py-12 flex flex-col items-center mb-32">
        <h2 className="text-transparent lg:text-6xl text-2xl font-bold lg:mb-8 mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">Mes compétences</h2>
        {
      /* Boutons de catégorie */}
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

      {/* Contenu */}
<div className="mt-6">
  {activeCategory === "hardskills" ? (
    // HARD SKILLS : Icônes bien espacées avec Grid pour un meilleur alignement
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-center">
      {hardSkills.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center"
          onMouseEnter={() => setHoveredSkill(skill.id)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-800 rounded-lg transition hover:bg-gray-700">
            <Image src={skill.image} alt={skill.name} width={50} height={50} className="rounded-md" />
          </div>
          {/* Affichage du texte au hover */}
          <span
            className={`text-sm text-gray-300 transition-opacity duration-300 ${
              hoveredSkill === skill.id ? "opacity-100" : "opacity-0"
            }`}
          >
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  ) : (
    // SOFT SKILLS : Texte bien structuré en colonne unique sur mobile, deux colonnes sur desktop
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
      {softSkills.map((skill) => (
        <li key={skill.id} className="text-lg text-gray-300 font-medium flex justify-between gap-4">
          <span className="w-full sm:w-auto flex justify-center items-center">{skill.name}</span>
          {skill.name2 && <span className="w-full sm:w-auto flex justify-center items-center">{skill.name2}</span>}
        </li>
      ))}
    </ul>
  )}
</div>


    </section>
  );
};

export default Skills;
