


function MovieForm(props) {

    const movie = props.movie

    return (
        <form>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </form>
    )
}

export default MovieForm;