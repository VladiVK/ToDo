
import React, {Component} from 'react';
import './AddItem.css';

export default class AddItem extends Component {
    state = {
        title: ''
    }
    onTitleChange = (e) =>{
        this.setState({title: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem( this.state.title );
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='form-group my-2'>
                <input type='text'
                       className='form-control'
                       placeholder='Type new task'
                       value={this.state.title}
                       onChange={this.onTitleChange}
                />
                <button className='btn btn-info btn-block my-1'>Add new task</button>
            </form>
        )
    }
        
    
}