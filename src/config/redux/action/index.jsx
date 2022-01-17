import axios from "axios";
import { GetConstant } from "../../constants";
axios.defaults.baseURL = GetConstant("API_URL");
axios.defaults.headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

//Change global redux value
export const ChangeGlobalRedux = (data) => {
  return (dispatch) => {
    return dispatch({ type: data.type, value: data.value });
  };
};

export const actionLogin = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/doctor/login", data, {})
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatch({ type: "CHANGE_LOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: data });
        localStorage.setItem("user", JSON.stringify(data));
        resolve(res.status);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "CHANGE_LOGIN", value: false });
        dispatch({ type: "CHANGE_USER", value: null });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        reject(err.response);
      });
  });
};

export const actionGetAllPatients = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/patient", {})
      .then((result) => {
        let data = [...result.data.data];
        data.forEach((item) => {
          item.id = item["id:"];
        });
        console.log(data);
        dispatch({ type: "CHANGE_PATIENT", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_PATIENT", value: [] });
        reject(err.response);
      });
  });
};
