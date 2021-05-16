import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieForm from '../MovieForm/MovieForm'
import { useHistory } from 'react-router-dom';
//importing material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function MovieList() {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    //calling the movie store
    const movies = useSelector(store => store.movies);

    // make it so that the GET on get genres once as components loads
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const addMovies = (event) => {
        event.preventDefault();
        history.push('/AddMovie')
    }

    return (
        <main className={classes.root}>
            <h1>MovieList</h1>
            <Button onClick={addMovies} variant="contained">Add New Movie</Button>
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