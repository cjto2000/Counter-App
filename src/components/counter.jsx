import React, { Component } from "react";

class Counter extends Component {
  state = {
    //js object that includes any data that this component needs
    value: this.props.counter.value //gets the value from counter.jsx
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    //this.state.count++ doesn't work because you specifically
    //need to tell react what is changed
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //in-line function
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //raising an event
          className="btn btn-danger gtn-sm m-2"
        >
          Delete
        </button>
      </div>
    ); //JSX Expression -> React.createElement()
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value == 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
