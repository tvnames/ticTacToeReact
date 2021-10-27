import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Board } from "./Components/board";
import { Scoreboard } from "./Components/scoreboard";
import "./styles/board.css";
import "./styles/box.css";
import "./styles/buttons.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
