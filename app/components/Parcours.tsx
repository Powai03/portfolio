"use client";
import React, { useState } from "react";
import Image from "next/image";

type Experience = {
    id: number;
    title: string;
    description: string;
    image: string;
    etablissement?: string;
    diplome?: string;
};

const experiences: Record<"scolaire" | "professionnel", Experience[]> = {
    scolaire: [
        {
            id: 1,
            title: "Bachelor Coding & Digital Innovation",
            description: "Apprentissage des langages de programmation, des technologies web et de la gestion de projet. 2023-2026",
            image: "/images/iim.png",
            etablissement: "IIM Digital School - Nanterre",
            diplome: "Bachelor Chef de projet Digital Coding & Digital Innovation",
        },
        {
            id: 2,
            title: "Licence Architecture",
            description: "Apprentissage des techniques de dessin, de modélisation 3D et de conception architecturale. 2018-2023",
            image: "/images/loci.jpeg",
            etablissement: "LOCI Faculté d'architecture, d'ingénierie architecturale et d'urbanisme - Tournai (Belgique)",
            diplome: "164/180 crédits ECTS",
        },
        {
            id: 3,
            title: "Baccalauréat Scientifique",
            description: "Filière Scientifique - Option Informatique et Sciences du Numérique - 2015-2018",
            image: "/images/logomg.png",
            etablissement: "Lycée Maurice Genevoix - Montrouge",
            diplome: "Baccalauréat Scientifique Mention Assez Bien à 13,86",
        },
        {
            id: 4,
            title: "Brevet des collèges",
            description: "2011-2013 - 2013-2015",
            image: "/images/logomg.png",
            etablissement: "Collège Jeanne d\'Arc & Collège Maurice Genevoix - Montrouge",
            diplome: "Brevet Mention Très Bien",
        },
    ],
    professionnel: [
        {
            id: 1,
            title: "Développeur Web - CDD 3 mois",
            description: "Création et amélioration d\’application internes - Conception et documentation - UX/UI - Intégration et prototypage ",
            image: "/images/dge.jpg",
            etablissement: "Direction des Grandes Entreprises - Romainville",
            diplome: "Avril - Juin 2025",
        },
        {
            id: 2,
            title: "Développeur Web - Bourse aux Projets",
            description: "Création d\'un site vitrine et annuaire pour les commerçants de la ville de Chaville",
            image: "/images/92.png",
            etablissement: "Curious Lab\' 92 - Chaville",
            diplome: "Janvier - Mars 2025",
        },
        {
            id: 3,
            title: "Chef de Projet - Bourse aux Projets",
            description: "Gestion de projet - Suivi des équipes - Relation client - Établissemnt d\'une stratégie de communication, de marketing et affirmation de l\'identité digitale de Lexo.fr",
            image: "/images/lexo.webp",
            etablissement: "LEXO - lexo.fr",
            diplome: "Septembre - Décembre 2024",
        },
        {
            id: 4,
            title: "Équipier de commerce - CDI étudiant",
            description: "Gestion de la réserve et de l\’équipe étudiante le dimanche - Tri et rangement des arrivages - Échanges avec la clientèle",
            image: "/images/auchan.png",
            etablissement: "Auchan - Bagneux",
            diplome: "Novembre 2023 - Juillet 2024",
        },
        {
            id: 5,
            title: "Vacataire - CDD étudiant",
            description: "Classement et optimisation - Gestion des particuliers - Logiciels de comptabilité",
            image: "/images/dge.jpg",
            etablissement: "DGFiP - Pantin - Paris 14 - Saint-Cloud",
            diplome: "Juillet 2018-2020 à 2023 - Juin à Août 2024",
        },
        {
            id: 6,
            title: "Équipier de cuisine - CDI étudiant",
            description: "Organisation de la cuisine avant et pendant le service pour assurer le bon déroulement - Gestion de la pression liée aux attentes des clients",
            image: "/images/bk.webp",
            etablissement: "Burger King - Tournai (Belgique)",
            diplome: "Septembre 2022 - Avril 2023",
        },
    {
        id: 7,
        title: "Stage sur chanter - 3 semaines",
        description: "Découverte du chantier - Participation aux travaux - Échanges avec les ouvriers",
        image: "/images/lasnier.jpeg",
        etablissement: "Lasnier BTP - Blois",
        diplome: "Juin 2022",
    },
    {
        id: 8,
        title: "Stage en agence d'architecture - 1 semaine",
        description: "Découverte de la vie en agence - Participation aux réunions - Échanges avec les architectes - Découverte des logiciels de dessin",
        image: "/images/bouresquisse.jpeg",
        etablissement: "Agence Bour-Esquisse - Saint-Gervais-la-Forêt",
        diplome: "Février 2015",
    }
    ],
};

const Parcours: React.FC = () => {
    const [activeCategory, setActiveCategory] =
        useState<keyof typeof experiences>("scolaire");
    const [selectedExperience, setSelectedExperience] = useState<Experience>(
        experiences[activeCategory][0]
    );

    return (
        <section id="parcours" className="w-full bg-[#121212] text-white py-12 mt-32 mb-32 flex flex-col items-center">
            <h2 className="text-transparent lg:text-6xl text-2xl font-bold lg:mb-8 mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
                Mon parcours
            </h2>
            <div className="flex w-full max-w-3xl border-b border-gray-700">
                {(["scolaire", "professionnel"] as const).map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setSelectedExperience(experiences[category][0]); // Reset à la première expérience
                        }}
                        className={`w-1/2 py-4 text-center text-lg font-semibold relative transition ${
                            activeCategory === category
                                ? "text-white"
                                : "text-gray-400"
                        }`}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        {activeCategory === category && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-600"></span>
                        )}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 my-6">
                {experiences[activeCategory].map((exp) => (
                    <div
                        key={exp.id}
                        onClick={() => setSelectedExperience(exp)}
                        className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-800 rounded-lg cursor-pointer transition ${
                            selectedExperience.id === exp.id
                                ? "ring-2 ring-blue-500"
                                : "hover:bg-gray-700"
                        }`}>
                        <Image
                            src={exp.image}
                            alt={exp.title}
                            width={50}
                            height={50}
                            className="rounded-md"
                        />
                    </div>
                ))}
            </div>
            <div className="w-full max-w-3xl text-center bg-gray-900 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-blue-400">
                    {selectedExperience.title}
                </h3>
                <p className="text-gray-300 mt-2">
                    {selectedExperience.etablissement}
                </p>
                <p className="text-gray-300 mt-2">
                    {selectedExperience.description}
                </p>
                <p className="text-gray-300 mt-2">
                    {selectedExperience.diplome}
                </p>
            </div>
        </section>
    );
};

export default Parcours;
