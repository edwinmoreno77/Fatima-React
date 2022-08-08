import { useMemo } from 'react'
import { getCakeByCategory } from '../helpers/getCakeByCategory';
import { CakeCard } from './CakeCard';

export const CakeListByCategory = ({ category }) => {

    const cakes = useMemo(() => getCakeByCategory(category), [category]);

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5 col-hero'>
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
