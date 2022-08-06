import React from 'react';
import { CakeList } from '../components/CakeList';

export const ChocolatePage = () => {
    return (
        <>
            <div className="m-3">
                <CakeList category={'chocolate'} />
            </div>

        </>

    )
}
