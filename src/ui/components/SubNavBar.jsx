import { Link } from 'react-router-dom';
import './SubNavBar.css';



export const SubNavBar = () => {

    return (
        <header className="bg-headerE">
            <div className="bg-navbarE">
                <div className="containerE">
                    <div className="navbarE">
                        <nav className="navbar-navE">
                            <Link className='nav-linkE' to={`/search`}><i>Buscar</i></Link>
                            <Link className='nav-linkE' to={`/ganache`}><i>Ganache</i></Link>
                            <Link className='nav-linkE' to={`/buttercream`}><i>Buttercream</i></Link>
                            <Link className='nav-linkE' to={`/allcakes`}><i>Productos</i></Link>
                        </nav>
                        <a href="" className="navbar-brandE">
                            <img src="../assets/logo-letra.png" alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}