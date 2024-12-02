// app/page.js
// app/page.js
import Navbar from './components/Navbar'; // Utilisez 'Navbar' ici

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bienvenue sur mon site de réservation</h1>
        <p>Découvrez nos offres de réservation pour hôtels, vols, et plus encore !</p>
      </main>
    </div>
  );
}

