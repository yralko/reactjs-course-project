import React from 'react';
import classes from './index.css';

const Input = props => {

  const styles = [classes.Input];
  props.styles ? styles.push(props.styles) : null;

  const parsedStyles = styles.join(' ');

  return (
    <input className={parsedStyles} type={props.type} placeholder={props.placeholder} />
  );
}

export default Input;
