import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Detail from '../Detail/Detail'
import AddMovie from '../AddMovie/AddMovie'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* Router to route to each page component */}
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/AddMovie" exact>
          <AddMovie />
        </Route>
        <Route path="/detail" exact>
          <Detail />
        </Route>
      </Router>
    </div>
  );
}


export default App;
