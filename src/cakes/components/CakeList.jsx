import { useMemo } from 'react'
// import { getCakeByCategory } from '../helpers/getCakeByCategory';
import { getProductByName } from '../helpers/getProductName';
import { CakeCard } from './CakeCard';

export const CakeList = ({ productName }) => {

    // const cakes = useMemo(() => getCakeByCategory(category), [category]);
    const cakes = useMemo(() => getProductByName(productName), [productName]);

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
