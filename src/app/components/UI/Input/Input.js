import React from 'react';
import classes from './index.css';

const Input = props => {
  return (
    <input
      id={props.id}
      value={props.value}
      className={classes.Input}
      onChange={(e) => props.changed(e)}
      onKeyUp={(e) => props.keyReleased(e)}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
