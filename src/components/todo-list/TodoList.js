import React from 'react';
import './TodoList.css';
import TodoListItem from '../todo-list-item'

const TodoList = (props) => {
    const {todoInfos} = props;
    const items = todoInfos.map( el => {
        const {id, ...restProps} = el;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...restProps}
                />
            </li>
        )
    })
    return (
        <ul className="list-group">
            {items}
        </ul>
    )
}

export default TodoList;