import React, { Component } from "react";
import Main from "./components/main/main"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Subtable from "./components/subtable/subtable"
import Nav from './components/nav/nav';
import Editor from './components/editor/editor';
import Help from './components/help/help';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/editor' component={Editor}/>
            <Route exact path='/help' component={Help}/>
            <Route exact path='/:post_id' component={Subtable}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;