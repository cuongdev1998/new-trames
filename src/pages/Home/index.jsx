import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip,faHandRock, faExclamationCircle, faUser  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index.scss';

const functionList = [
    {
      label: 'Shipment',
      path: '/shipment',
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
const Home = () => {
    return (
        <div className="tr__home">
          <div className="tr__home--menu">
            {functionList.map((grid, gridIndex) => (
              <Link to={grid.path} key={gridIndex}>
                <div key={gridIndex} className={`tr__home--menu__item`}>
                  <FontAwesomeIcon icon={grid.icon} size="4x" className="item__icon" />
                  <h2>{grid.label}</h2>
                </div>
              </Link>
            ))}
          </div>
      </div>
    )
}
export default Home
