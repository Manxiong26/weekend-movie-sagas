import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui import
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//using material ui 
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Detail() {
    const history = useHistory();
    const classes = useStyles();
    //calling the detail store 
    const detail = useSelector(store => store.detail);

    //handler to take users back to home page
    const home = () => {
        console.log('going home');
        history.push('/');
    }

    return (
        <main className={classes.root}>
            <br></br>
            <Button onClick={home} variant="contained">Go Home</Button>
            <h1>Movie Details</h1>
            <section className="details">
                <h2>
                    {/* calling genre name by using the detail store. */}
                    Genres: {detail.name}
                </h2>
                <h2>Description:</h2>
                {/* calling details using the detail store */}
                <h3>{detail.description}</h3>
                <img src={detail.poster} alt={detail.description} />

            </section>
        </main>
    )
}

export default Detail;