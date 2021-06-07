import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/layout/nav";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import PageNotFound from "./components/pages/pageNotFound";
import Finance from "./components/finance";
import AddFinance from "./components/addFinance";
import FinanceDetails from "./components/financeDetails";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/finance/addFinance" component={AddFinance} />
          <Route path="/finance/get/:financeId" component={FinanceDetails} />
          <Route
            path="/finance/updateFinance/:financeId"
            component={FinanceDetails}
          />
          <Route path="/finance" component={Finance} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
