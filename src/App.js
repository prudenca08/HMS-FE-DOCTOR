import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import PatientsList from "./pages/patientsList/PatientsList";
import Patient from "./pages/patient/Patient";


function App() {
  return (
    <Router>
      <NavbarTop />
      <div className="containers">
        <Sidebar />
        <Switch>
          <Route exact path ="/">
            <Dashboard />
          </Route>
          <Route path ="/patients">
            <PatientsList />
          </Route>
          <Route path ="/patient/:patientId">
            <Patient />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
