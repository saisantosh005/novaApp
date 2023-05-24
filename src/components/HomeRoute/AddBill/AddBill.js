import { useState } from "react";
import {
  Label,
  Input,
  InputContainer,
  Select,
  MainContainer,
  Heading,
  Button,
  ButtonContainer
} from "./styledComponent";
const category = ["Electricity", "Recharge", "credit Card"];
const AddBill = () => {
  const [details, setdetails] = useState({});
  return (
    <MainContainer>
      <Heading>New Biil</Heading>
      <InputContainer>
        <Label>Name</Label>
        <Select>
          {category.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer>
        <Label>Reference Number</Label>
        <Input type="number" value={""} />
      </InputContainer>
      <InputContainer>
        <Label>Mode</Label>
        <Input type="text" value={""} />
      </InputContainer>
      <InputContainer>
        <Label>Amount</Label>
        <Input type="text" value={""} />
      </InputContainer>
      <ButtonContainer>
        <Button>Add Bill</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default AddBill;
