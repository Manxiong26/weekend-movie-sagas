import { useHistory } from 'react-router-dom';


function MovieForm(props) {

    const movie = props.movie
    const history = useHistory();

    const handleEdit = () => {
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