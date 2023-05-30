import styled from "styled-components";

const DetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  min-height: 100vh;
`;
const DetailsCardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */
  background: white;
  min-width: 300px;
  padding: 15px;
  border-radius: 20px;
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
  font-family: "Arial";
  font-size: 18px;
  margin-bottom: 10px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10px;
  margin-top: 20px;
`;
const Button = styled.button`
  font-size: 15px;
  border-radius: 10px;
  background: #3333ff;
  color: white;
  border: none;
  padding: 8px 30px;
  margin-left: 20px;
`;
const SpecialText = styled.p`
  display: inline;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;
export {
  DetailsMainContainer,
  DetailsCardContainer,
  Heading,
  LabelName,
  Content,
  Details,
  ButtonContainer,
  SpecialText,
  Button
};
