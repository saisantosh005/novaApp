import "./styles.css";
import HomeRoute from "./components/HomeRoute/HomeRoute";
import DetailsRoute from "./components/DetailsRoute/DetailsRoute";
import PaymentRoute from "./components/PaymentRoute/PaymentRoute/PaymentRoute";
import FormikPra from "./components/FormikPra/FormikPra";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/details/:id" component={DetailsRoute} />
      <Route exact path="/payment/:id" component={PaymentRoute} />
      <Route exact path="/practice" component={FormikPra} />
    </Switch>
  </Router>
);
export default App;
