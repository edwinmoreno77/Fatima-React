import { useMemo } from 'react'
import { getCakeByCategory } from '../helpers/getCakeByCategory';
// import { getCakeById } from '../helpers/getCakeById'
import { CakeCard } from './CakeCard';

export const CakeList = ({ category }) => {

    const cakes = useMemo(() => getCakeByCategory(category), [category]);

    console.log(cakes)

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 col-hero'>
            {cakes.map(cake => {
                return (
                    <CakeCard
                        key={cake.id}
                        {...cake} />
                )
            })}
        </div>
    )
}
