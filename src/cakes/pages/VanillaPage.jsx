import React from 'react'
import { CakeList } from '../components/CakeList';


export const VanillaPage = () => {
    return (
        <>
            <div className="m-3">
                <CakeList category={'vanilla'} />
            </div>

        </>
    )
}
