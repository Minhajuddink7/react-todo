import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Todo from './Todo/Todo';

class App extends Component {
  componentDidMount() {
    let todos = [];
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
      this.setState({ todos });
    }
  }
  componentDidUpdate() {
    const todos = [...this.state.todos];
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  state = {
    todos: []
  };
  todoToggled = index => {
    let todos = [...this.state.todos];
    if (todos[index].title !== '') {
      todos[index].completed = !todos[index].completed;
      let todo = todos[index];
      if (!todo.completed) {
        todos.splice(index, 1);
        todos.unshift(todo);
        this.setState({ todos });
      } else {
        todos.splice(index, 1);
        todos.push(todo);
        this.setState({ todos });
      }
    }
  };
  delete = index => {
    let todos = [...this.state.todos];
    if (!todos[index].completed) {
      if (window.confirm('Are you sure?')) {
        todos.splice(index, 1);
        this.setState({ todos });
      }
    } else {
      todos.splice(index, 1);
      this.setState({ todos });
    }
  };
  addTodo = () => {
    let todos = [...this.state.todos];
    let todoItem = { title: '', completed: false };
    let len = todos.length;
    if (len === 0 || todos[0].title !== '') {
      todos.unshift(todoItem);
      this.setState({ todos });
    } else {
      alert('Enter todo first');
    }
  };
  updateValue = (todo, i) => {
    let updatedTodo = {
      title: todo,
      completed: false
    };
    let todos = [...this.state.todos];
    todos.splice(i, 1, updatedTodo);
    this.setState({ todos });
  };
  render() {
    let todos = this.state.todos.map((todo, index) => {
      return (
        <Todo
          todo={todo}
          done={() => this.todoToggled(index)}
          key={index + 1}
          completed={todo.completed}
          delete={() => this.delete(index)}
          updateValue={this.updateValue}
          index={index}
        />
      );
    });
    return (
      <div className='App'>
        <Header added={this.addTodo} title={this.props.title} />

        {todos}
      </div>
    );
  }
}
export default App;
