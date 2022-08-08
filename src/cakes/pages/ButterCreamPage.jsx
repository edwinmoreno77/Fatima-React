import React from 'react';
import { Header } from '../../ui';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const ButterCreamPage = () => {
    return (
        <>
            <Header />
            <div className="m-3">
                <CakeListByCategory category={'buttercream'} />
            </div>

        </>

    )
}
