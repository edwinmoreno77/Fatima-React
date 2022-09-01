import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/cakes/thunks';
import { getCakeByCategory } from '../helpers/getCakeByCategory';
import { CakeCard } from './CakeCard';

export const CakeListByCategory = ({ category }) => {

    const dispatch = useDispatch();


    const { cakes: torta } = useSelector(state => state.cake);


    useEffect(() => {

        dispatch(getProducts(100));

    }, [])


    const cakes = useMemo(() => getCakeByCategory(category, torta), [category, torta]);

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4'>
            {cakes.map(cake => {
                return (
                    <CakeCard
                        key={cake.uid}
                        {...cake} />
                )
            })}
        </div>
    )
}
