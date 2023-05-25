import { useState, useEffect } from "react";
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
const frequency = [1, 2, 3, 4, 5];
const initialState = {
  id: "",
  category: "",
  amount: "",
  frequency: 0,
  phoneNumber: "",
  email: ""
};
const AddBill = (props) => {
  const [details, setdetails] = useState(initialState);
  const onChangeCategory = (event) => {
    setdetails({ ...details, category: event.target.value });
  };

  const onChangeReferenceNumber = (event) => {
    setdetails({ ...details, id: event.target.value });
  };

  const onChangePhoneNumber = (event) => {
    setdetails({ ...details, phoneNumber: event.target.value });
  };
  const onChangeAmount = (event) => {
    setdetails({ ...details, amount: event.target.value });
  };
  const onChangeEmail = (event) => {
    setdetails({ ...details, email: event.target.value });
  };
  const onChangeFrequency = (event) => {
    setdetails({ ...details, frequency: event.target.value });
  };

  useEffect(() => {});
  const onSubmitForm = (e) => {
    e.preventDefault();
    props.addbill(details);
    setdetails(initialState);
  };
  return (
    <MainContainer onSubmit={onSubmitForm}>
      <Heading>New Bill</Heading>
      <InputContainer>
        <Label>Category</Label>
        <Select onChange={onChangeCategory}>
          {category.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer>
        <Label>Reference Number</Label>
        <Input
          placeholder="ReferenceNumber"
          type="number"
          value={details.id}
          onChange={onChangeReferenceNumber}
        />
      </InputContainer>
      <InputContainer>
        <Label>phone Number</Label>
        <Input
          placeholder="PhoneNumber"
          type="number"
          value={details.phoneNumber}
          onChange={onChangePhoneNumber}
        />
      </InputContainer>
      <InputContainer>
        <Label>Amount</Label>
        <Input
          placeholder="Amount"
          type="text"
          value={details.amount}
          onChange={onChangeAmount}
        />
      </InputContainer>
      <InputContainer>
        <Label>Email</Label>
        <Input
          placeholder="Email"
          type="text"
          value={details.email}
          onChange={onChangeEmail}
        />
      </InputContainer>
      <InputContainer>
        <Label>Frequency</Label>
        <Select onChange={onChangeFrequency}>
          {frequency.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>
      </InputContainer>

      <ButtonContainer>
        <Button>Add Bill</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default AddBill;
