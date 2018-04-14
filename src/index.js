import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './app/components/Header/Header'


if (module.hot) {
  module.hot.accept();
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello JSX 2018</h1>
         <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
