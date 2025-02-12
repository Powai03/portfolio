"use client";
import React from "react";
import dynamic from "next/dynamic";

// Importer TypeAnimation dynamiquement pour éviter les erreurs serveur
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false } // Désactiver le rendu côté serveur
);

const Wishes = () => {
  return (
    <div>
      <h1 className="flex flex-row justify-center text-white mt-16 mb-4 text-xl sm:text-5xl lg:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
          Je veux&nbsp; {" "}
        </span>
        <TypeAnimation
          sequence={[
            " explorer. ✈️🌍",
            1000,
            " me challenger. 🏆",
            1000,
            " partager. 📚",
            1000,
            " m'investir. 🚀",
            1000,
            " rencontrer. 🤝",
            1000,
            " apprendre. 🧠",
            1000,
            " m'épanouir. 🌱",
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block lg:min-h-[120px] md:min-h-[100px] "
        />
      </h1>
    </div>
  );
};

export default Wishes;
