import styled from "styled-components";
const MainContainer = styled.form`
  background: white;
  max-height: 500px;
  border-radius: 10px;
  padding: 15px;
`;
const Heading = styled.h1`
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
`;
const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  font-size: 20px;
`;
const Label = styled.label`
  font-size: 20px;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  font-size: 20px;
  /* flex-grow: 1; */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
`;
const Button = styled.button`
  flex-grow: 1;
  font-size: 18px;
  border-radius: 10px;
  background: #3333ff;
  color: white;
  border: none;
  padding: 15px 12px;
`;
export {
  MainContainer,
  Heading,
  InputContainer,
  Select,
  Label,
  Input,
  ButtonContainer,
  Button
};
