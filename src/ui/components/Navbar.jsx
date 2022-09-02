import { HashLink as Link } from 'react-router-hash-link';


export const Navbar = () => {


    return (
        <div id='Home'>
            <nav id="navbar-id" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container">
                    <a href="https://www.instagram.com/fatima.afta/?hl=es" className="navbar-brand">
                        <img src="/assets/logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to={`/homePage#Home`}><i>Inicio</i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={`/allcakes#subNavBar`}><i>Productos</i></Link>
                            </li>
                            <li className="nav-item">
                                <a href="#Contactos" className="nav-link">
                                    <i>Contactos</i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link btn' to={`/login#Login`}><i>Iniciar Sesion</i></Link>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    )
}
