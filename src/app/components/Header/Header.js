import React, { Component } from 'react';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';
import Logo from '../Logo/Logo';
import classes from './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoxActive: true,
    };
  }

  changeContent() {
    this.setState({
      searchBoxActive: !this.state.searchBoxActive,
    });
  }

  render() {
    let headerContent = null;

    if (this.state.searchBoxActive) {
      headerContent = <Searchbox />;
    } else {
      headerContent = <FilmDescription />;
    }

    return (
      <div className={classes.Header}>
        <div className={classes.wrapper}>
          <button onClick={() => this.changeContent()}>Change Content</button>
          <Logo />
          {headerContent}
        </div>
      </div>
    );
  }
}

export default Header;
