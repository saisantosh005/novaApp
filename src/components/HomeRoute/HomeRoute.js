import AddBill from "./AddBill/AddBill";
import BillCard from "./BillCard/BillCard";
import { useEffect, useState, useContext } from "react";
import NewAddBill from "./AddBill/NewAddBill";
import { BillContext } from "../../App";
import { v4 as uuidv4 } from "uuid";
import {
  BillListContainer,
  Heading,
  MainContainer,
  MainDiv,
  BillContainer
} from "./styledComponent";

const HomeRoute = () => {
  const contextData = useContext(BillContext);
  const pendingList = contextData.billListValues.filter(
    (item) => item.paymentStatus === false
  );
  const paidList = contextData.billListValues.filter(
    (item) => item.paymentStatus === true
  );
  return (
    <MainContainer>
      <MainDiv>
        <BillContainer>
          <Heading>Your Bills</Heading>
          <BillListContainer>
            {pendingList.length !== 0 ? (
              pendingList.map((item) => (
                <BillCard
                  key={uuidv4()}
                  details={item}
                  onDeleteBill={contextData.onDeleteBill}
                />
              ))
            ) : (
              <p>No active bills</p>
            )}
          </BillListContainer>
        </BillContainer>
        <BillContainer>
          <Heading>Paid Bills</Heading>
          <BillListContainer>
            {paidList.length !== 0 ? (
              paidList.map((item) => (
                <BillCard
                  key={uuidv4()}
                  details={item}
                  onDeleteBill={contextData.onDeleteBill}
                />
              ))
            ) : (
              <p>No active bills</p>
            )}
          </BillListContainer>
        </BillContainer>
      </MainDiv>

      <NewAddBill addbill={contextData.insertNewBill} />
      {/* <AddBill addbill={insertNewBill} /> */}
    </MainContainer>
  );
};
export default HomeRoute;
