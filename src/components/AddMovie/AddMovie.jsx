
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


function AddMovie() {
    useEffect(() => {
        dispatch({ type: 'ADD_GENRES'})
    }, []);
    


    const genres = useSelector( store => store.genres)

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: {title: title, poster: poster, description: description, genre_id: genre }})
    };


    return (
     <section>
        <form onSubmit={handleSubmit}>
                <input 
                    required
                    placeholder="Movie Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}/>
                    


                <input 
                    required
                    placeholder="Movie URL" 
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)}/>
                    


                <input 
                    required
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}/>
                    
                    <select onChange={(event) => setGenre(event.target.value)}>
                        {genres.map(item => {
                            return <option key={item.id} value={item.id}>{item.name} </option>
                            })}

                    
                </select>
                <button type="submit">
                    Add Movie
                </button>
        </form>
    </section>
    )
}

export default AddMovie;