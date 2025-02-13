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
    title: "Portfolio",
    shortTitle: "Portfolio",
    description: "Un portfolio interactif développé en React et Tailwind.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/portfolio.png",
    technologies: ["React", "Tailwind", "Next.js"],
    repo: "https://github.com/user/portfolio",
  },
  {
    id: 2,
    title: "E-commerce",
    shortTitle: "E-Shop",
    description: "Un site e-commerce avec gestion de panier et paiement en ligne.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/ecommerce.png",
    technologies: ["Node.js", "MongoDB", "Stripe"],
    repo: null,
  },
  {
    id: 3,
    title: "Dashboard Admin",
    shortTitle: "Admin Panel",
    description: "Un tableau de bord pour la gestion des utilisateurs et des ventes.",
    video: "https://player.vimeo.com/video/ID_DE_LA_VIDEO?autoplay=1&loop=1&muted=1&background=1",
    thumbnail: "/images/dashboard.png",
    technologies: ["Vue.js", "Firebase", "Chart.js"],
    repo: "https://github.com/user/dashboard",
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
                    className="px-4 py-2 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-500 transition"
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
