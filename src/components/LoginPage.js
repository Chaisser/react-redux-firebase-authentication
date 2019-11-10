import React from "react";
import { connect } from "react-redux";
import { startLogin, startLoginGithub } from "../actions/auth";

export const LoginPage = ({ startLogin, startLoginGithub }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Firebase Authentication</h1>
        <div id="error_area"></div>
        <p>with google & github example</p>
        <div className="button-container">
          <button className="button" onClick={startLogin}>
            Login with Google
          </button>
          <button className="button" onClick={startLoginGithub}>
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLoginGithub: () => dispatch(startLoginGithub())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
