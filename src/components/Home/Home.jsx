import { useHistory } from 'react-router-dom';
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


function Home(){

const classes = useStyles();
const history = useHistory();

const goList = (event) => {
    event.preventDefault();
    history.push('/MovieList')
}

    return (
        <div className={classes.root}>
            <img src="http://fc05.deviantart.net/fs70/f/2013/021/5/a/miku_welcome_sign__free_to_use__by_pinkbunnii-d5s9380.gif"/>
            <br/>
            <h1 className="title">The Movies Saga!</h1>
            <Button onClick={goList} variant="contained">Movie List</Button>
        </div>
    )
}

export default Home;