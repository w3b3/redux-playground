import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions";

const LocalList = props => {
  /*console.info('[Functional] LocalList', props);*/
  return props.users.map(user => (
    <li key={user.id} onClick={() => props.selectUser(user)}>
      {user.name}
    </li>
  ));
};

// TODO: THIS IS ALREADY DEFINED IN SOMEWHERE ELSE
class UserList extends Component {
  /*componentDidMount() {
    console.info("[Class] UserList", this.props);
  }*/

  render() {
    return (
      <ol>
        {/*This local/dump component must inherit the props of the parent(who has state)*/}
        <LocalList {...this.props} />
      </ol>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectUser: selectUser
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
