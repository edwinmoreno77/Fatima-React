import './header.css';


export const Header = () => {

    return (<header className="bg-headerE">
        <div className="bg-navbarE">
            <div className="containerE">
                <div className="navbarE">
                    <a href="" className="navbar-brandE">
                        <img src="../assets/logo-letra.png" alt="" className="card-imgE" />
                    </a>
                    <nav className="navbar-navE">
                        <a href="/masVendido" className="nav-linkE"><i>Especiales</i></a>
                        <a href="/allcakes" className="nav-linkE"><i>Ganache</i></a>
                        <a href="/allcakes" className="nav-linkE"><i>Buttercream</i></a>
                        <a href="/allcakes" className="nav-linkE"><i>Nudes</i></a>
                    </nav>
                </div>
            </div>
        </div>
    </header>)
}