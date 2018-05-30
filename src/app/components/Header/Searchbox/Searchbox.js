import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './index.css';
import debounce from 'lodash.debounce';

export class Searchbox extends Component {
  constructor(props) {
    super(props);
  }

  getInputValue = debounce((e) => {
      this.props.updateQueryParameter('search', e.target.value)
    }, 200);

  keyReleased(e) {
    console.log(this.props);
    if (e.keyCode === 13) {
      this.props.requestFilms();
    }
  }

  onChange(e) {
    e.persist();
    this.getInputValue(e)
  }

  render() {
    return (
      <div>
        <div>
          <h2 className={classes.title}>Find your movie</h2>
        <div data-selector="search-input" className={classes.inputWrapper}>
            <Input
              id="input__search"
              type="text"
              placeholder="Type here..."
              styles={classes.Input}
              changed={e => this.onChange(e)}
              keyReleased={e => this.keyReleased(e)}
            />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.filterParams}>
            <span>Search by</span>
            <Button
              id="btn__searchBy-title"
              name="Title"
              clicked={() => this.props.updateQueryParameter('searchBy', 'title')}
              className={this.props.query.searchBy === 'title' ? classes.active : null}
            />
            <Button
              id="btn__searchBy-genre"
              name="Genre"
              clicked={() => this.props.updateQueryParameter('searchBy', 'genres')}
              className={this.props.query.searchBy === 'genres' ? classes.active : null}
            />
          </div>
          <div data-selector="search-button" className={classes.searchButton}>
            <Button
              id="btn__search"
              clicked={() => this.props.requestFilms()}
              name="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    query: state.query,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    updateQueryParameter: (param, value) => dispatch(actions.updateQueryParameter(param, value)),
    requestFilms: () => dispatch(actions.requestFilms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);
