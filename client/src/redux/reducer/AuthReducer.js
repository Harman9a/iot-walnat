const istate = {
  name: "",
  email: "",
  role: "",
  jwt: "",
  islogin: false,
};

const AuthReducer = (state = istate, action) => {
  switch (action.type) {
    case "LOGIN": {
      state = {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        islogin: action.payload.status,
        jwt: action.payload.jwt,
      };
      return state;
    }
    case "LOGOUT": {
      state = {
        ...state,
        name: "",
        email: "",
        role: "",
        islogin: false,
        jwt: "",
      };
      return state;
    }
    default:
      return state;
  }
};

export default AuthReducer;
