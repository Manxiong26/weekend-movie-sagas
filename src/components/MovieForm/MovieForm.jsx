import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function MovieForm(props) {
    // propping the movie store from the MovieList component
    const movie = props.movie
    const history = useHistory();
    const dispatch = useDispatch();

    //handler to take to detail page and display the details via clicking on the id when a movie poster is clicked
    const handleEdit = () => {
        dispatch({ type: 'GET_DETAIL', payload: movie.id })
        history.push('/detail');
    }

    return (
        <form>
            <div className="list">
                {/* calling the movie title and poster to show in the home page */}
                <h3>{movie.title}</h3>
                <img onClick={handleEdit} src={movie.poster} alt={movie.title} />
            </div>
        </form>
    )
}

export default MovieForm;