import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip,faHandRock, faExclamationCircle, faUser  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
const Home = () => {
    return (
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
    )
}
export default Home
