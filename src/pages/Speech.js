import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AudioContainer, PostListContainer } from "../containers";

class Speech extends Component {
  render() {
    return (
      <div className="asd">
        <Router>
          <Switch>
            <Route exact path="/" component={PostListContainer} />
            <Route path="/speech/audio/write" component={AudioContainer} />
            <Route path="/speech/audio/:audioId" component={AudioContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Speech;
