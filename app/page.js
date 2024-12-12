import Navbar from '../components/Navbar';
import LoginForm from '../components/auth/LoginForm';
import Caroussel from '../components/auth/Caroussel';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barre de navigation */}
      <Navbar />

      {/* Contenu principal */}
      <div className="flex flex-grow">
        {/* Section gauche */}
        <div className="w-1/2 bg-pink-500 text-white flex items-center justify-center relative">
          <Caroussel />
        </div>

        {/* Section droite */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
