import styled from "styled-components";
const MainContainer = styled.form`
  background: white;
  border-radius: 10px;
  max-height: 500px;
  padding: 15px;
`;
const Heading = styled.h1`
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 500px; */
`;
const Select = styled.select`
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`;
const Label = styled.label`
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const Input = styled.input`
  font-size: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 5px;
  }
  /* flex-grow: 1; */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`;
const Button = styled.button`
  flex-grow: 1;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  background: #3333ff;
  padding: 15px 12px;
  border: none;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 15px;
`;
export {
  MainContainer,
  Heading,
  InputContainer,
  Select,
  Label,
  Input,
  ButtonContainer,
  Button,
  ErrorText
};
