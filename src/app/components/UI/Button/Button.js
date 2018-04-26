import React from 'react';
import classes from './index.css';

const Button = props => <button className={props.className} onClick={props.clicked}>{props.name}</button>;

export default Button;
