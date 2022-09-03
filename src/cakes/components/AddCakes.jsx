import { useRef } from 'react'
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
                <form onSubmit={uploadProductSubmit}>
                    <label>Name</label>
                    <input
                        className='m-2 m-2 shadow'
                        type="text"
                        placeholder='name'
                        name='name'
                        value={name}
                        onChange={onInputChange}
                    />
                    <label>description</label>
                    <input
                        className='m-2 m-2 shadow'
                        type="text"
                        placeholder='description'
                        name='description'
                        value={description}
                        onChange={onInputChange}
                    />
                    <label>price</label>
                    <input
                        className='m-2 m-2 shadow'
                        type="text"
                        placeholder='price'
                        name='price'
                        value={price}
                        onChange={onInputChange}
                    />
                    <button
                        className='btn btn-warning'
                        type='submit'>
                        <i className="fa-sharp fa-solid fa-upload"></i>
                    </button>
                </form>
            </div>
            <hr />
        </>
    )
}
