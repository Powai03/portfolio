"use client";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from 'next/image';


export default function News() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="relative flex flex-col flex-wrap items-center justify-between mx-auto px-12 py-12 w-full mt-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <Image src="/images/renault.jpg" className="rounded-3xl overflow-hidden" alt="News" width={500} height={500} />
      </div>
      <div className="container mx-auto px-12 py-6 border-solid border-2 border-[hsl(0,0%,100%)] border-opacity-50 rounded-3xl mt-12">
        <h3 className="lg:text-2xl sm:text-xl text-white mt-12">Kilian &quot;Powai&quot; Delcenserie</h3>
        <h1 className="lg:text-6xl sm: text-2xl font-bold text-white ">Sources: Kilian rejoint Renault Group au Mans</h1>
        <div className="flex justify-between mt-4">
        <span className="px-3 py-1 font-bold bg-gray-700 rounded-md text-sm">LEAK</span>
        <button 
          className="px-3 py-1 font-bold bg-blue-500 rounded-md text-sm text-white hover:bg-blue-700"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Lien copié dans le presse-papier !");
          }}
        >
          Partager
        </button>
        </div>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-12 mt-12">
          Kilian Delcenserie a trouvé un accord avec Renault Group pour rejoindre l&apos;équipe de développement de l&apos;usine du Mans. Il prendra poste en tant qu&apos;ingénieur développeur web en alternance dès la rentrée 2025.
        </p>
        <h2 className="lg:text-4xl sm:text-2xl font-bold text-white mb-12">Un étudiant en développement web</h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Kilian Delcenserie, alias Powai, est un étudiant en développement à l&apos;IIM Digital School en deuxième année. Après des études d&apos;architecture, il s&apos;est tourné vers le développement web pour allier ses ambitions et sa passion pour les technologies.
        </p>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-12">
          Ayant déjà une bonne expérience dans le monde du travail, c&apos;est logiquement qu&apos;il s&apos;est dirigé vers une formation en alternance pour atteindre ses nouveaux objectifs. Des clients comme Lexo ou la Direction des Grandes Entreprises lui ont fait confiance et c&apos;est désormais au tour de Renault Group de lui donner sa chance.
        </p>
        <h2 className="lg:text-4xl sm:text-2xl font-bold text-white mb-12">Un nouveau challenge</h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-12">
          Avec une fin d&apos;année chargée, Kilian &quot;Powai&quot; Delcenserie aura à coeur de relever ce nouveau défi. Une bourse aux projets pour la ville de Chaville, un CDD de 3 mois à la DGE et enfin un déménagement au Mans pour une prise de poste chez Renault Groupe, l&apos;année 2024 s&apos;annonce riche en émotions et en challenge.
          Sa motivation et sa détermination sont ses meilleurs atouts pour réussir dans ce nouveau chapitre de sa vie.
        </p>
        <h2 className="text-gray-500 lg:text-4xl sm:text-2xl flex justify-center">- Kilian &quot;Powai&quot; Delcenserie (Éditeur) -</h2>
        <h4 className="text-gray-500 text-s flex justify-center mt-12">
          Le logo appartient à Renault Group. Tous droits réservés.
        </h4>
      </div>
      <Footer />
    </main>
  );
}