import { useSelector } from 'react-redux';



function Detail(){

    const movies = useSelector(store => store.movies);

    return(
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div>
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