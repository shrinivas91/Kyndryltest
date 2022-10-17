import React, { Component } from "react";

export class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      VMid: "",
      VMname: "",
      location: "",
      status: false
    };
  }
  setVMname = (e) => {
    this.setState({
      VMname: e.target.value
    });
  };
  setVMId = (e) => {
    this.setState({
      VMid: e.target.value
    });
  };

  change = (event) => {
    console.log("e", event.target.value);
    this.setState({ value: event.target.value });
  };

  changeRadio = (event) => {
    this.setState({ status: event.target.value });
  };

  SubmitVM = () => {
    console.log("state", this.state);
  };

  render() {
    return (
      <div>
        <p>
          <label>VMname: </label>
          <input
            type="text"
            name="VMname"
            value={this.state.VMname}
            onChange={this.setVMname}
          />
        </p>
        <label>VMId: </label>
        <input
          type="text"
          name="VMid"
          value={this.state.VMid}
          onChange={this.setVMId}
        />
        <div>
          <label>City: </label>
          <select id="lang" onChange={this.change} value={this.state.value}>
            <option value="select">Select</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <label>Status: </label>
          <label>On</label>
          <input
            type="radio"
            name="status"
            value={this.state.status}
            checked={this.state.status === true}
            onChange={this.changeRadio}
          />
          <label>Off</label>
          <input
            type="radio"
            name="status"
            value={this.state.status}
            checked={this.state.status === false}
            onChange={this.changeRadio}
          />
          <p></p>
          <p>{this.state.value}</p>
        </div>
        <button onClick={this.SubmitVM}>Submit</button>
      </div>
    );
  }
}
