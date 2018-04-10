import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TComponent from './app/components/TComponent/TComponent';
import TPureComponent from './app/components/TPureComponent/TPureComponent';
import TFunctionalComponent from './app/components/TFunctionalComponent/TFunctionalComponent';
import TCreateElement from './app/components/TCreateElement/TCreateElement';


if(module.hot) {
   module.hot.accept();
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello JSX 2018</h1>
        <TComponent />
        <TPureComponent />
        <TFunctionalComponent />
        <TCreateElement />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
