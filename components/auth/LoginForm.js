'use client';

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-5">Se connecter</h2>
      <p className="text-sm text-gray-500 mb-8">Créer votre compte</p>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Mot de passe"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Se connecter
        </button>
      </form>
      <div className="mt-5 w-full max-w-md">
        {/* Bouton Google */}
        <button className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 mb-3">
          <img src="/google.png" alt="Google" className="h-5 w-5 mr-2" />
          S'inscrire avec Google
        </button>
        {/* Bouton Facebook */}
        <button className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200">
          <img src="/facebook.png" alt="Facebook" className="h-5 w-5 mr-2" />
          S'inscrire avec Facebook
        </button>
      </div>
    </div>
  );
}

