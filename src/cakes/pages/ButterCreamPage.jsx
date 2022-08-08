import React from 'react';
import { Header } from '../../ui';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const ButterCreamPage = () => {
    return (
        <>
            <Header />
            <h1 className='text-center'><i>Buttercream</i></h1>
            <div className="m-3">
                <CakeListByCategory category={'buttercream'} />
            </div>

        </>

    )
}
