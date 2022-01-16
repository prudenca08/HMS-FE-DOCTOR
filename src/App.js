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
              <Route path="/outpatients">
                <ManageOutpatient />
              </Route>
              <Route path="/outpatient/:outpatientId">
                <Outpatient />
              </Route>
              <Route path="/recipes">
                <RecipeList />
              </Route>
              <Route path="/recipe/:recipeId">
                <Recipe />
              </Route>
              <Route path="/newRecipe">
                <NewRecipe />
              </Route>
            </Switch>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
