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
            {title: 'Walk a dog', important: false, id: 1},
            {title: 'Read a book', important: false, id: 2},
            {title: 'Learn latin', important: false, id: 3},

        ],
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
                <TodoList todoInfos={todoData}/>
            </div>
        )
    }
}