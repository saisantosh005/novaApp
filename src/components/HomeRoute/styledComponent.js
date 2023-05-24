import styled from "styled-components";

const MainContainer = styled.div`
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;
const MainDiv = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const BillListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export { MainContainer, MainDiv, Heading, BillListContainer };
