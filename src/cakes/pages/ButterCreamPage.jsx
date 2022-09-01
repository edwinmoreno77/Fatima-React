import React from 'react';
import { SubNavBar } from '../../ui';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const ButterCreamPage = () => {
    return (
        <>
            <SubNavBar />
            <h1 className='text-center py-4'><i>Buttercream</i></h1>
            <div className="m-3">
                <CakeListByCategory category={'BUTTERCREAM'} />
            </div>

        </>

    )
}
