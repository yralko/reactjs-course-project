import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './index.css';

export class Searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBy: 'title',
      search: '',
    };
  }

  getInputValue(e) {
    this.setState({
      search: e.target.value,
    });
  }

  keyReleased(e) {
    if (e.keyCode === 13) {
      this.updateSearchParams();
    }
  }

  updateSearchParams() {
    if (!this.state.search) return;

    const params = Object.entries(this.state)
      .map(val => `${val[0]}=${val[1]}`)
      .join('&');

    this.props.requestFilms(params);

    this.props.updateSearchParams(params);

    this.setState({
      search: '',
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2 className={classes.title}>Find your movie</h2>
          <div className={classes.inputWrapper}>
            <Input
              type="text"
              value={this.state.search}
              placeholder="Type here..."
              styles={classes.Input}
              changed={e => this.getInputValue(e)}
              keyReleased={e => this.keyReleased(e)}
            />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.filterParams}>
            <span>Search by</span>
            <Button
              name="Title"
              clicked={() => this.setState({ filter: 'title' })}
              className={this.state.filter === 'title' ? classes.active : null}
            />
            <Button
              name="Genre"
              clicked={() => this.setState({ filter: 'genres' })}
              className={this.state.filter === 'genres' ? classes.active : null}
            />
          </div>
          <div className={classes.searchButton}>
            <Button
              clicked={() => this.updateSearchParams()}
              name="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestFilms: params => dispatch(actions.requestFilms(params)),
    updateSearchParams: params => dispatch(actions.updateSearchParams(params)),
  };
};

export default connect(null, mapDispatchToProps)(Searchbox);
