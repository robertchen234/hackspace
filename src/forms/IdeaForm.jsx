import React, { Component } from "react";

class IdeaForm extends Component {
  state = {
    title: "",
    topic: "",
    problem: "",
    solution: "",
    audience: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.createIdea(this.state);
  };

  render() {
    return (
      <div className="modalWindow">
        <h2 className="What-Is-Your-Idea"> What is you're Idea?</h2>
        <div className="inputs">
          <form onSubmit={this.submitHandler}>
            <textarea
              className="Rectangle_input"
              type="text"
              placeholder="Idea Name"
              name="title"
              value={this.state.value}
              onChange={this.changeHandler}
            />
            <textarea
              className="Rectangle_input"
              placeholder="Problem"
              name="problem"
              value={this.state.value}
              onChange={this.changeHandler}
            />
            <textarea
              className="Rectangle_input"
              placeholder="Solution"
              name="solution"
              value={this.state.value}
              onChange={this.changeHandler}
            />
            <textarea
              className="Rectangle_input"
              type="text"
              placeholder="Target Audience"
              name="audience"
              value={this.state.value}
              onChange={this.changeHandler}
            />
            <br />

            <select
              id="category"
              name="topic"
              value={this.state.value}
              onChange={this.changeHandler}
            >
              ><option value>Select Category</option>
              <option value="e-commerce">E-commerce</option>
              <option value="jobs">Jobs</option>
              <option value="healthcare">HealthCare</option>
              <option value="data_and_privacy">Data and Privacy</option>
            </select>
            <br />
            <input className="submitButton" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default IdeaForm;
