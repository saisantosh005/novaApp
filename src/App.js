import "./styles.css";
// import LoginForm from "./components/LoginRoute/LoginForm";
import HomeRoute from "./components/HomeRoute/HomeRoute";
import DetailsRoute from "./components/DetailsRoute/DetailsRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaymentRoute from "./components/PaymentRoute/PaymentRoute/PaymentRoute";
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/details/:id" component={DetailsRoute} />
      <Route exact path="/payment/:id" component={PaymentRoute} />
    </Switch>
  </Router>
);
export default App;
