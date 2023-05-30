import { Field, useFormik, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  ButtonContainer,
  FormPart,
  Heading,
  InputContainer,
  InputField,
  Label,
  MainContainer,
  Select,
  SelectField
} from "./styledComponent";
import FormControl from "../../CommoneComponents/FormComponents/FormikControl";

const dropDownOptions = [
  { key: "Select an Option", value: "" },
  { key: "Electricity", value: "Electricity" },
  { key: "Recharge", value: "Recharge" },
  { key: "Credit Card", value: "credit Card" }
];

const NewAddBill = (props) => {
  const initialValues = {
    referenceNumber: "",
    phoneNumber: "",
    amount: "",
    email: "",
    frequency: [],
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
          props.addbill({ ...values, id: uuidv4() });
          onSubmitProps.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <InputContainer>
                <Label htmlFor="category">Category</Label>
                <SelectField as="select" name="category" id="category">
                  {dropDownOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  ))}
                </SelectField>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="referenceNumber">Reference Number</Label>
                <InputField
                  name="referenceNumber"
                  id="referenceNumber"
                  type="text"
                  placeholder="Reference Number"
                />
                <ErrorMessage name="referenceNumber" component={TextError} />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <InputField
                  name="phoneNumber"
                  id="phoneNumber"
                  type="phonenumber"
                  placeholder="Phone Number"
                />
                <ErrorMessage name="phoneNumber" component={TextError} />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="amount">Amount</Label>
                <InputField
                  name="amount"
                  id="amount"
                  type="text"
                  placeholder="Amount"
                />
                <ErrorMessage name="amount" component={TextError} />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="email">Email</Label>
                <InputField
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component={TextError} />
              </InputContainer>

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
