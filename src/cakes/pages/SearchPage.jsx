import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { CakeCard } from "../components/CakeCard";
import { getCakeByName } from "../helpers/getCakeByName";
import { Header } from "../../ui";



export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const cakes = getCakeByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && cakes.length === 0;


    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
    }



    return (
        <>
            <Header />
            <div className="row searchImgBg">

                <div className="col-8 m-5">
                    <h4>Buscador</h4>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="form-control shadow mt-5"
                            placeholder="Buscar una Cake"
                            type="text"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-2 shadow">
                            Buscar
                        </button>
                    </form>

                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 m-5 p-5">
                        {/* {
                        (q === '')
                            ? <div className="alert alert-warning">Search a hero</div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                    } */}
                        <div className=" mt-5 alert alert-primary animate__animated animate__fadeIn"
                            style={{ display: showSearch ? '' : 'none' }}>
                            Buscar una cake
                        </div>

                        <div className="mb-5 alert alert-danger animate__animated animate__fadeIn"
                            style={{ display: showError ? '' : 'none' }}>
                            no hay cakes con <b>{q}</b>
                        </div>

                        {
                            cakes.map(cake => (
                                <CakeCard key={cake.id} {...cake} />
                            ))
                        }
                    </div>

                </div>

            </div>

        </>
    )
}
