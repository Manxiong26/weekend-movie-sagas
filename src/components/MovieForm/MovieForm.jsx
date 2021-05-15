import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';


function MovieForm(props) {

    const movie = props.movie
    const history = useHistory();
    const dispatch = useDispatch();
    

    const handleEdit = () => {
        dispatch({type: 'GET_DETAIL', payload: movie.id})
        history.push('/detail');
      }

    return (
        <form>
            <div>
                <h3>{movie.title}</h3>
                <img onClick={handleEdit} src={movie.poster} alt={movie.title} />
            </div>
        </form>
    )
}

export default MovieForm;