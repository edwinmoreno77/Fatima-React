import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { SubNavBar } from "../../ui";
import { getCakeById } from '../helpers/getCakeById';




export const CakePage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const cake = useMemo(() => getCakeById(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!cake) {
        return <Navigate to="/allcakes" />
    }

    const cakeImageUrl = `/assets/${id}.png`;

    return (
        <>
            <SubNavBar />
            <div className="row mt-4 justify-content-center">
                <div className="col-10 col-md-6 py-3 my-2 imgCardPage">
                    <img
                        src={cakeImageUrl}
                        alt={cake.id}
                        className="img-thumbnail animate__animated animate__fadeInLeft shadow"
                    />
                </div>
                <div className="col-10 col-md-5 py-3 my-2 ">
                    <h3>{cake.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Precio: </b>{cake.price}</li>
                        <li className="list-group-item"><b>Biscocho: </b>{cake.name}</li>
                        <li className="list-group-item"><b>Relleno: </b>{cake.name}</li>
                    </ul>

                    <h5 className="mt-3">Descripción</h5>
                    <p>{cake.name}</p>

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
