import { useSelector } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';


function Detail(){

    const movies = useSelector(store => store.movies);
    return(
        <main>
            <h1>MovieList</h1>
            <section className="details">
                {movies.map(movies => {
                    return (
                        <div key={movies.id}>
                            <h3>{movies.description}</h3>
                            <img src={movies.poster} alt={movies.description}/>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default Detail;