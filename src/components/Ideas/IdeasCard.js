import React, { Component } from "react";

class IdeasCard extends Component {
  state = {
    isClicked: false,
    ideaVotes: this.props.idea.votes.length,
    click: false
  };

  handleClick = () => {
    const { idea } = this.props;
    let ideaVotes = this.state.ideaVotes;
    if (!this.state.isClicked) {
      this.props.createVote(idea.id);
      this.setState({ isClicked: true, ideaVotes: (ideaVotes += 1) });
    }
  };

  clickHandler = () => {
    let clicked = this.state.click;
    this.setState({ click: !clicked });
  };

  render() {
    const { idea } = this.props;

    return (
      <div className="idea-container" onClick={this.clickHandler}>
        <div className="idea-card-info">
          <strong>{idea.title}</strong>
          <h5>{idea.full_name}</h5>

          <div className="heart-div">
            <span onClick={this.handleClick}>❤️</span>
            <span>{this.state.ideaVotes}</span>
            <br />
          </div>

          {this.state.click ? (
            <div>
              <p>Audience:</p>
              <p>{idea.audience}</p>
              <p>Problem:</p>
              <p>{idea.problem}</p>
              <p>Solution:</p>
              <p>{idea.solution}</p>
            </div>
          ) : null}

          <div className="category-tag">
            <div className="category-icon" />
            <h3>{idea.topic}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default IdeasCard;