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
        dispatch({ type: "CHANGE_USER", value: res.data.data });
        localStorage.setItem("user", JSON.stringify(res.data.data));
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

export const actionGetAllDoctors = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/doctor", {})
      .then((result) => {
        let data = [...result.data.data];
        data.forEach((item) => {
          item.id = item["id:"];
          item.day = item.doctor_session.day;
          item.time = item.doctor_session.time;
        });
        console.log(data);
        dispatch({ type: "CHANGE_DOCTOR", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_DOCTOR", value: [] });
        reject(err.response);
      });
  });
};

export const actionGetAllPatientSchedule = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/patsche", {})
      .then((result) => {
        let data = [...result.data.data];
        data.forEach((item) => {
          item.id = item["id:"];
        });
        console.log(data);
        dispatch({ type: "CHANGE_PATSCHE", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_PATSCHE", value: [] });
        reject(err.response);
      });
  });
};

export const actionGetAllOutpatients = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/patientses", {})
      .then((result) => {
        let data = [...result.data.data];
        
        let tmp = data.filter((i)=>(i.doctorid === id));
        tmp.forEach((item) => {
          item.patient = item.patient;
          item.patientName = item.patient.name;
          item.patsche = item.patsche;
          item.nik = item.patient.nik;
          item.day = item.patsche.day;
          item.time = item.patsche.time;
          item.nip = item.doctor.nip;
          item.room = item.doctor.room;
          item.doctor_name = item.doctor.name;
          item.doctor = item.doctor;
        });
        console.log(data);
        dispatch({ type: "CHANGE_OUTPATIENT", value: tmp });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_OUTPATIENT", value: [] });
        reject(err.response);
      });
  });
};

export const actionUpdateOutpatient = (data) => (dispatch) => {
  let token = localStorage.getItem("token");
  let nData = { ...data };
  nData.doctorid = Number(nData.doctorid);
  nData.patientid = Number(nData.patientid);
  nData.patientscheduleid = Number(nData.patientscheduleid);
  return new Promise((resolve, reject) => {
    axios
      .put("/doctor/update-patientses/" + data.id, nData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data);
        let _data = result.data.data;
        _data.patient = data.patient;
        _data.nik = data.patient.nik;
        _data.doctor = data.doctor;
        _data.doctor_name = data.doctor.name;
        _data.nip = data.doctor.nip;
        _data.room = data.doctor.room;
        _data.patientName = data.patient.name;
        _data.patsche = data.schedule;
        _data.day = data.schedule.day;
        _data.time = data.schedule.time;

        dispatch({ type: "UPDATE_OUTPATIENT", value: _data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
};

export const actionChangePassword = (data)=> (dispatch)=>{
  let token = localStorage.getItem("token");
  return new Promise((resolve,reject)=>{
    axios
    .put("/doctor/change-password/"+ data.id,data,{
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
    .then((result)=>{
      resolve(result.status);
    })
    .catch((err)=>{
      reject(err.response);
    })
  });
};




