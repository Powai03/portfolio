'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg mt-4">Oups ! La page que vous recherchez n'existe pas.</p>
      <Link href="/" className="bg-gradient-to-br from-blue-500 to-green-600 hover:from-green-600 hover:to-blue-500  text-white rounded-lg p-2.5 font-bold">
        Retour à l'accueil
      </Link>
    </div>
  );
}
