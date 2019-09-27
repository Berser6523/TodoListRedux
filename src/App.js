import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './components/todoList'
import Counter from './components/counter'

export default function App() {
  return (
    <Provider store={store}>
        <div className="todo">
            <TodoList />
            <Counter />
        </div>
    </Provider>
  );
}