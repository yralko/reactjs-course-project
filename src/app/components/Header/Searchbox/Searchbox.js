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
      filter: 'title',
      inputValue: '',
    };
  }

  getInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  searchFilms(criterion) {
    const foundFilms = this.props.fetchedFilms
      .filter(film => film[criterion]
        .toString()
        .toLowerCase()
        .includes(this.state.inputValue
          .toLowerCase()));

    this.props.searchFilms(foundFilms);
  }

  keyReleased(e) {
    if (e.keyCode === 13) {
      this.searchFilms(this.state.filter);
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
              changed={e => this.getInputValue(e)}
              styles={classes.Input}
              placeholder="Type here..."
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
              clicked={() => this.searchFilms(this.state.filter)}
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
    fetchedFilms: state.fetchedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFilms: films => dispatch(actions.searchFilms(films)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);
