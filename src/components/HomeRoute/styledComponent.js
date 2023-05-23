import styled from "styled-components";

const MainDiv = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;
const BillCard = styled.div`
  min-width: 100px;
  height: 40px;
  background: white;
  border-radius: 10px;
  margin: 10px;
`;

export { MainDiv, Heading, BillCard };
