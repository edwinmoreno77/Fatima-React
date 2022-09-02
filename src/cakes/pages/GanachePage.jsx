import React from 'react';
import { Slider, SubNavBar } from '../../ui';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const GanachePage = () => {
    return (
        <>
            {/* <Slider /> */}
            <SubNavBar />
            <h1 className='text-center py-4'><i>Ganache</i></h1>
            <div className="m-3">
                <CakeListByCategory category={'CHOCOLATE'} />
            </div>
        </>

    )
}



