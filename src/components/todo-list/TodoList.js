import React from 'react';
import './TodoList.css';
import TodoListItem from '../todo-list-item'

const TodoList = (props) => {
    const {
        todoInfos,
        onToggleImportant,
        onToggleDone,
        deleteItem,
    } = props;

    const items = todoInfos.map( el => {
        const {id, ...restProps} = el;
        return (
            <li key={id} className="list-group-item ">
                <TodoListItem 
                    {...restProps}
                    onToggleImportant={ () => onToggleImportant(id)}
                    onToggleDone={ () => onToggleDone(id)}
                    deleteItem={ () => deleteItem(id) }
                />
            </li>
        )
    })
    return (
        <ul className="list-group list-group-flush">
            {items}
        </ul>
    )
}

export default TodoList;