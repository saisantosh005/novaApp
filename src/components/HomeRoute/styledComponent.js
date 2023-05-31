import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f0f0f0;
  min-height: 100vh;
  padding: 10px;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #f0f0f0;
  @media (max-width: 600px) {
    order: 2;
  }
`;
const BillListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 20px;
`;

export { MainContainer, MainDiv, Heading, BillListContainer };
