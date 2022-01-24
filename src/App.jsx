/** @format */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { observer } from 'mobx-react-lite';

function App() {
  // app will render the list of todoItems
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default observer(App);
