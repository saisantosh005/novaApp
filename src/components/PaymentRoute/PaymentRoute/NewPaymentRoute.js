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
  Heading,
  ErrorText
} from "./styledComponents";
import { withRouter } from "react-router-dom";
import { useState } from "react";

const NewPaymentRoute = (props) => {
  const [accountDetails, setAccount] = useState({ accountNumber: "", cvv: "" });
  const [showErrorMsg, setErrMsgStatus] = useState(false);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const storedDetails = JSON.parse(localStorage.getItem("billList"));
  const details = storedDetails.filter((detail) => detail.id == id);
  const {
    category,
    referenceNumber,
    amount,
    email,
    frequency,
    phoneNumber
  } = details[0];

  const onChangeAccountNumber = (e) => {
    setAccount({ ...accountDetails, accountNumber: e.target.value });
  };
  const onChangeCvv = (e) => {
    setAccount({ ...accountDetails, cvv: e.target.value });
  };
  const onPaymentDone = () => {
    const { history } = props;
    const { accountNumber, cvv } = accountDetails;
    if (accountNumber !== "" || cvv !== "") {
      setErrMsgStatus(!showErrorMsg);
      const billListData = JSON.parse(localStorage.getItem("billList"));
      const paidBillList = localStorage.getItem("paidBillList");
      console.log(paidBillList == null, "paidBillLIst");
      // localStorage.getItem("paidBillList") == null
      //   ? []
      //   : JSON.stringify(localStorage.getItem("paidBillList"));
      const paidItem = billListData.filter((item) => item.id != id)[0];
      // localStorage.setItem(
      //   "billList",
      //   JSON.stringify(billListData.filter((item) => item.id != id))
      // );
      if (paidBillList != null && paidBillList.length > 0) {
        const newPaidBillList = [...paidBillList, paidItem];
        console.log(newPaidBillList, "asdjf");
      } else {
        localStorage.setItem("paidBillList", JSON.stringify([paidItem]));
        console.log(localStorage.getItem("paidBillList"), "hel");
      }

      alert("You payment is success");
      history.replace(`/`);
    } else {
      setErrMsgStatus(true);
    }
  };
  const onGoBack = () => {
    const { history } = props;
    history.goBack();
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
            <SpecialText>{referenceNumber}</SpecialText>
          </TextContainer>
          <TextContainer>
            <p>Amount</p>
            <SpecialText>{amount}</SpecialText>
          </TextContainer>
        </BillDetailSection>
        <PaymentDetailsSection>
          <InputContainer>
            <Label>AccountNumber</Label>
            <Input
              type="text"
              value={accountDetails.accountNumber}
              onChange={onChangeAccountNumber}
              placeholder="Account Number"
            />
          </InputContainer>
          <InputContainer>
            <Label>CVV</Label>
            <Input
              type="text"
              value={accountDetails.cvv}
              onChange={onChangeCvv}
              placeholder="CVV"
            />
          </InputContainer>
          <Button onClick={onPaymentDone}>Pay</Button>
          {showErrorMsg && (
            <ErrorText>* Account details are Mandatory</ErrorText>
          )}
        </PaymentDetailsSection>
      </PaymentContainer>
      <button onClick={onGoBack}>back</button>
    </MainContainer>
  );
};
export default withRouter(NewPaymentRoute);
