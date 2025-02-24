import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className="container p-12 flex flex-row justify-between items-center flex-wrap text-slate-600">
                <span>
                <Image src="/logoweb.svg" alt="Logo" width={50} height={50} />
                </span>
                <p>Tous droits réservés.</p>
                <p>Site développé par Kilian Delcenserie (Powai) @2025</p>
            </div>
        </footer>
    )
}

export default Footer