import styled from "styled-components";

const BillCardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 300px;
  max-height: 400px;
  background: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

const Heading = styled.h1`
  font-size: 25px;
  margin: 0px;
`;
const Amount = styled.p`
  align-self: end;
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
`;
const LinkAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
const ReferenceNumber = styled.p``;

export {
  BillCardMainContainer,
  Heading,
  ReferenceNumber,
  LinkAndIconContainer,
  Amount
};
