import React, { Component } from 'react';
import './App.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import InfosPanel from '../infos-panel';


export default class App extends Component {

    render() {
        return(
            <div className='app-container'>
                <AppHeader />
                <div className='search-block align-items-center border'>
                    <SearchPanel />
                    <InfosPanel />
                </div>
            </div>
        )
    }
}