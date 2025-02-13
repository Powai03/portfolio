"use client";
import React from "react";
import dynamic from "next/dynamic";

// Importer TypeAnimation dynamiquement pour éviter les erreurs serveur
const TypeAnimation = dynamic(
    () => import("react-type-animation").then((mod) => mod.TypeAnimation),
    { ssr: false }
);

const Hobbies = () => {
    return (
        <div>
        <h1 className="flex flex-row justify-center text-white mt-96 mb-64 text-xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
                J&apos;aime&nbsp; {" "}
            </span>
            <TypeAnimation
                sequence={[
                    " voyager. 🌍",
                    1000,
                    " cuisiner. 🍳",
                    1000,
                    " le sport. 🏸 🏐",
                    1000,
                    " l\'architecture. 🏛️",
                    1000,
                    " apprendre. 🧠",
                    1000,
                    " la musique. 🎵",
                    1000,
                    " lire. 📚",
                    1000,
                    " les Legos. 🧱",
                    1000,
                    " coder. 💻",
                    1000,
                    " les jeux vidéos. 🎮",
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

export default Hobbies;
