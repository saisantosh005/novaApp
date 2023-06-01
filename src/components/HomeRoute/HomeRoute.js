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
  MainDiv
} from "./styledComponent";

const HomeRoute = () => {
  const contextData = useContext(BillContext);
  return (
    <MainContainer>
      <MainDiv>
        <Heading>Your Bills</Heading>
        <BillListContainer>
          {contextData.billListValues.length !== 0 ? (
            contextData.billListValues.map((item) => (
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
      </MainDiv>

      <NewAddBill addbill={contextData.insertNewBill} />
      {/* <AddBill addbill={insertNewBill} /> */}
    </MainContainer>
  );
};
export default HomeRoute;
