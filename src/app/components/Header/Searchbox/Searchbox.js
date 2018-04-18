import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './index.css';

class Searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
    }
  }

  getInputValue(e) {
    this.setState({
      searchInputValue: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h3>Find your movie</h3>
        <div className={classes.inputWrapper}>
            <Input type='text' changed={(e) => this.getInputValue(e)} styles={classes.Input} placeholder='Type here...' />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.filterParams}>
            <span>Search by</span>
            <Button name='Title' clicked={() => this.props.changeFilter('title')}/>
            <Button name='Director' clicked={() => this.props.changeFilter('director')}/>
          </div>
          <div className={classes.searchButton}>
            <Button clicked={() => this.props.execSearch(this.state.searchInputValue)} name='Search' />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    execSearch: query => dispatch(actions.execSearch(query)),
    changeFilter: filter => dispatch(actions.changeFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);
