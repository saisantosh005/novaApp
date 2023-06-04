import { withRouter } from "react-router-dom";
import { useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControl from "../../CommoneComponents/FormComponents/FormikControl";
import { BillContext } from "../../../App";
import {
  MainContainer,
  SpecialText,
  PaymentContainer,
  BillDetailSection,
  PaymentDetailsSection,
  Button,
  TextContainer,
  Heading
} from "./styledComponents";

const PaymentRoute = (props) => {
  const accountDetailsTwo = { accountNumber: "33273489", cvv: "" };
  const validationSchema = Yup.object({
    accountNumber: Yup.string().required("Required"),
    cvv: Yup.string().required("Required")
  });
  const dataContext = useContext(BillContext);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const details = dataContext.billListValues.filter(
    (detail) => detail.id === id
  );
  const {
    category,
    referenceNumber,
    amount,
    email,
    frequency,
    phoneNumber
  } = details[0];
  const onGoBack = () => {
    const { history } = props;
    history.goBack();
  };
  const renderFormikForm = () => (
    <PaymentDetailsSection>
      <Formik
        initialValues={accountDetailsTwo}
        onSubmit={(values, onSubmitProps) => {
          const { history } = props;
          dataContext.onPaymentDone(id);
          alert("You payment is success");
          history.replace(`/`);
          onSubmitProps.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormControl
                control="input"
                label="Account Number"
                id="accountNumber"
                name="accountNumber"
                type="text"
                placeholder="Account Number"
              />
              <FormControl
                control="input"
                label="CVV"
                id="cvv"
                name="cvv"
                type="text"
                placeholder="CVV"
              />
              <Button type="submit" disabled={!formik.isValid}>
                Pay
              </Button>
            </Form>
          );
        }}
      </Formik>
    </PaymentDetailsSection>
  );
  const renderBillDetailsSection = () => (
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
  );
  return (
    <MainContainer>
      <Heading>Payment section</Heading>
      <PaymentContainer>
        {renderBillDetailsSection()}
        {renderFormikForm()}
      </PaymentContainer>
      <button onClick={onGoBack}>back</button>
    </MainContainer>
  );
};
export default withRouter(PaymentRoute);
