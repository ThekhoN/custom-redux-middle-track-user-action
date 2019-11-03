import React from "react";
import { connect } from "react-redux";
import { updateCount } from "../redux/modules/counter";

class CounterApp extends React.Component {
  decrementCount = () => {
    this.props.updateCount(this.props.count - 1);
  };
  incrementCount = () => {
    this.props.updateCount(this.props.count + 1);
  };
  render() {
    return (
      <div>
        <h3>CounterApp</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={this.decrementCount}>-</button>
          <h2>Count: {this.props.count}</h2>
          <button onClick={this.incrementCount}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});
const mapDispatchToProps = dispatch => ({
  updateCount: payload => dispatch(updateCount(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);
