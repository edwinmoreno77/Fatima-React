import { SubNavBar } from '../../ui';
import { CakeList } from '../components/CakeList';

export const AllCakesPages = () => {
    return (
        <>
            <SubNavBar />
            <h1 className='text-center py-4'><i>Productos</i></h1>
            <div className="m-3">
                <CakeList available={true} />
            </div>
        </>
    )
}
