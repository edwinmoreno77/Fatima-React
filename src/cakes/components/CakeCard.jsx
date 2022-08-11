import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export const CakeCard = ({ id, category, price, name }) => {

    const cakeImageUrl = `./assets/${id}.png`;
    return (
        <div className='imgCard animate__animated animate__fadeIn'>
            <div className='card shadow mb-2'>
                <div className='row no-gutters'>
                    <Link
                        className='col-12 text-decoration-none'
                        to={`/cake/${id}#cakePage`}>
                        <img src={cakeImageUrl} className='card-img shadow' alt={id} />
                    </Link>
                    <div className='col-12 col-hero'>
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>{price}</p>
                            <Link
                                className='text-decoration-none btn btn-warning shadow'
                                to={`/cake/${id}#cakePage`}>
                                Ver Producto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
