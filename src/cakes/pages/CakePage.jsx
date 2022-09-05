import { useMemo, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthStore, useFormSearch } from "../../hooks";
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
        console.log({ uid, biscocho, tamaño, relleno, extra, fecha });

    }

    const FormFields = {
        biscocho: '',
        relleno: '',
        tamaño: '',
        extra: '',
        fetch: '',
    }

    const { biscocho, tamaño, extra, relleno, fecha, onInputChange } = useFormSearch(FormFields);

    if (!cake) {
        return <Navigate to="/allcakes" />
    }

    return (
        <>
            <div id="cakePage" className="text-center pt-5 mt-5 tituloPage">
                <h1>{cake.name}</h1>
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
                        src={cake.img}
                        alt={cake.uid}
                        className="img-thumbnail animate__animated animate__fadeInLeft shadow"
                    />
                </div>
                <div className="col-11 col-md-5 ">
                    <h3 className="titulo-cakePage">PRECIO DE REFERENCIA : {cake.price}</h3>

                    <h5 className="titulo-cakePage mt-3">Descripción:</h5>
                    <p className="p-1">{cake.description}</p>

                    <div className="py-1">
                        <form
                            onSubmit={onSubmitFromCake}
                            className="row gap-1 needs-validation"
                            noValidate
                        >
                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label item-cakePage">Biscocho:</label>
                                <select
                                    id="text-5"
                                    className="form-select ms-2"
                                    required
                                    name="biscocho"
                                    value={biscocho}
                                    onChange={onInputChange}
                                >
                                    <option >Seleccionar...</option>
                                    <option >Chocolate</option>
                                    <option >Vainilla</option>
                                    <option >Marmoleada</option>
                                    <option className="invalid-feedback">
                                        indique el biscocho
                                    </option>
                                </select>
                            </div>

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label item-cakePage">Relleno:</label>
                                <select
                                    id="text-5"
                                    className="form-select ms-3"
                                    required
                                    name="relleno"
                                    value={relleno}
                                    onChange={onInputChange}
                                >
                                    <option >Seleccionar...</option>
                                    <option >Ganache de Chocolate</option>
                                    <option >Ganache de Chocolate Blanco</option>
                                    <option >Manjar</option>
                                    <option >Buttercream</option>
                                    <option className="invalid-feedback">
                                        indique el relleno
                                    </option>
                                </select>
                            </div>

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label ms-1 item-cakePage">Tamaño:</label>
                                <select
                                    id="text-5"
                                    className="form-select ms-2"
                                    required
                                    name="tamaño"
                                    value={tamaño}
                                    onChange={onInputChange}
                                >
                                    <option >Seleccionar...</option>
                                    <option >22cm de diametro (24 Personas)</option>
                                    <option >20cm de diametro (22 Personas)</option>
                                    <option >18cm de diametro (18 Personas)</option>
                                    <option >16cm de diametro (12 Personas)</option>
                                    <option >14cm de diametro (10 Personas)</option>
                                    <option >10cm de diametro (06 Personas)</option>
                                    <option className="invalid-feedback">
                                        indique el tamaño
                                    </option>
                                </select>
                            </div>

                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label ms-2 item-cakePage">Extra:</label>
                                <select
                                    id="text-5"
                                    className="form-select ms-4"
                                    required
                                    name="extra"
                                    value={extra}
                                    onChange={onInputChange}
                                >
                                    <option >Seleccionar...</option>
                                    <option >Sin extra</option>
                                    <option >Almendra</option>
                                    <option >Nueces</option>
                                    <option >Mani</option>
                                    <option >Piña</option>
                                    <option >Mix frutos secos</option>
                                    <option >Frutos del bosque</option>
                                    <option >Fruitilla en trozos</option>
                                    <option >Mango en trozos</option>
                                    <option >Durazno en trozos</option>
                                    <option >Platano en trozos</option>

                                    <option className="invalid-feedback">
                                        indique extras
                                    </option>
                                </select>
                            </div>
                            <div className="col-md-10 d-flex">
                                <label htmlFor="text-5" className="form-label item-cakePage">Fecha:</label>
                                <input
                                    type="date"
                                    className="form-control ms-4"
                                    required
                                    name="fecha"
                                    value={fecha}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="col-12 mt-5 text-center">
                                <button
                                    type="submit"
                                    className="btn btn-warning col-4 m-2"
                                >
                                    <i className="bi bi-calendar-event"></i><i> Agendar</i>
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
