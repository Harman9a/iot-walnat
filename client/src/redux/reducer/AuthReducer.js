const istate = {
  jwt: "",
  islogin: false,
};

const AuthReducer = (state = istate, action) => {
  switch (action.type) {
    case "LOGIN": {
      state = {
        ...state,
        islogin: action.payload.status,
        jwt: action.payload.jwt,
      };
      return state;
    }
    case "LOGOUT": {
      state = {
        ...state,
        islogin: action.payload.status,
        jwt: action.payload.jwt,
      };
      return state;
    }
    default:
      return state;
  }
};

export default AuthReducer;
