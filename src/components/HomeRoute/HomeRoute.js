import { useEffect, useState } from "react";
import AddBill from "./AddBill/AddBill";
import BillCard from "./BillCard/BillCard";
import {
  BillListContainer,
  Heading,
  MainContainer,
  MainDiv
} from "./styledComponent";
const billsList = [
  {
    id: 123487,
    category: "Electricity",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  },
  {
    id: 2345987,
    category: "Mobile recharge",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  },
  {
    id: 3234987,
    category: "Subscription",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  }
];

const HomeRoute = () => {
  const [billListValues, setBillList] = useState(billsList);

  const insertNewBill = (value) => {
    setBillList([...billListValues, value]);
  };
  const onDeleteBill = (id) => {
    const newBillList = billListValues.filter((bill) => bill.id !== id);
    setBillList(newBillList);
  };
  useEffect(() => {
    localStorage.setItem("billList", JSON.stringify(billListValues));
  });

  return (
    <MainContainer>
      <MainDiv>
        <Heading>Your Bills</Heading>
        <BillListContainer>
          {billListValues.length !== 0 ? (
            billListValues.map((item) => (
              <BillCard details={item} onDeleteBill={onDeleteBill} />
            ))
          ) : (
            <p>No active bills</p>
          )}
        </BillListContainer>
      </MainDiv>
      <AddBill addbill={insertNewBill} />
    </MainContainer>
  );
};
export default HomeRoute;
