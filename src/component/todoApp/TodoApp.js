import React, { Component } from 'react';
import './TodoApp.css';

export default class TodoApp extends Component {
  render() {
    return (
      <div className='todoapp-container'>
        <form className='input-section'>
          <h1>TodoApp</h1>
          <input type='text' placeholder='Enter Item...' />
        </form>
        <ul>
          <li>
            Lists <i class='fas fa-trash-alt'></i>
          </li>
          <li>
            Lists <i class='fas fa-trash-alt'></i>
          </li>
        </ul>
      </div>
    );
  }
}
