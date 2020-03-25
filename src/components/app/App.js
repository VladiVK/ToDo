import React, { Component } from 'react';
import './App.css';

/* Components */
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import InfosPanel from '../infos-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';


export default class App extends Component {
    baseIndex = 100;
    state = {
        todoData: [
            this.createItem('Walk a dog'),
            this.createItem('Read a book'),
            this.createItem('Learn latin'),
        ],
        term: '',
    }
    createItem(title) {
        return {
            title: title,
            important: false,
            done: false,
            id: this.baseIndex++,
        }
    }
    deleteItem = id => {
        this.setState( ({todoData}) => {
            const itemIndex = todoData.findIndex( item => item.id === id );
            return {
                todoData: [ ...todoData.slice(0, itemIndex), ...todoData.slice(itemIndex + 1)]
            }
        })
        
    }
    addItem = ( titleText) => {
        this.setState( ({todoData}) => {
            if(titleText) {
                return {
                    todoData: [ ...todoData, this.createItem(titleText) ]
                }
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
    // Search panel method
    search(items, term) {
        if(term.length === 0) return items;
        return items.filter( item => item.title.toLowerCase().includes( term.toLowerCase() ) );
    }
    onSearchChange = (val) => {
        this.setState( {term: val})
    }

    render() {
        const {todoData, term} = this.state;
        const visibleItems = this.search( todoData, term)
        return(
            <div className='container app-container'>
                <AppHeader />
                <div className='d-flex align-items-center'>
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <InfosPanel />
                </div>
                <TodoList todoInfos={visibleItems}
                          onToggleImportant={this.onToggleImportant} 
                          onToggleDone={this.onToggleDone}
                          deleteItem={this.deleteItem}
                />
                <AddItem addItem={this.addItem}/>
            </div>
        )
    }
}