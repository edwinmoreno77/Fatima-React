import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../ui";
// import { get } from "../helpers";
import { getCakeById } from '../helpers/getCakeById';




export const CakePage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const cake = useMemo(() => getCakeById(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
        //otra forma de hacerlo
        // window.history.back();
    }

    if (!cake) {
        return <Navigate to="/allcakes" />
    }

    const cakeImageUrl = `/assets/${id}.png`;

    return (
        <>
            <Header />
            <div className="row mt-5">
                <div className="col-5">
                    <img
                        src={cakeImageUrl}
                        alt={cake.id}
                        className="img-thumbnail animate__animated animate__fadeInLeft shadow"
                    />
                </div>
                <div className="col-7">
                    <h3>{cake.id}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter_ego: </b>{cake.id}</li>
                        <li className="list-group-item"><b>Publisher: </b>{cake.id}</li>
                        <li className="list-group-item"><b>First appearance: </b>{cake.id}</li>
                    </ul>

                    <h5 className="mt-3">Characters</h5>
                    <p>{cake.id}</p>

                    <button
                        onClick={onNavigateBack}
                        className="btn btn-outline-primary shadow mb-5">
                        Return
                    </button>

                </div>
            </div>
        </>

    )
}
