import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieForm from '../MovieForm/MovieForm'

function MovieList() {

    const dispatch = useDispatch();
    //calling the movie store
    const movies = useSelector(store => store.movies);

    // make it so that the GET on get genres once as components loads
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* mapping the movies array */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            {/* importing the MovieForm component to show the list of movies */}
                            <MovieForm movie={movie} />
                            {/* <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/> */}
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;