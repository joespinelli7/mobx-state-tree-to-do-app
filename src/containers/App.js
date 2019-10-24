import React from 'react';
import { observer, inject } from 'mobx-react'; //These functions make our components observable and enable them to use the store.
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {
  render () {
    const { store } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <h3 className="subtitle">Make a new To do</h3>
          <Form store={store}/>
        </div>
        <div className="card-container">
          {store.Todo.map((todo, i) => (
            <TodoList todo={todo} key={i}/>
          ))}
        </div>
      </div>
    );
  }
}

// Now lets setup our App to receive the store so we can use the functionality we just built. We do this by
// injecting the store into the components props with the inject method. Now we are able use it as we do with
// <Form store={store}/> as well as with the mapping of our<TodoList todo={todo} key={i} /> component.
export default inject('store')(observer (App));
