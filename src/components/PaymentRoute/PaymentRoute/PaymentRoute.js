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
  TextContainer
} from "./styledComponents";

const PaymentRoute = () => {
  return (
    <MainContainer>
      <PaymentContainer>
        <BillDetailSection>
          <TextContainer>
            <p>Paying to</p>
            <SpecialText>Santosh</SpecialText>
          </TextContainer>
          <TextContainer>
            <p>Paying to</p>
            <SpecialText>Santosh</SpecialText>
          </TextContainer>{" "}
          <TextContainer>
            <p>Paying to</p>
            <SpecialText>Santosh</SpecialText>
          </TextContainer>{" "}
          <TextContainer>
            <p>Paying to</p>
            <SpecialText>Santosh</SpecialText>
          </TextContainer>
        </BillDetailSection>
        <PaymentDetailsSection>
          <InputContainer>
            <Label>AccountNumber</Label>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <Label>CVV</Label>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <Label></Label>
            <Input type="text" />
          </InputContainer>
          <Button>Pay</Button>
        </PaymentDetailsSection>
      </PaymentContainer>
    </MainContainer>
  );
};
export default PaymentRoute;
