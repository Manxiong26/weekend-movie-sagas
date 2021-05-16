import { useSelector, useDispatch } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';


function Detail(){


    const detail = useSelector(store => store.detail);
    const genre = useSelector( store => store.genres);


    return(
        <main>
            <h1>MovieList</h1>
            <section className="details">
                <h4>
                    Genres: {detail.name}
                </h4>
                        <h3>{detail.description}</h3>
                        <img src={detail.poster} alt={detail.description} />
            </section>
        </main>
    )
}

export default Detail;