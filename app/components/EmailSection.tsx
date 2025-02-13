"use client";
import React from 'react'
import GithubIcon from '../../public/github.svg'
import LinkedinIcon from '../../public/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const sujet = (form.elements.namedItem("sujet") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
        const data = { email, sujet, message };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONdata
        };
        const response = await fetch(endpoint, options);
        if (response.status === 200) {
            alert("Message envoyé avec succès !");
        } else {
            alert("Une erreur s'est produite, veuillez réessayer.");
        }
    };
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
            <div>
                <h2 className="text-transparent lg:text-6xl text-2xl font-bold lg:mb-8 mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">Me contacter</h2>
                <h5 className="text-xl font-bold text-white my-2">Je suis à votre écoute.</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                Toujours curieux et ouvert aux nouvelles opportunités, je serais ravi d’échanger avec vous.  <br />
                N’hésitez pas à me contacter pour toute discussion, conseil ou collaboration. Je vous répondrai avec plaisir !
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/Powai03" target="_blank">
                        <Image src={GithubIcon} alt="Github" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kilian-delcenserie-076a2028b/" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-white block mt-2 text-sm font-medium">Votre adresse mail :</label>
                    <input name ="email" type="email" id="email" className="bg-[#18191E] mb-1 border border-[#33353F] placeholder-[#9CA2A9] text-gray-300 text-sm rounded-lg block w-full p-2.5"required placeholder="votremail@mail.com"/>
                    <label htmlFor="sujet" className="text-white block text-sm font-medium">Sujet de votre message :</label>
                    <input name="sujet" type="text" id="sujet" className="bg-[#18191E] mb-1 border border-[#33353F] placeholder-[#9CA2A9] text-gray-300 text-sm rounded-lg block w-full p-2.5"required placeholder="Titre"/>
                    <label htmlFor="message" className="text-white block text-sm font-medium">Votre message :</label>
                    <textarea name="message" id="message" className="bg-[#18191E] mb-1 border border-[#33353F] placeholder-[#9CA2A9] text-gray-300 text-sm rounded-lg block w-full p-2.5"required placeholder="Écrivez ici"/>
                    <button type="submit" className="bg-gradient-to-br from-blue-500 to-green-600 hover:from-green-600 hover:to-blue-500  text-white rounded-lg p-2.5 font-bold">Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection