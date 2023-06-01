import "./styles.css";
import HomeRoute from "./components/HomeRoute/HomeRoute";
import DetailsRoute from "./components/DetailsRoute/DetailsRoute";
import PaymentRoute from "./components/PaymentRoute/PaymentRoute/PaymentRoute";
import FormikPra from "./components/FormikPra/FormikPra";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NewPaymentRoute from "./components/PaymentRoute/PaymentRoute/NewPaymentRoute";import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import React from "react";
const billsList = [
  {
    id: 123487,
    referenceNumber: 143273,
    category: "Electricity",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  },
  {
    id: 2345987,
    referenceNumber: 143273,
    category: "Mobile recharge",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  },
  {
    id: 3234987,
    referenceNumber: 143273,
    category: "Subscription",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  }
];

export const BillContext = React.createContext();
const App = () => {
  const data = 0;
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
