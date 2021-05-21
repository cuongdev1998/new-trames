import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { delayImport } from './utils';

const Home = delayImport(import('./pages/Home'))
const About = delayImport(import('./pages/About'))
function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>

  );
}

export default App;
