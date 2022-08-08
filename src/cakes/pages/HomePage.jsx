import { Link } from "react-router-dom"




export const HomePage = () => {

    return (
        <>
            <main id="Productos" className="bg-dark text-white py-5 img-bg-productos">
                <div className="container">
                    <div className="text-center py-5">
                        <i className="bi bi-twitter mx-1 icon twitter-icon"><a href="https://www.instagram.com/fatima.afta/?hl=es"
                            className="text-decoration-none text-white">Fatima.afta</a></i>
                        <i className="bi bi-instagram mx-1 icon instagram-icon"><a
                            href="https://www.instagram.com/fatima.afta/?hl=es"
                            className="text-decoration-none text-white">Fatima.afta</a></i>
                        <i className="bi bi-facebook mx-1 icon facebook-icon"><a href="https://www.instagram.com/fatima.afta/?hl=es"
                            className="text-decoration-none text-white">Fatima.afta</a></i>
                    </div>
                    <h2 className="text-center display-4 mb-5"><i>Productos Favoritos</i></h2>

                    <div className="row align-items-center my-5 fs-5">
                        <div className="col-12 col-lg-4 my-5 ">
                            <h5><i>Cake de Chocolate</i></h5>
                            <hr />
                            <p><i> Deliciosa cake de Chocolate decorada con fresas y brownie. Puedes agendar con 48hrs de
                                anticipacion.</i></p>
                            <Link to={`/cake/cake-1`} className="btn btn-outline-light mb-5 mb-lg-0"><i
                                className="bi bi-calendar-event"></i><i>Agendar</i></Link>

                        </div>
                        <div className="col-12 col-lg-8 img-servicios d-flex justify-content-center my-5">
                            <img src="assets/cake-1.png" alt="" className="img-fluid" />
                        </div>

                    </div>
                    <br />
                    <div className="row align-items-center my-5 fs-5">
                        <div className="col-12 col-lg-5 my-5">
                            <h5><i>Cake de Chocolate</i></h5>
                            <hr />
                            <p><i> Deliciosa cake de Chocolate decorada con fresas y brownie. Puedes agendar con 48hrs de
                                anticipacion.</i></p>
                            <Link to={`/cake/cake-10`} className="btn btn-outline-light mb-5 mb-lg-0"><i
                                className="bi bi-calendar-event"></i><i>Agendar</i></Link>
                        </div>
                        <div className="col-12 col-lg-7 img-servicios d-flex justify-content-center my-5">
                            <img src="assets/cake-10.png" alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row align-items-center my-5 fs-5">
                        <div className="col-12 col-lg-4 my-5">
                            <h5><i>Cake de Chocolate</i></h5>
                            <hr />
                            <p><i> Deliciosa cake de Chocolate decorada con fresas y brownie. Puedes agendar con 48hrs de
                                anticipacion.</i></p>
                            <Link to={`/cake/cake-6`} className="btn btn-outline-light mb-5 mb-lg-0"><i
                                className="bi bi-calendar-event"></i><i>Agendar</i></Link>
                        </div>
                        <div className="col-12 col-lg-8 img-servicios d-flex justify-content-center my-5">
                            <img src="assets/cake-6.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )

}