import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import PatientsList from "./pages/patientsList/PatientsList";
import Patient from "./pages/patient/Patient";
<<<<<<< Updated upstream
import Uppro from "./pages/updateProfile/Uppro";
=======
import ManageOutpatient from "./pages/manageOutpatient/ManageOutpatient";
import Outpatient from "./pages/outpatient/Outpatient";
import FormLogin from "./pages/login/Form";
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <NavbarTop />
      <div className="containers">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/patients">
            <PatientsList />
          </Route>
          <Route path="/patient/:patientId">
            <Patient />
          </Route>
          <Route path="/update-profile">
            <Uppro />
          </Route>
        </Switch>
      </div>
=======
      <Switch>
        <Route exact path="/login">
          <FormLogin />
        </Route>
        <>
          <NavbarTop />
          <div className="containers">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/patients">
                <PatientsList />
              </Route>
              <Route path="/patient/:patientId">
                <Patient />
              </Route>
              <Route path="/outpatients">
                <ManageOutpatient />
              </Route>
              <Route path="/outpatient/:outpatientId">
                <Outpatient />
              </Route>
            </Switch>
          </div>
        </>
      </Switch>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
