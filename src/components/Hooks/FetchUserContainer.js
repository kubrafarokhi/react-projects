import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/userAsync/userActions";

const FetchUserContainer = ({ fetchUsers, userData }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <div>Loading</div>
  ) : userData.error ? (
    <div>{userData.error}</div>
  ) : (
    <div>
      {userData?.map((user) => {
        return <li>{user.name}</li>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUserContainer);
