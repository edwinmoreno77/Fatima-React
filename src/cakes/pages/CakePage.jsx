import { useMemo, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { useCake } from "../../hooks/useCake";
import { updateImgProduct } from "../../store/cakes/thunks";
import { getCakeById } from '../helpers/getCakeById';



export const CakePage = () => {

    const { uid } = useParams();

    const { cakes } = useCake();

    const { user } = useAuthStore();

    const cake = useMemo(() => getCakeById(uid, cakes), [uid, cakes]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    const fileInputRef = useRef();

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        updateImgProduct(target.files, uid);
    }

    const onSubmitFromCake = (e) => {
        e.preventDefault();
        console.log(biscocho);

    }

    if (!cake) {
        return <Navigate to="/allcakes" />
    }

    return (
        <>
            <div id="cakePage" className="text-center pt-5 mt-5">
                <h1>{cake.name}</h1>
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

                    <h3>PRECIO DE REFERENCIA : {cake.price}</h3>
                    <h5 className="mt-5">Descripción:</h5>
                    <p className="p-1">{cake.description}</p>

                    <div className="py-1">
                        <form
                            onSubmit={onSubmitFromCake}
                            className="row gap-1 needs-validation"
                            noValidate
                        >

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label">Biscocho:</label>
                                <select id="text-5" className="form-select ms-2" required>
                                    <option value='' selected disabled>Seleccionar...</option>
                                    <option value='Biscocho'>Chocolate</option>
                                    <option value='Biscocho'>Vainilla</option>
                                    <option value='Biscocho'>Marmoleada</option>
                                    <div className="invalid-feedback">
                                        indique el biscocho
                                    </div>
                                </select>
                            </div>

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label ">Relleno:</label>
                                <select id="text-5" className="form-select ms-3" required>
                                    <option value='' selected disabled>Seleccionar...</option>
                                    <option value=''>Ganache de Chocolate</option>
                                    <option value=''>Ganache de Chocolate Blanco</option>
                                    <option value=''>Manjar</option>
                                    <option value=''>Buttercream</option>
                                    <div className="invalid-feedback">
                                        indique el relleno
                                    </div>
                                </select>
                            </div>

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label ms-1">Tamaño:</label>
                                <select id="text-5" className="form-select ms-2" required>
                                    <option value='' selected disabled>Seleccionar...</option>
                                    <option value=''>22cm de diametro (24 Personas)</option>
                                    <option value=''>20cm de diametro (22 Personas)</option>
                                    <option value=''>18cm de diametro (18 Personas)</option>
                                    <option value=''>16cm de diametro (12 Personas)</option>
                                    <option value=''>14cm de diametro (10 Personas)</option>
                                    <option value=''>10cm de diametro (06 Personas)</option>
                                    <div className="invalid-feedback">
                                        indique el tamaño
                                    </div>
                                </select>
                            </div>

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label ms-2">Extra:</label>
                                <select id="text-5" className="form-select ms-4" required>
                                    <option value='' selected disabled>Seleccionar...</option>
                                    <option value=''>Sin extra</option>
                                    <option value=''>Almendra</option>
                                    <option value=''>Nueces</option>
                                    <option value=''>Mani</option>
                                    <option value=''>Piña</option>
                                    <option value=''>Mix frutos secos</option>
                                    <option value=''>Frutos del bosque</option>
                                    <option value=''>Fruitilla en trozos</option>
                                    <option value=''>Mango en trozos</option>
                                    <option value=''>Durazno en trozos</option>
                                    <option value=''>Platano en trozos</option>

                                    <div className="invalid-feedback">
                                        indique extras
                                    </div>
                                </select>
                            </div>

                            <div className="col-12 mt-5 text-center">
                                <button
                                    type="submit"
                                    className="btn btn-warning m-2"
                                >
                                    Agregar
                                </button>

                                <button
                                    onClick={onNavigateBack}
                                    className="btn btn-warning shadow m-2">
                                    Regresar
                                </button>
                            </div>
                        </form>
                    </div>

                    <input
                        className='d-none'
                        type="file"
                        ref={fileInputRef}
                        onChange={onFileInputChange}
                    />
                    <div>
                        {
                            (user.role === 'ADMIN_ROLE')
                                ? <button className="p-2 mt-5 btn btn-warning shadow"
                                    onClick={() => fileInputRef.current.click()}>
                                    actualizar imagen
                                    <i className="fa-sharp fa-solid fa-upload"></i>
                                </button> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
