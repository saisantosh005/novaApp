import styled from "styled-components";

const DetailsMainContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailsCardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */
  border-radius: 20px;
  padding: 15px;
  background: white;
  min-width: 300px;
`;
const Heading = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-family: "Arial";
`;
const LabelName = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin: 0px;
`;
const Content = styled.span`
  margin-bottom: 10px;
  font-family: "Arial";
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div``;
const Button = styled.button`
  font-size: 15px;
  border-radius: 10px;
  background: #3333ff;
  color: white;
  border: none;
  padding: 8px 12px;
`;
export {
  DetailsMainContainer,
  DetailsCardContainer,
  Heading,
  LabelName,
  Content,
  Details,
  ButtonContainer,
  Button
};
