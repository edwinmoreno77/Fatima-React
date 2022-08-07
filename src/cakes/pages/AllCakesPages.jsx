import React from 'react';
import { Header } from '../../ui';
import { CakeList } from '../components/CakeList';

export const AllCakesPages = () => {
    return (
        <>
            <Header />
            <div className="m-3">
                <CakeList productName={'cake'} />
            </div>

        </>

    )
}
