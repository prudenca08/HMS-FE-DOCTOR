import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import PatientsList from "./pages/patientsList/PatientsList";
import Patient from "./pages/patient/Patient";
import ManageOutpatient from "./pages/manageOutpatient/ManageOutpatient";
import Outpatient from "./pages/outpatient/Outpatient";
import FormLogin from "./pages/login/Form";
import PrivateRoute from "./components/PrivateRoute";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <FormLogin />
        </Route>
        <>
        <div className="containers">
          <NavbarTop />
            <Sidebar />
            <Switch>
              <PrivateRoute exact path="/">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/patients">
                <PatientsList />
              </PrivateRoute>
              <PrivateRoute path="/patient/:patientId">
                <Patient />
              </PrivateRoute>
              <PrivateRoute path="/outpatients">
                <ManageOutpatient />
              </PrivateRoute>
              <PrivateRoute
                path="/outpatient/:outpatientId"
                Component={Outpatient}
              ></PrivateRoute>
              <PrivateRoute path="/updatePassword">
                <UpdatePassword />
              </PrivateRoute>
            </Switch>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
