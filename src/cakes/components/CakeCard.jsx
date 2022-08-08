import { Link } from 'react-router-dom';

export const CakeCard = ({ id, category, price, name }) => {

    const cakeImageUrl = `./assets/${id}.png`;
    return (
        <div className='imgCard col animate__animated animate__fadeIn'>
            <div className='card shadow mb-2'>
                <div className='row no-gutters'>
                    <Link
                        className='col-12 text-decoration-none'
                        to={`/cake/${id}`}>
                        <img src={cakeImageUrl} className='card-img shadow' alt={id} />
                    </Link>
                    <div className='col-12 col-hero'>
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>{price}</p>
                            {/* {(alter_ego !== characters) && (<p >{characters}</p>)} */}
                            {/* <p className="card-text">
                                <small className='text-muted'>{first_appearance}</small>
                            </p> */}
                            <Link
                                className='text-decoration-none btn btn-primary shadow'
                                to={`/cake/${id}`}>
                                Agendar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
