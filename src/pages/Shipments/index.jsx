import React from 'react';
import './index.scss';
import { Button } from '../../components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Shipments = () => {
    return (
        <div className='tr__shipments'>
            <div className='tr__shipments--header'>
                <Button className='tr__shipment-create outline danger'>
                    Create a shipment
                    <FontAwesomeIcon icon={faPlus} /> 
                </Button>
            </div>
            <div className='tr__shipments--body'></div>
        </div>
    )
}

export default Shipments;
