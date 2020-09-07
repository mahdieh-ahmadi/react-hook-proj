import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Ingredients from './components/ingredients/Ingredients'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Ingredients/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
