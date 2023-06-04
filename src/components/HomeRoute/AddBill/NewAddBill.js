import { Form, Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  ButtonContainer,
  Heading,
  MainContainer
} from "./styledComponent";
import FormControl from "../../CommoneComponents/FormComponents/FormikControl";
import { dropDownOptions, frequencyDropOptions } from "../../Contants";
import { useContext } from "react";
import { BillContext } from "../../../App";

const NewAddBill = (props) => {
  const contextData = useContext(BillContext);
  const initialValues = {
    referenceNumber: "",
    phoneNumber: "",
    amount: "",
    email: "",
    frequency: "",
    category: ""
  };

  const validationSchema = Yup.object({
    referenceNumber: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    amount: Yup.string().required("Required")
  });
  return (
    <MainContainer>
      <Heading>New Bill</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, onSubmitProps) => {
          contextData.insertNewBill({
            ...values,
            category: "Recharge",
            paymentStatus: false,
            id: uuidv4().toString()
          });
          onSubmitProps.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormControl
                control="select"
                label="Category"
                id="category"
                name="category"
                placeholder="category"
                dropDownOptions={dropDownOptions}
              />
              <FormControl
                control="input"
                label="ReferenceNumber"
                id="referenceNumber"
                name="referenceNumber"
                type="text"
                placeholder="Reference Number"
              />
              <FormControl
                control="input"
                label="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
                type="phonenumber"
                placeholder="Phone Number"
              />
              <FormControl
                control="input"
                label="Amount"
                name="amount"
                id="amount"
                type="text"
                placeholder="Amount"
              />
              <FormControl
                control="input"
                label="Email"
                name="email"
                id="email"
                type="email"
                placeholder="Email"
              />
              <FormControl
                control="select"
                label="Frequency"
                id="frequency"
                name="frequency"
                placeholder="Frequency"
                dropDownOptions={frequencyDropOptions}
              />
              <ButtonContainer>
                <Button type="submit" disabled={!formik.isValid}>
                  Submit
                </Button>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
    </MainContainer>
  );
};
export default NewAddBill;
