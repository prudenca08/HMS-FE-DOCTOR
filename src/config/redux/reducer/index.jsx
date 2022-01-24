const initialState = {
  isLogin: localStorage.getItem("user") ? true : false,
  isLoading: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
    patient : [],
    outpatient: [],
    doctor : [],
    patsche :[],
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

  },
  {
    //Doctor
    type: "CHANGE_DOCTOR",
    name: "doctor",
    action: null,
  },
  {
    //patient schedule
    type: "CHANGE_PATSCHE",
    name: "patsche",
    action: null,
  },
 
  //Outpatient
  {
    type: "CHANGE_OUTPATIENT",
    name: "outpatient",
    action: null,
  },
  {
    type: "UPDATE_OUTPATIENT",
    name: "outpatient",
    action: (state, actions) => {
      let tmp = [...state.outpatient];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value.id;
      });
      tmp[findIndex] = actions.value;
      return {
        ...state,
        outpatient: tmp,
      };
    },
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
