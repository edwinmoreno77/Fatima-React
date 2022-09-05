import React, { useRef } from 'react'
import { useAuthStore } from '../../hooks';
import { updateImgProduct } from '../../store/cakes/thunks';

export const AdminUpdateImg = ({ uid }) => {


    const { user } = useAuthStore();



    const fileInputRef = useRef();

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        updateImgProduct(target.files, uid);
    }


    return (
        <div>
            <input
                className='d-none'
                type="file"
                ref={fileInputRef}
                onChange={onFileInputChange}
            />
            {
                (user.role === 'ADMIN_ROLE')
                    ? <button className="p-2 mt-5 btn btn-warning shadow"
                        onClick={() => fileInputRef.current.click()}>
                        actualizar imagen
                        <i className="fa-sharp fa-solid fa-upload"></i>
                    </button> : null
            }
        </div>
    )
}
