import styled from "styled-components";

const BillCardMainContainer = styled.div`
  max-width: 300px;
  max-height: 400px;
  background: white;
  border-radius: 10px;
  margin: 10px;
`;

const Heading = styled.h1``;
const Amount = styled.p`
  font-weight: bold;
  font-size: 25px;
`;
const ReferenceNumber = styled.p``;

export { BillCardMainContainer, Heading, ReferenceNumber, Amount };
