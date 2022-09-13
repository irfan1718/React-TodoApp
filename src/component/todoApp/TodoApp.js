import React, { Component } from 'react';
import './TodoApp.css';

export class TodoApp extends Component {
  state = {
    input: '',
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: '',
    });
  };

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  // editItem = (event) => {
  //   event.preventDefault();
  //   const { input } = this.state;

  //   this.setState({
  //     items: [...this.state.items, input],
  //     input: '',
  //   });
  // };

  render() {
    const { input, items } = this.state;

    return (
      <div className='todoapp-container'>
        <form className='input-section' onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input
            type='text'
            value={input}
            onChange={this.handleChange}
            placeholder='Enter Item...'
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <div className='icon'>
                <i
                  className='fa-solid fa-pen-to-square'
                  onClick={() => this.editItem(index)}
                ></i>
                <i
                  className='fas fa-trash-alt'
                  onClick={() => this.deleteItem(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
