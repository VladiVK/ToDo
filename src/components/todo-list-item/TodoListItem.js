import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faHandPointer } from '@fortawesome/free-solid-svg-icons'

import './TodoListItem.css';

const TodoListItem = (props) => {
    
    const {
        title,
        important,
        done,
        onToggleImportant,
        onToggleDone,
        deleteItem,
    } = props;

    let styles = 'todo-list-item';
    if(important) styles += ' important';
    if(done) styles += ' done';
    return (
      <span className={styles}>
          <span onClick={ onToggleDone } >
              {title}
              
          </span>

            <button 
                type="button"
                className="btn btn-outline-success btn-sm  float-right"
                onClick={ onToggleImportant }
            >
                <FontAwesomeIcon icon={faHandPointer} />
            </button>
            <button 
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ deleteItem }
            >
    
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
           
      </span>
      
    )
}

export default TodoListItem;
