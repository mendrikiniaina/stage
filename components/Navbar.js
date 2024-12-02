import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div className="container-fluid">
                {/* Logo à gauche */}
                <Link href="/" className="navbar-brand">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width="120"
                        height="40"
                        style={{ objectFit: 'contain' }}
                    />
                </Link>

                {/* Bouton pour mobiles */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenu de la Navbar */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Lien Hébergement */}
                        <li className="nav-item">
                            <Link href="/hebergement" className="nav-link">
                                Hébergements
                            </Link>
                        </li>

                        {/* Lien Vols */}
                        <li className="nav-item">
                            <Link href="/vols" className="nav-link">
                                Vols
                            </Link>
                        </li>

                        {/* Icône (par exemple, panier ou profil utilisateur) */}
                        <li className="nav-item">
                            <Link href="/profile" className="nav-link">
                                <i className="bi bi-person-circle fs-4"></i>
                            </Link>
                        </li>

                        {/* Sélecteur pour connexion/inscription */}
                        <li className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Compte
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <Link href="/login" className="dropdown-item">
                                        Se connecter
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup" className="dropdown-item">
                                        S'inscrire
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Ajouter un établissement */}
                        <li className="nav-item">
                            <Link href="/add-establishment" className="btn btn-outline-primary">
                                Ajouter un établissement
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
