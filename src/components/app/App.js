import React, { Component } from 'react';
import './App.css';

/* Components */
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import InfosPanel from '../infos-panel';
import TodoList from '../todo-list'


export default class App extends Component {

    state = {
        todoData: [
            {title: 'Walk a dog', important: true, done: false, id: 1},
            {title: 'Read a book', important: false, done: false, id: 2},
            {title: 'Learn latin', important: false, done: false, id: 3},

        ],
    }
    deleteItem = id => {
        this.setState( ({todoData}) => {
            const itemIndex = todoData.findIndex( item => item.id === id );

            return {
                todoData: [ ...todoData.slice(0, itemIndex), ...todoData.slice(itemIndex + 1)]
            }
        })
        
    }
    // General method to change value of some property
    toggleProperty(arr, id, propName) {
        const itemIndex = arr.findIndex( item => item.id === id);
        const oldItem = arr[itemIndex];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, itemIndex),
            newItem,
            ...arr.slice(itemIndex + 1)
        ]
    }
    onToggleImportant = id => {
        this.setState( ({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }
    onToggleDone = id => {
        this.setState( ({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }

        })
    }

    render() {
        const {todoData} = this.state;
        return(
            <div className='app-container'>
                <AppHeader />
                <div className='d-flex align-items-center'>
                    <SearchPanel />
                    <InfosPanel />
                </div>
                <TodoList todoInfos={todoData}
                          onToggleImportant={this.onToggleImportant} 
                          onToggleDone={this.onToggleDone}
                          deleteItem={this.deleteItem}
                />
            </div>
        )
    }
}