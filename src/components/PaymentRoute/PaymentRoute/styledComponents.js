import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  min-height: 100vh;
`;
const PaymentContainer = styled.div`
  background: white;
  min-width: 300px;
  min-height: 300px;
  border-radius: 10px;
  padding: 20px;
`;
const Heading = styled.h1`
  text-align: center;
`;
const BillDetailSection = styled.div`
  border-bottom: 2px dashed grey;
  margin-bottom: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpecialText = styled.span`
  font-weight: bold;
`;

const PaymentDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;
const Label = styled.label``;
const Input = styled.input`
  border-radius: 5px;
  padding: 5px;
`;
const Button = styled.button`
  border-radius: 10px;
  border: none;
  background: blue;
  color: white;
  padding: 10px 20px;
  margin: 3px;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 15px;
`;
export {
  MainContainer,
  PaymentContainer,
  BillDetailSection,
  PaymentDetailsSection,
  TextContainer,
  SpecialText,
  InputContainer,
  Label,
  Input,
  Button,
  Heading,
  ErrorText
};
