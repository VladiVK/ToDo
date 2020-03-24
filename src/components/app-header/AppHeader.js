import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <div className='app-header d-flex my-2'>
            <h1>ToDo List</h1>
            <h2>3 uncompleted, done 5</h2>
        </div>
    )
}

export default AppHeader;