import React, { Component } from 'react';
import { getCheckboxColumn } from "./checkbox-column";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Clicking on the next div should be broken when built.
        </p>
				{
					getCheckboxColumn({selectedRows: [], data: [{id: "abc"},{id: "def"}]}).Header
				}
      </div>
    );
  }
}

export default App;
