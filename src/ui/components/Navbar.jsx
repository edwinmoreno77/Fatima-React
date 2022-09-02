import { HashLink as Link } from 'react-router-hash-link';
import { useAuthStore } from '../../hooks/useAuthStore';


export const Navbar = () => {

    const { startLogout, user, status } = useAuthStore();

    return (
        <div id='Home'>
            <nav id="navbar-id" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container">
                    <a href="https://www.instagram.com/fatima.afta/?hl=es" className="navbar-brand">
                        <img src="/assets/logo.png" alt="" /></a>
                    <h2 className='text-white-50'>{user.name}</h2>
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
                                <a href="#Contactos" className="nav-link">
                                    <i>Nosotros</i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={`/allcakes#subNavBar`}><i>Productos</i></Link>
                            </li>
                            <li className="nav-item">
                                <a href="#Contactos" className="nav-link">
                                    <i>Contactos</i>
                                </a>
                            </li>

                            {
                                (status === 'authenticated')
                                    ? <li className="nav-item">
                                        <Link className='nav-link btn'
                                            onClick={startLogout}
                                            to={`/login#Login`}><i>&nbsp;Cerrar Sesion</i></Link>
                                    </li> : <li className="nav-item">
                                        <Link className='nav-link btn' to={`/login#Login`}><i>&nbsp;Iniciar Sesion</i></Link>
                                    </li>
                            }



                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    )
}
