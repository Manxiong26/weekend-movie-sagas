import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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


function AddMovie() {

    // make it so that the GET on get genres once as components loads
    useEffect(() => {
        //dispatch the saga getGenre
        dispatch({ type: 'ADD_GENRES' })
    }, []);

    //changing useHistory to history
    const history = useHistory();
    //changing the genres store into just genres
    const genres = useSelector(store => store.genres)

    const classes = useStyles();

    //local state
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('')

    //changed the useDispatch to dispatch
    const dispatch = useDispatch();

    //the handler that will submit the information to the DB
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatched the addMovie saga 
        dispatch({ type: 'ADD_MOVIE', payload: { title: title, poster: poster, description: description, genre_id: genre } })
    };
    //the handler to go back to home page
    const goBack = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <section>
            {/* on submit use handleSubmit for this form */}
            <form onSubmit={handleSubmit}>
                {/* inputs to collect the information from users */}
                <input
                    required
                    placeholder="Movie Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />



                <input
                    required
                    placeholder="Movie URL"
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)} />



                <input
                    required
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />

                <select onChange={(event) => setGenre(event.target.value)}>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name} </option>
                    })}


                </select>
                <br />
                <br />
                <Button variant="contained">Save Move</Button>

            </form>
            {/* button to go back to home page */}
            <p><Button onClick={goBack} variant="contained">Cancel</Button></p>

        </section>
    )
}

export default AddMovie;