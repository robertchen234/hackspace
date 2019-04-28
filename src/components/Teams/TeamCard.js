// import React, { Component } from "react";

// class TeamCard extends Component {
//   state = {
//     isClicked: false,
//     usersLength: 0
//   };

//   componentDidMount() {
//     this.setState({ usersLength: this.props.team.users.length });
//   }

//   handleClick = () => {
//     const { team } = this.props;
//     let { usersLength } = this.state;

//     if (!this.state.isClicked) {
//       this.props.joinTeam(team.id);
//       this.setState({ isClicked: true, usersLength: (usersLength += 1) });
//     }
//   };

//   render() {
//     const { team } = this.props;
//     return (
//       <div>
//         <strong>{team.pitch_title}</strong>
//         <i>{team.pitch_topic}</i>
//         <h5> by {team.full_name}</h5>

//         <p>Problem: {team.pitch_problem}</p>
//         <p>Solution: {team.pitch_solution}</p>
//         <i>Audience: {team.pitch_audience}</i>

//         {this.props.currentUser.team_id === team.id ? (
//           <p>This is your team</p>
//         ) : this.state.usersLength < 8 ? (
//           <button onClick={this.handleClick}>Join Team</button>
//         ) : (
//           <p>Team is full</p>
//         )}

//         {this.state.usersLength < 8 ? (
//           <p>{this.state.usersLength} / 8</p>
//         ) : (
//           8 / 8
//         )}
//         <br />
//       </div>
//     );
//   }
// }

// export default TeamCard;

import React, { Component } from "react";
class TeamCard extends Component {
  state = {
    isClicked: false,
    usersLength: 0
  };

  componentDidMount() {
    this.setState({ usersLength: this.props.team.users.length });
  }

  handleClick = () => {
    const { team } = this.props;
    let { usersLength } = this.state;

    if (!this.state.isClicked) {
      this.props.joinTeam(team.id);
      this.setState({ isClicked: true, usersLength: (usersLength += 1) });
    }
  };

  render() {
    const { team } = this.props;
    console.log(team);
    return (
      <div className="team-container">
        <div className="team-card" onClick={this.handleClick}>
          <h3 className="team-title">{team.pitch_title}</h3>
          <h5 className="team-name"> by {team.team_name}</h5>
          <span className="team-members">{this.state.usersLength}/8</span>
          <button onClick={this.handleClick}>Join Team</button>
        </div>
        <br />
      </div>
    );
  }
}
export default TeamCard;
