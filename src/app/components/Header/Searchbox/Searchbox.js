import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './index.css';
import debounce from '../../../auxilliary/debounce';

export class Searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    }
  }

  getInputValue = debounce((e) => {
      this.props.updateQueryParameter('search', e.target.value)
    }, 500);

  keyReleased(e) {
    if (e.keyCode === 13) {
      this.props.requestFilms(this.props.query);
    }
  }

  render() {


    return (
      <div>
        <div>
          <h2 className={classes.title}>Find your movie</h2>
          <div className={classes.inputWrapper}>
            <Input
              type="text"
              placeholder="Type here..."
              styles={classes.Input}
              changed={(e) => {
                e.persist();
                this.getInputValue(e)
              }}
              keyReleased={e => this.keyReleased(e)}
            />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.filterParams}>
            <span>Search by</span>
            <Button
              name="Title"
              clicked={() => this.props.updateQueryParameter('searchBy', 'title')}
              className={this.state.filter === 'title' ? classes.active : null}
            />
            <Button
              name="Genre"
              clicked={() => this.props.updateQueryParameter('searchBy', 'genres')}
              className={this.state.filter === 'genres' ? classes.active : null}
            />
          </div>
          <div className={classes.searchButton}>
            <Button
              clicked={() => this.props.requestFilms(this.props.query)}
              name="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQueryParameter: (param, value) => dispatch(actions.updateQueryParameter(param, value)),
    requestFilms: params => dispatch(actions.requestFilms(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);
