import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //props are data we give to a component while state is data that
  //is local or private to a component, it's internal to the component
  //props are read-only, cannot be changed

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={this.onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete} //can be this.props.onDelete of the const above is not defined
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
