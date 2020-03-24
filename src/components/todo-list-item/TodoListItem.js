import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faHandPointer, faTrash } from '@fortawesome/free-solid-svg-icons'

import './TodoListItem.css';

const TodoListItem = () => {
    
    return (
      <span className='todo-list-item'>
          <span>
              Walk a dog !
          </span>

            <button 
                type="button"
                className="btn btn-outline-success float-right">
    
                <FontAwesomeIcon icon={faHandPointer} />
            </button>
            <button 
                type="button"
                className="btn btn-outline-danger float-right">
    
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
           
      </span>
      
    )
}

export default TodoListItem;
