import AddBill from "./AddBill/AddBill";
import BillCard from "./BillCard/BillCard";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  BillListContainer,
  Heading,
  MainContainer,
  MainDiv
} from "./styledComponent";
import NewAddBill from "./AddBill/NewAddBill";
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

const HomeRoute = () => {
  const localBillList = JSON.parse(localStorage.getItem("billList"));
  const localBillListPaid = JSON.parse(localStorage.getItem("paidBillList"));
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
    <MainContainer>
      <MainDiv>
        <Heading>Your Bills</Heading>
        <BillListContainer>
          {billListValues.length !== 0 ? (
            billListValues.map((item) => (
              <BillCard
                key={uuidv4()}
                details={item}
                onDeleteBill={onDeleteBill}
              />
            ))
          ) : (
            <p>No active bills</p>
          )}
        </BillListContainer>
      </MainDiv>
      <NewAddBill addbill={insertNewBill} />
      {/* <AddBill addbill={insertNewBill} /> */}
    </MainContainer>
  );
};
export default HomeRoute;
