import {
  firebase,
  googleAuthProvider,
  githubAuthProvider
} from "./../firebase/firebase";

export const login = uid => {
  return {
    type: "LOGIN",
    uid
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export const startLoginGithub = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .catch(e => {
        document.getElementById("error_area").classList.add("error-area");
        document.getElementById("error_area").innerHTML = e.message;
      });
  };
};

export const startLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .catch(e => {
        document.getElementById("error_area").classList.add("error-area");
        document.getElementById("error_area").innerHTML = e.message;
      });
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
