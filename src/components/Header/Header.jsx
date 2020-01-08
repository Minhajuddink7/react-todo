import React from 'react';
import './header.css';
const Header = props => {
  const addTodo = () => {
    props.added();
  };

  return (
    <div className='head'>
      <span>{props.title}</span>

      <button className='add' onClick={addTodo}>
        +
      </button>
    </div>
  );
};
export default Header;
