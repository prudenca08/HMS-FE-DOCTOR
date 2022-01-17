import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import PatientsList from "./pages/patientsList/PatientsList";
import Patient from "./pages/patient/Patient";
import Uppro from "./pages/updateProfile/Uppro";
import ManageOutpatient from "./pages/manageOutpatient/ManageOutpatient";
import Outpatient from "./pages/outpatient/Outpatient";
import FormLogin from "./pages/login/Form";
import RecipeList from "./pages/recipeList/RecipeList";
import Recipe from "./pages/recipe/Recipe";
import NewRecipe from "./pages/newRecipe/NewRecipe";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <FormLogin />
        </Route>
        <>
          <NavbarTop />
          <div className="containers">
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
              <PrivateRoute path="/update-profile">
                <Uppro />
              </PrivateRoute>
              <PrivateRoute path="/outpatients">
                <ManageOutpatient />
              </PrivateRoute>
              <PrivateRoute path="/outpatient/:outpatientId">
                <Outpatient />
              </PrivateRoute>
              <PrivateRoute path="/recipes">
                <RecipeList />
              </PrivateRoute>
              <PrivateRoute path="/recipe/:recipeId">
                <Recipe />
              </PrivateRoute>
              <PrivateRoute path="/newRecipe">
                <NewRecipe />
              </PrivateRoute>
            </Switch>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
