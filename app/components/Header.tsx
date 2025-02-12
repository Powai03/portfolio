"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const birthDate = new Date(2001, 0, 3); 
const age = calculateAge(birthDate);


const Header = () => {
    return (
        <section className="py-16 lg:py-32" id="header">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-6xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
                            Bonjour, je suis{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Kilian Delcenserie.",
                                1000,
                                "Powai.",
                                1000,
                                "étudiant en développement web.",
                                1000,
                                "à la recherche d\'une alternance.",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block lg:min-h-[120px] md:min-h-[100px] "
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        {" "}
                        👋 Salut, moi c&apos;est Kilian, ou Powai sur internet !
                        J&apos;ai {age} ans et je suis passionné par le développement web et l&apos;architecture, j&apos;aime explorer, apprendre et créer. Curieux et créatif, je prends plaisir à relever de nouveaux défis et à donner vie à des idées innovantes. <br />

💡 Ce qui me motive ? Concevoir des solutions qui ont un impact, allier esthétique et performance, et toujours chercher à m&apos;améliorer. <br />
🚀 Ce que j&apos;aime ? Apprendre de nouvelles technologies, expérimenter, explorer et partager mes connaissances. <br />
🎯 Mon objectif ? Évoluer dans un environnement stimulant, collaborer avec des esprits inspirants et contribuer à des projets ambitieux. <br />

Bienvenue dans mon univers ! 🌟
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/kilian-delcenserie-076a2028b/" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500  to-green-600 hover:bg-slate-300 text-white">
                            Mon LinkedIn
                        </button>
                        </a>
                        <a href="/CV.pdf" download>
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-600 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    Mon CV
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full overflow-hidden relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] ">
                        <Image
                            src="/images/pp.jpeg"
                            alt="Photo du développeur"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
