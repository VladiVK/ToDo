import React from 'react';
import './InfosPanel.css';

const InfosPanel = () => {
    return (
        <div className=' btn btn-group pr-0'>
            <button className='btn btn-info'>All</button>
            <button  className='btn btn-outline-secondary'>Uncompleted</button>
            <button  className='btn btn-outline-secondary'>Done</button>
        </div>
    )
};

export default InfosPanel;