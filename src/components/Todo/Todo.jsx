import React from 'react';
import './todo.css';
const Todo = props => {
  let todoClass = ['text'];
  let checkDone = 'unchecked';
  if (props.completed) {
    checkDone = 'checked';
  }
  let completed = () => {
    props.done();
  };
  let updateTodo = e => {
    if (props.todo.completed === false)
      props.updateValue(e.target.value, props.index);
  };
  if (props.completed) {
    todoClass.push('done');
  }
  return (
    <div>
      <div className='todo'>
        <div
          checked={checkDone}
          className={checkDone}
          onClick={e => {
            completed();
          }}></div>
        <input
          type='text'
          className={todoClass.join(' ')}
          onChange={updateTodo}
          value={props.todo.title}
          placeholder='Enter todo'
        />
        <button onClick={props.delete}>X</button>
      </div>
    </div>
  );
};
export default Todo;
