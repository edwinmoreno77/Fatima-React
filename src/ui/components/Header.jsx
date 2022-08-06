import './header.css';


export const Header = () => {

    return (<header className="bg-headerE">
        <div className="bg-navbarE">
            <div className="containerE">
                <div className="navbarE">
                    <a href="" className="navbar-brandE">
                        <img src="assets/logo-letra.png" alt="" className="card-imgE" />
                    </a>
                    <nav className="navbar-navE">
                        <a href="#" className="nav-linkE"><i>Basicas</i></a>
                        <a href="#" className="nav-linkE"><i>Personalizadas</i></a>
                        <a href="#" className="nav-linkE"><i>Vanilla</i></a>
                        <a href="#" className="nav-linkE"><i>Marmoleada</i></a>
                    </nav>
                </div>
            </div>
        </div>
    </header>)
}