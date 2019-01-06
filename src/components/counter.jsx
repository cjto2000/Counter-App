import React, { Component } from "react";

class Counter extends Component {
  state = {
    //js object that includes any data that this component needs
    count: 0
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    //this.state.count++ doesn't work because you specifically
    //need to tell react what is changed
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //in-line function
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    ); //JSX Expression -> React.createElement()
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count == 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
