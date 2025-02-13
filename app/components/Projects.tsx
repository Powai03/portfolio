"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  video: string; // 🔥 Lien Vimeo embed
  thumbnail: string;
  technologies: string[];
  repo: string | null;
};

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Plateforme de collection et d\'échange de cartes Harry Potter",
    shortTitle: "TCG Harry Potter",
    description: "Un site pour collectionner et échanger des cartes Harry Potter. Création de compte, tirage et collection de cartes, profil utilisateur personalisable et échange avec d\'autres utilisateurs. Projet de fin de première année de Bachelor.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/hp.png",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "MySQL"],
    repo: "https://github.com/Powai03/hp",
  },
  {
    id: 2,
    title: "Plateforme E-commerce avec Symfony",
    shortTitle: "E-commerce",
    description: "Un site e-commerce avec gestion des utilisateurs, des paniers, des produit, des stocks, des commandes. Dans le cadre d\'un cours sur le framework Symfony.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/ecommerce.png",
    technologies: ["Symfony", "MySQL"],
    repo: "https://github.com/Powai03/ecommerce",
  },
  {
    id: 3,
    title: "Portfolio personnel",
    shortTitle: "Portfolio",
    description: "Mon portfolio personnel, pour présenter mes projets, mes compétences et mon parcours. Un portfolio qui me représente et dont je suis fier. Réalisé avec Next.js et TailwindCSS.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/portfolio.png",
    technologies: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel", "Resend"],
    repo: "hhttps://github.com/Powai03/portfolio",
  },
  {
    id: 4,
    title: "Objet connecté - Simulateur de combat Pokémon",
    shortTitle: "IoT Pokémon",
    description: "Un objet connecté pour simuler des combats Pokémon. Choix des attaques, des Pokémon, des objets, des capacités, des statistiques. Choix des Pokémons via un lecteur RFID et connecté à une raspberry Pi Pico 3 W.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/iotpokemon.png",
    technologies: ["Python", "IoT", "Raspberry Pi", "RFID"],
    repo: "",
  },
  {
    id: 5,
    title: "Objet connecté - LED connecté à la plateforme de cartes Harry Potter",
    shortTitle: "IoT Harry Potter",
    description: "Grâce à une LED, une API et une raspberry Pi, la LED s\'allume de la couleur de la maison de la carte sur laquelle il a cliqué en dernier dans la plateforme de collection et d\'échange de cartes Harry Potter.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/iotHP.png",
    technologies: ["Python", "IoT", "Raspberry Pi", "API", "NodeJS", "ExpressJS"],
    repo: "https://github.com/Powai03/cours_iot",
  },
  {
    id: 6,
    title: "To-Do List",
    shortTitle: "To-Do List",
    description: "Une application de gestion de tâches. Ajout, suppression, modification, marquage de tâches comme terminées. Réalisé avec TypeScript dans le cadre du cours de découverte de ce langage.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/todolist.png",
    technologies: ["TypeScript"],
    repo: "https://github.com/Powai03/todolist",
  },
  {
    id: 7,
    title: "Réplique de Twitter en PHP",
    shortTitle: "Pwitter",
    description: "Réplique minimaliste de Twitter. Création de compte, publication de tweets. Réalisé en PHP et MySQL dans le cadre du cours de découverte de ce langage.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/pwitter.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    repo: "https://github.com/Powai03/cours_php",
  },
  {
    id: 8,
    title: "Simulateur de combat Pokémon",
    shortTitle: "Combat Pokémon",
    description: "Un simulateur de combat Pokémon. Choix des attaques, des Pokémon. Réalisé en PHP et Programmation Orientée Objet.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/pokemonpoo.png",
    technologies: ["PHP", "POO"],
    repo: "https://github.com/Powai03/pokemonPHP",
  },
  {
    id: 9,
    title: "Reproduction d\'une maquette Figma avec Sass",
    shortTitle: "Sass",
    description: "Reproduction à l\'identique d\'une maquette Figma d\'un site d\'adoption d\'animal en HTML et CSS, avec l\'utilisation de Sass pour la gestion des styles. Projet de découverte de Sass.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/sass.png",
    technologies: ["HTML", "CSS", "Sass"],
    repo: "https://github.com/Powai03/b2-sass",
  },
    {
        id: 10,
        title: "Application interne de déclaration de problèmes et de demandes",
        shortTitle: "App interne",
        description: "Une application interne pour déclarer des problèmes et des demandes. Création de compte, déclaration de problèmes, de demandes, de commentaires, de statuts. Réalisé en PHP et MySQL pour une entreprise, je ne peux vous donner accès au code pour des raisons de confidentialité. ",
        video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
        thumbnail: "/images/dge.png",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        repo: "",
    },
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, project: Project) => {
    if (!isDesktop) return;
    e.dataTransfer.setData("text/plain", project.id.toString());
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    e.preventDefault();
    const projectId = parseInt(e.dataTransfer.getData("text/plain"));

    const droppedProject = projects.find((proj) => proj.id === projectId);
    if (droppedProject) {
      if (selectedProject) {
        setProjects((prev) => [...prev, selectedProject]);
      }
      setSelectedProject(droppedProject);
      setProjects((prev) => prev.filter((proj) => proj.id !== projectId));
    }
  };

  const handleProjectClick = (project: Project) => {
    if (isDesktop) return;
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="w-full bg-[#121212] text-white py-12 flex flex-col items-center">
                <h2 className="text-transparent lg:text-6xl text-2xl font-bold lg:mb-8 mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">Mes projets</h2>

      {/* Zone de projet qui s'adapte en hauteur selon le contenu */}
      <div
        className={`w-full max-w-4xl border-2 border-dashed border-gray-500 flex flex-col items-center justify-center text-gray-400 text-lg rounded-lg p-4
          ${isDesktop ? "min-h-64" : "min-h-96"}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedProject ? (
          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              {/* 🔥 Intégration Vimeo */}
              <div className="w-full h-40 rounded-lg mt-2 overflow-hidden">
                <iframe
                  src={selectedProject.video}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-gray-300">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Affichage du repo */}
              <div className="mt-4">
                {selectedProject.repo ? (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-600 rounded-lg text-white font-bold hover:from-green-600 hover:to-blue-500 transition"
                  >
                    Voir le repo
                  </a>
                ) : (
                  <p className="text-gray-500">Repo non disponible au public</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>{isDesktop ? "Glissez un projet ici" : "Sélectionnez un projet"}</p>
        )}
      </div>

      {/* Galerie de vignettes */}
      <div className="w-full max-w-4xl mt-6 overflow-x-auto custom-scroll">
        <div className="flex gap-4 whitespace-nowrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-32 h-32 bg-gray-800 flex flex-col items-center justify-between rounded-lg cursor-pointer shadow-md transition hover:bg-gray-700 p-2"
              draggable={isDesktop}
              onDragStart={(e) => handleDragStart(e, project)}
              onClick={() => handleProjectClick(project)}
            >
              {/* Conteneur image qui capture aussi le drag */}
              <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-md pointer-events-none">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  draggable={false} 
                />
              </div>
              <p className="text-xs text-gray-300 text-center">{project.shortTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
