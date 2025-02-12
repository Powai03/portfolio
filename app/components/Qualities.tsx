"use client";
import React from "react";
import dynamic from "next/dynamic";

// Importer TypeAnimation dynamiquement pour éviter les erreurs serveur
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false } // Désactiver le rendu côté serveur
);

const Qualities = () => {
  return (
    <div>
      <h1 className="flex flex-row justify-center text-white mb-4 text-xl sm:text-5xl lg:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
          Je suis&nbsp; {" "}
        </span>
        <TypeAnimation
          sequence={[
            " curieux. 🧐",
            1000,
            " ouvert d\'esprit. 💡",
            1000,
            " sociable. 🤝",
            1000,
            " autonome. 🚀",
            1000,
            " créatif. 🎨",
            1000,
            " passionné. 🔥",
            1000,
            " persévérant. 🏋️",
            1000,
            " rigoureux. 📏",
            1000,
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

export default Qualities;
