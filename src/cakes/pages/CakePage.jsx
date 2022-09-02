import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCake } from "../../hooks/useCake";
import { SubNavBar } from "../../ui";
import { getCakeById } from '../helpers/getCakeById';



export const CakePage = () => {

    const { uid } = useParams();

    const { cakes } = useCake();

    const cake = useMemo(() => getCakeById(uid, cakes), [uid, cakes]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!cake) {
        return <Navigate to="/allcakes" />
    }

    return (
        <>
            {/* <SubNavBar /> */}
            <div id="cakePage" className="text-center pt-5 mt-5">
                <h2>{cake.name}</h2>
            </div>
            <div className="row container-fluid mt-4 justify-content-center">
                <div className="col-11 col-md-6 ps-4 my-2  imgCardPage">
                    <img
                        src={cake.img}
                        alt={cake.uid}
                        className="img-thumbnail animate__animated animate__fadeInLeft shadow"
                    />
                </div>
                <div className="col-11 col-md-5 py-2 my-2 mt-5 ">
                    <h3>{cake.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Precio: </b>{cake.price}</li>
                        <li className="list-group-item"><b>Biscocho: </b>{cake.name}</li>
                        <li className="list-group-item"><b>Relleno: </b>{cake.name}</li>
                    </ul>

                    <h5 className="mt-3">Descripción</h5>
                    <p>{cake.description}</p>

                    <button
                        onClick={onNavigateBack}
                        className="btn btn-warning shadow mb-5">
                        Regresar
                    </button>

                </div>
            </div>
        </>

    )
}
