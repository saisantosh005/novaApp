import "./styles.css";
import HomeRoute from "./components/HomeRoute/HomeRoute";
import DetailsRoute from "./components/DetailsRoute/DetailsRoute";
import PaymentRoute from "./components/PaymentRoute/PaymentRoute/PaymentRoute";
import FormikPra from "./components/FormikPra/FormikPra";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NewPaymentRoute from "./components/PaymentRoute/PaymentRoute/NewPaymentRoute";import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import React from "react";
import { billsList } from "./components/Contants";

export const BillContext = React.createContext();
const App = () => {
  const localBillList = JSON.parse(localStorage.getItem("billList"));
  const [billListValues, setBillList] = useState(
    localBillList ? localBillList : billsList
  );

  const insertNewBill = (value) => {
    setBillList([...billListValues, value]);
  };

  const onDeleteBill = (id) => {
    const newBillList = billListValues.filter((bill) => bill.id !== id);
    setBillList(newBillList);
  };

  useEffect(() => {
    localStorage.setItem("billList", JSON.stringify(billListValues));
  }, [billListValues]);

  return (
    <Router>
      <Switch>
        <BillContext.Provider
          value={{
            billListValues: billListValues,
            insertNewBill,
            onDeleteBill
          }}
        >
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/details/:id" component={DetailsRoute} />
          <Route exact path="/payment/:id" component={PaymentRoute} />
          <Route exact path="/practice" component={FormikPra} />
        </BillContext.Provider>
      </Switch>
    </Router>
  );
};
export default App;
