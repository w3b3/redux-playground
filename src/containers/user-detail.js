import React, { Component } from "react";
import { connect } from "react-redux";

// TODO: THIS IS ALREADY DEFINED IN SOMEWHERE ELSE
class UserDetail extends Component {
  /*componentDidMount() {
    console.info("props", this.props);
  }
  componentDidUpdate() {
    console.info("props", this.props);
  }*/

  render() {
    /*SECONDARY APPROACH TO SOLVE THE ISSUE THAT INITIALLY THE COMPONENT HAS NO STATE*/
    /*if (!this.props.user) {
      return (
        <h3>
          <span>Active user: </span>
          <span style={{ color: "gray" }}>none</span>
        </h3>
      );
    }*/
    return (
      <h3>
        <span>Active user: </span>
        {/*REVISED APPROACH TO HANDLE INITIAL EMPTY STATE*/}
        {this.props.user && (
          <span style={{ color: "blue" }}>{this.props.user.name}</span>
        )}
        {!this.props.user && <span style={{ color: "gray" }}>none</span>}

        {/*ORIGINAL APPROACH TO SOLVE THE ISSUE THAT INITIALLY THE COMPONENT HAS NO STATE*/}
        {/*<span style={{ color: "blue" }}>➡{this.props.user ? this.props.user.name : 'nops'}⬅</span>*/}
      </h3>
    );
  }
}

// First is whatever internal props name
// Second is state object
function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
