import React, { Component } from "react";
import IdeasContainer from "../components/Ideas/IdeasContainer";
import TeamsContainer from "../components/Teams/TeamsContainer";

class EventShowPage extends Component {
  state = {
    phase: 1
  };

  changePhase = () => {
    this.setState({ phase: 2 });
  };

  render() {
    return (
      <div className="ideas-container">
        <h1 className="voting-title"> Idea Voting Phase </h1>
        <h2 className="hack-event"> {this.props.event.title} </h2>
        {this.state.phase === 1 ? (
          <div>
            <IdeasContainer
              createVote={this.props.createVote}
              changePhase={this.changePhase}
            />
          </div>
        ) : (
          <TeamsContainer
            joinTeam={this.props.joinTeam}
            currentUser={this.props.currentUser}
          />
        )}
      </div>
    );
  }
}

export default EventShowPage;
