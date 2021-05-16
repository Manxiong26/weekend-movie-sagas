import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Detail from '../Detail/Detail'
import AddMovie from '../AddMovie/AddMovie'
import Home from '../Home/Home'
function App() {
  return (
    <div className="App">
      {/* Router to route to each page component */}
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/MovieList" exact>
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
