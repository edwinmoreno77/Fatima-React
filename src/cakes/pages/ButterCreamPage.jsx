import React from 'react';
import { useAuthStore } from '../../hooks';
import { SubNavBar } from '../../ui';
import { AddCakes } from '../components/AddCakes';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const ButterCreamPage = () => {

    const { user } = useAuthStore();

    const category = '62e585ba018bab7096b98838';//buttercream

    return (
        <>
            <SubNavBar />
            <h1 className='text-center py-4'><i>Buttercream</i></h1>
            <div className="m-3">
                <CakeListByCategory category={'BUTTERCREAM'} />
            </div>
            {
                (user.role === 'ADMIN_ROLE') ?
                    <AddCakes category={category} /> : null

            }
        </>

    )
}
