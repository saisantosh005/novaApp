import {
  MainContainer,
  SpecialText,
  PaymentContainer,
  BillDetailSection,
  PaymentDetailsSection,
  Button,
  InputContainer,
  Label,
  Input,
  TextContainer,
  Heading
} from "./styledComponents";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";

const PaymentRoute = (props) => {
  const [accountDetails, setAccount] = useState({ accountNumber: "", cvv: "" });
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const storedDetails = JSON.parse(localStorage.getItem("billList"));
  const details = storedDetails.filter((detail) => detail.id == id);
  const { category, amount, email, frequency, phoneNumber } = details[0];

  const onChangeAccountNumber = (e) => {
    setAccount({ ...accountDetails, accountNumber: e.target.value });
  };
  const onChangeCvv = (e) => {
    setAccount({ ...accountDetails, cvv: e.target.value });
  };
  const onPaymentDone = () => {
    const { history } = props;
    alert("You payment is success");
    history.replace(`/details/${id}`);
  };
  return (
    <MainContainer>
      <Heading>Payment section</Heading>
      <PaymentContainer>
        <BillDetailSection>
          <TextContainer>
            <p>Paying to</p>
            <SpecialText>{category}</SpecialText>
          </TextContainer>
          <TextContainer>
            <p>PhoneNumber</p>
            <SpecialText>{phoneNumber}</SpecialText>
          </TextContainer>
          <TextContainer>
            <p>Reference Number</p>
            <SpecialText>{id}</SpecialText>
          </TextContainer>
          <TextContainer>
            <p>Amount</p>
            <SpecialText>{amount}</SpecialText>
          </TextContainer>
        </BillDetailSection>
        <PaymentDetailsSection>
          <InputContainer>
            <Label>AccountNumber</Label>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <Label>CVV</Label>
            <Input
              type="text"
              value={accountDetails.accountNumber}
              onChange={onChangeAccountNumber}
            />
          </InputContainer>
          <InputContainer>
            <Label></Label>
            <Input
              type="text"
              value={accountDetails.cvv}
              onChange={onChangeCvv}
            />
          </InputContainer>
          <Button onClick={onPaymentDone}>Pay</Button>
          <Link to={`/details/${id}`}>back</Link>
        </PaymentDetailsSection>
      </PaymentContainer>
    </MainContainer>
  );
};
export default withRouter(PaymentRoute);
