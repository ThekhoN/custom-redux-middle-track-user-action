import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterApp from "./components/CounterApp";
import { connect } from "react-redux";
import { updateUserTrackedAction } from "./redux/modules/user-tracked-action/actions";

import "./styles.css";

class App extends React.Component {
  userTrackActionClicked = e => {
    this.props.updateUserTrackedAction("USER_TRACKED_ACTION:CLICK");
  };
  userTrackActionScrolled = () => {
    this.props.updateUserTrackedAction("USER_TRACKED_ACTION:SCROLL");
  };
  componentDidMount() {
    // custom events for tracking user actions
    document.addEventListener("click", this.userTrackActionClicked);
    window.addEventListener("scroll", this.userTrackActionScrolled);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.userTrackActionClicked);
    window.removeEventListener("scroll", this.userTrackActionScrolled);
  }
  render() {
    return (
      <div className="App">
        <h2>Custom Redux Middleware</h2>
        <CounterApp />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserTrackedAction: payload => dispatch(updateUserTrackedAction(payload))
});

const ConnectedApp = connect(
  null,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
