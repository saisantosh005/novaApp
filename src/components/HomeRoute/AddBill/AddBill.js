import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Label,
  Input,
  InputContainer,
  Select,
  MainContainer,
  Heading,
  Button,
  ButtonContainer,
  ErrorText
} from "./styledComponent";
const category = ["Electricity", "Recharge", "credit Card"];
const frequency = [1, 2, 3, 4, 5];
const initialState = {
  id: "",
  referenceNumber: "",
  category: category[0],
  amount: "",
  frequency: 0,
  phoneNumber: "",
  email: ""
};
const AddBill = (props) => {
  const [details, setdetails] = useState({ ...initialState, id: uuidv4() });
  const [showErrorMsg, setErrMsgStatus] = useState(false);
  const onChangeCategory = (event) => {
    setdetails({ ...details, category: event.target.value });
  };

  const onChangeReferenceNumber = (event) => {
    setdetails({ ...details, referenceNumber: event.target.value });
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
    const { category, referenceNumber, amount, phoneNumber } = details;
    if (referenceNumber !== "" || amount !== "" || phoneNumber !== "") {
      setErrMsgStatus(false);
      props.addbill({ ...details, id: uuidv4() });
      setdetails(initialState);
    } else {
      setErrMsgStatus(true);
    }
  };
  return (
    <MainContainer onSubmit={onSubmitForm}>
      <Heading>New Bill</Heading>
      <InputContainer>
        <Label>Category *</Label>
        <Select onChange={onChangeCategory}>
          {category.map((item) => (
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer>
        <Label>Reference Number *</Label>
        <Input
          placeholder="ReferenceNumber"
          type="number"
          value={details.referenceNumber}
          onChange={onChangeReferenceNumber}
        />
      </InputContainer>
      <InputContainer>
        <Label>phone Number *</Label>
        <Input
          placeholder="PhoneNumber"
          type="number"
          value={details.phoneNumber}
          onChange={onChangePhoneNumber}
        />
      </InputContainer>
      <InputContainer>
        <Label>Amount *</Label>
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
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </InputContainer>

      <ButtonContainer>
        <Button>Add Bill</Button>
        {showErrorMsg && <ErrorText>* Please fill Mandatory fields</ErrorText>}
      </ButtonContainer>
    </MainContainer>
  );
};

export default AddBill;
