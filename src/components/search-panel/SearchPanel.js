import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
    state= {
        searchValue: ''
    }
    onSearchChange = (e) => {
        const val = e.target.value;
        this.props.onSearchChange(val);
        this.setState({searchValue: val});
    }
    
    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   value={this.state.searchValue}
                   onChange={this.onSearchChange}/>
        )
    }
    
}
