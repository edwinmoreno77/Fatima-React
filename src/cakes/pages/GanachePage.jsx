import React from 'react';
import { Header } from '../../ui';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const GanachePage = () => {
    return (
        <>
            <Header />
            <h1 className='text-center'><i>Ganache</i></h1>
            <div className="m-3">
                <CakeListByCategory category={'chocolate'} />
            </div>

        </>

    )
}



