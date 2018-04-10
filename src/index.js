import React, { Component } from 'react';
import ReactDOM from 'react-dom';

if(module.hot) {
   module.hot.accept();
}

class App extends Component {
  render() {
    return (
      <h1>Hello JSX 2018</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
