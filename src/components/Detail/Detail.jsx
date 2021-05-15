import { useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function Detail(){

    const movies = useSelector(store => store.movies);

    return(
        <main>
            <h1>MovieList</h1>
            <section className="details">
                {movies.map(movie => {
                    return (
                        <div>
                            <Router>
                                <nav>
                                    <p><Link to="/">Home</Link></p>
                                </nav>
                            </Router>
                            <h3>{movie.description}</h3>
                            <img src={movie.poster} alt={movie.description}/>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default Detail;