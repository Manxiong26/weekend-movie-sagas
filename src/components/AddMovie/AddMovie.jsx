import { useState } from 'react'

function AddMovie() {

    const [movie, setMovie] = useState({ title: '' });
    const handleSubmit = (event) => {
        event.preventDefault();

    }


    return (
        <form>
            <div>
                <input placeholder="Movie Title"></input>
                <input placeholder="Movie URL" type="url"></input>
                <input placeholder="Description"></input>
            </div>
        </form>
    )
}

export default AddMovie;