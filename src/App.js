import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import News from './components/News'
import Weather from './components/Weather'
import Sports from './components/Sports'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/news'>News</Link>
          <Link to='/weather'>Weather</Link>
          <Link to='/sports'>Sports</Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/weather'>
            <Weather />
          </Route>
          <Route path='/sports'>
            <Sports />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
