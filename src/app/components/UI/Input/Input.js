import React from 'react';
import classes from './index.css';

const Input = props => {
  const styles = [classes.Input];

  if(props.styles) styles.push(props.styles);

  return (
    <input
      className={styles.join(' ')}
      onChange={(e) => props.changed(e)}
      onKeyUp={(e) => props.keyReleased(e)}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
