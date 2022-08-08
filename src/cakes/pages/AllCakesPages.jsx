import React from 'react';
import { Header } from '../../ui';
import { CakeList } from '../components/CakeList';

export const AllCakesPages = () => {
    return (
        <>
            <Header />
            <h1 className='text-center'><i>Productos</i></h1>
            <div className="m-3">
                <CakeList productName={'cake'} />
            </div>

        </>

    )
}
