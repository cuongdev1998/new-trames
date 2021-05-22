import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome  } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
const About = () => {
    const history = useHistory();
    return (
        <div className="tr__about">
           
            About
        </div>
    )
}
export default About
