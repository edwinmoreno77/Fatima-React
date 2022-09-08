import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCake } from "../../hooks/useCake";
import { ResourceManager } from "../components/ResourceManager";
import { CakePageForm } from "../components/CakePageForm";
import { getCakeById } from '../helpers/getCakeById';



export const CakePage = () => {

    const { uid } = useParams();

    const { cakes } = useCake();

    const cake = useMemo(() => getCakeById(uid, cakes), [uid, cakes]);

    const { _id } = cake?.category || {};

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    //valida la ruta, si no existe la ruta, redirecciona a la pagina de inicio
    //el problema de esta validación es que si se actualiza la pagina, se pierde la ruta y lo enviara a la pagina de inicio.
    // if (!cake) {
    //     return <Navigate to="/allcakes" />
    // }

    return (
        <>
            <div className="bg-productos-pages">
                <div className="bg-position-pages">
                    <div id="cakePage" className="text-center pt-5 mt-5 nameCakePage">
                        <p>{cake?.name}</p>
                    </div>
                    <div className="row container-fluid mt-4 justify-content-center">
                        <div className="col-11">
                            <div className="ps-3">
                                <button
                                    onClick={onNavigateBack}
                                    className="btn btn-warning shadow">
                                    <i className="fa-solid fa-arrow-left"></i> Regresar
                                </button>
                            </div>
                        </div>
                        <div className="col-11 col-md-6 ps-4 my-2  imgCardPage">
                            <img
                                src={cake?.img}
                                alt={cake?.uid}
                                className="img-thumbnail animate__animated animate__fadeInLeft shadow"
                            />
                        </div>
                        <div className="col-11 col-md-5 ">
                            <h3 className="titulo-cakePage">PRECIO DE REFERENCIA: {cake?.price}</h3>
                            <h5 className="titulo-cakePage mt-3">Descripción:</h5>
                            <p className="p-1">{cake?.description}</p>
                            <CakePageForm uid={uid} />
                        </div>
                        <ResourceManager uid={uid} category={_id} />
                    </div>
                </div>
            </div>
        </>
    )
}
