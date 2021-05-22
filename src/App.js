import { Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import { delayImport } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip,faHandRock, faExclamationCircle, faUser  } from '@fortawesome/free-solid-svg-icons'
// import { faShip } from '@fortawesome/free-solid-svg-icons'

const Home = delayImport(import('./pages/Home'));
const About = delayImport(import('./pages/About'));
const Contact = delayImport(import('./pages/Contact'));
const Info = delayImport(import('./pages/Info'));

const functionList = [
  {
    label: 'Home',
    path: '/home',
    icon: faShip
  },
  {
    label: 'About',
    path: '/about',
    icon: faHandRock
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: faExclamationCircle
  },
  {
    label: 'Info',
    path: '/info',
    icon: faUser
  }
]
function App() {
  return (
    <div className="tr__app">
      <div className="tr__menu">
        {functionList.map((grid, gridIndex) => (
          <Link to={grid.path} key={gridIndex}>
            <div key={gridIndex} className={`tr__menu--item`}>
              <FontAwesomeIcon icon={grid.icon} />
              <h2>{grid.label}</h2>
            </div>
          </Link>
        ))}
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </div>

  );
}

export default App;
