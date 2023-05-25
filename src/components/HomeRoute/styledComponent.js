import styled from "styled-components";

const MainContainer = styled.div`
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  padding: 10px;
`;
const MainDiv = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const BillListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;
const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export { MainContainer, MainDiv, Heading, BillListContainer };
