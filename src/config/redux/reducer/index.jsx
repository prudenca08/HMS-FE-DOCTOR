const initialState = {
  isLogin: localStorage.getItem("user") ? true : false,
  isLoading: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
    patient : [],
};

const listAction = [
  //Change Login
  {
    type: "CHANGE_LOGIN",
    name: "isLogin",
    action: null,
  },
  //Change user
  {
      type : "CHANGE_USER",
      name : "user",
      action : null,
  },
  //Change Loading
  {
      type : "CHANGE_LOADING",
      name : "isLoading",
      action: (state, actions)=>{
          state.isLoading = actions.value;
          return{
              ...state,
          };
      },
  },
  //Change Patient
  {
    type : "CHANGE_PATIENT",
    name : "patient",
    action : null,

  }
];

const reducer = (state = initialState, actions) => {
  let found = listAction.find((item) => {
    return item.type === actions.type;
  });
  if (found !== null && found !== undefined) {
    if (found.action !== null) {
      return {
        ...found.action(state, actions),
      };
    }
    state[found.name] = actions.value;
    return {
      ...state,
    };
  }
  return state;
};

export default reducer;
