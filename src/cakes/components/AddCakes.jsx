import { useFormSearch } from '../../hooks/useFormSearch';
import { createProduct } from '../../store/cakes/thunks';


const uploadProduct = {
    name: '',
    description: '',
    price: '',
}

export const AddCakes = ({ category }) => {

    const { name, description, price, onInputChange } = useFormSearch(uploadProduct);

    const uploadProductSubmit = (event) => {
        event.preventDefault();
        createProduct(name, description, price, category);
    }

    return (
        <>
            <hr />
            <h3 className='text-center'>Agregar Producto</h3>
            <div className='text-center p-5'>
                <form onSubmit={uploadProductSubmit} className='row d-flex justify-content-center'>

                    <div className='col-12 col-md-8 col-lg-4'>
                        <label>Name</label>
                        <input
                            className='m-2 m-2 shadow form-control'
                            type="text"
                            placeholder='name'
                            name='name'
                            value={name}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className='col-12 col-md-8 col-lg-2'>
                        <label>price</label>
                        <input
                            className='m-2 m-2 shadow form-control'
                            type="number"
                            placeholder='price'
                            name='price'
                            value={price}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='col-12 col-md-8 col-lg-12'>
                        <label>description</label>
                        <input
                            className='m-2 m-2 shadow form-control'
                            type="text"
                            placeholder='description'
                            name='description'
                            value={description}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className='text-center'>
                        <button
                            className='btn btn-warning p-2 m-2'
                            type='submit'>
                            <i className="fa-sharp fa-solid fa-upload"></i> Agregar
                        </button>
                    </div>
                </form>
            </div>
            <hr />
        </>
    )
}
