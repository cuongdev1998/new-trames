import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
import './App.scss';
import { delayImport } from './utils';

import { faHome } from '@fortawesome/free-solid-svg-icons'

const Home = delayImport(import('./pages/Home'));
const About = delayImport(import('./pages/About'));
const Contact = delayImport(import('./pages/Contact'));
const Info = delayImport(import('./pages/Info'));
const Shipments = delayImport(import('./pages/Shipments'));

function App() {
  const history = useHistory();
  const location = useLocation();


  return (
    <div className="tr__app">
      <div className="tr__header">
        {(location.pathname !== "/" && location.pathname !== "/home") && (
          <div className="tr__back--btn" onClick={() => history.push('/')}>
                  <FontAwesomeIcon icon={faHome} />
              </div>
        )}
      </div>
     
       
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/shipment" component={Shipments} />
      </Switch>
    </div>

  );
}

export default App;
