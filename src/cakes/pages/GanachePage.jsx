import React from 'react';
import { Header } from '../../ui';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const GanachePage = () => {
    return (
        <>
            <Header />
            <div className="m-3">
                <CakeListByCategory category={'chocolate'} />
            </div>

        </>

    )
}



