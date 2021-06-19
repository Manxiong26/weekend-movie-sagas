import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui import
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Detail.css'

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
    const back = () => {
        console.log('going home');
        history.push('/MovieList');
    }

    return (
        <main className={classes.root}>
            <br></br>
            <Button onClick={home} variant="contained">Go Home</Button>
            <Button onClick={back} variant="contained">Go Back</Button>
            <h1 className="details">Movie Details</h1>
            <section >
                <h2>
                    {/* calling genre name by using the detail store. */}
                    Genres: {detail.name}
                </h2>
                <h2>Description:</h2>
                <div className="detailSec">
                <img className="pic" src={detail.poster} alt={detail.description} />
                <br/>
                {/* calling details using the detail store */}
                
                <h3 className="description" >{detail.description}</h3>
                </div>
            </section>
        </main>
    )
}

export default Detail;