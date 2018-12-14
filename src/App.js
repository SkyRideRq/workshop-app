import React, { Component } from "react";
import Main from "./components/main/main"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Subtable from "./components/subtable/subtable"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/:post_id' component={Subtable}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;