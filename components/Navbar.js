"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-white shadow-md">
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16
        ">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img className="h-20 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Menu Principal */}
          <div className="ml-auto flex items-center space-x-8">
            <Link
              href="/hebergement"
              className="text-bleu-personnalise hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hébergements
            </Link>
            <Link
              href="/vols"
              className="text-bleu-personnalise hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Vols
            </Link>
            <Link
              href=""
              className="text-bleu-personnalise hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Langues
            </Link>
          </div>

          {/* Section Droite */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
           
            <div className="relative">
            <button
      onClick={() => setIsOpen(!isOpen)} // Toggle l'état du menu
      className="flex items-center justify-center text-white border border-[#F15BB5] bg-white hover:bg-[#F15BB5] focus:outline-none px-4 py-2 rounded-full"
    >
      {/* Icône de profil */}
      <svg
        className="h-6 w-6 text-[#F15BB5] mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
      </svg>
      {/* Icône du menu burger (3 lignes verticales) */}
      <svg
        className="h-6 w-6 text-[#F15BB5] ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 6h16M4 12h16M4 18h16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Se connecter
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    S'inscrire
                  </Link>
                  <Link
              href="/add-establishment"
              className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
            >
              Ajouter un établissement
            </Link>
                </div>
              )}
            </div>
           
          </div>

          {/* Bouton Mobile */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <Link
                href="/hebergement"
                className=" block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              >
                Hébergements
              </Link>
            </li>
            <li>
              <Link
                href="/vols"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              >
                Vols
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
