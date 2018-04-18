import React from 'react';
import classes from './index.css';

const Button = props => <button onClick={props.clicked}>{props.name}</button>;

export default Button;
