"use client";
import React, { useState } from "react";
import Image from "next/image";

type Experience = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const experiences: Record<"scolaire" | "professionnel", Experience[]> = {
  scolaire: [
    {
      id: 1,
      title: "Master en Informatique",
      description: "Université XYZ - Spécialisation en développement web",
      image: "/images/master.png",
    },
    {
      id: 2,
      title: "BTS SIO",
      description: "Option SLAM - Développement d\'applications",
      image: "/images/bts.png",
    },
    {
        id: 3,
        title: "BTS SIO",
        description: "Option SLAM - Développement d\'applications",
        image: "/images/bts.png",
      },
      {
        id: 4,
        title: "BTS SIO",
        description: "Option SLAM - Développement d\'applications",
        image: "/images/bts.png",
      },
      {
        id: 5,
        title: "BTS SIO",
        description: "Option SLAM - Développement d\'applications",
        image: "/images/bts.png",
      },
      {
        id: 6,
        title: "BTS SIO",
        description: "Option SLAM - Développement d\'applications",
        image: "/images/bts.png",
      },
  ],
  professionnel: [
    {
      id: 1,
      title: "Développeur Web",
      description: "Entreprise ABC - Développement full-stack Technologies : React, Node.js, MongoDB",
      image: "/images/dev-web.png",
    },
    {
      id: 2,
      title: "Stage en développement",
      description: "Startup DEF - Création d\'une application mobile",
      image: "/images/stage.png",
    },
  ],
};

const Parcours: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof experiences>("scolaire");
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[activeCategory][0]);

  return (
    <section className="w-full bg-[#121212] text-white py-12 mt-32 mb-32 flex flex-col items-center">
        <h2 className="text-transparent lg:text-6xl text-2xl font-bold lg:mb-8 mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">Mon parcours</h2>
      {/* Boutons de catégorie */}
      <div className="flex w-full max-w-3xl border-b border-gray-700">
        {(["scolaire", "professionnel"] as const).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSelectedExperience(experiences[category][0]); // Reset à la première expérience
            }}
            className={`w-1/2 py-4 text-center text-lg font-semibold relative transition ${
              activeCategory === category ? "text-white" : "text-gray-400"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* Vignettes centrées */}
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {experiences[activeCategory].map((exp) => (
          <div
            key={exp.id}
            onClick={() => setSelectedExperience(exp)}
            className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-800 rounded-lg cursor-pointer transition ${
              selectedExperience.id === exp.id ? "ring-2 ring-blue-500" : "hover:bg-gray-700"
            }`}
          >
            <Image src={exp.image} alt={exp.title} width={50} height={50} className="rounded-md" />
          </div>
        ))}
      </div>

      {/* Détails affichés sous les vignettes */}
      <div className="w-full max-w-3xl text-center bg-gray-900 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-blue-400">{selectedExperience.title}</h3>
        <p className="text-gray-300 mt-2">{selectedExperience.description}</p>
      </div>
    </section>
  );
};

export default Parcours;
