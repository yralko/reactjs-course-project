import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './index.css';

class Searchbox extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Find your movie</h3>
        <div className={classes.inputWrapper}>
            <Input type='text' styles={classes.Input} placeholder='Type here...' />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.filterParams}>
            <span>Search by</span>
            <Button name='Title' />
            <Button name='Director' />
          </div>
          <div className={classes.searchButton}>
            <Button name='Search' />
          </div>
        </div>
      </div>
    )
  }
}

export default Searchbox;
