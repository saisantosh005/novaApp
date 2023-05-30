import { Field, useFormik, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  referenceNumber: "",
  phoneNumber: "hkasdf",
  amount: "",
  email: ""
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  referenceNumber: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  amount: Yup.string().required("Required")
});
const NewAddBill = () => {
  const p = 0;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="referenceNumber">Reference Number</label>
          <Field
            name="referenceNumber"
            id="referenceNumber"
            type="text"
            {...formik.getFieldProps("referenceNumber")}
          />
          {formik.errors.referenceNumber && (
            <p>{formik.errors.referenceNumber}</p>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field
            name="phoneNumber"
            id="phoneNumber"
            type="phonenumber"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.errors.phoneNumber && <p>{formik.errors.phoneNumber}</p>}
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <Field
            name="amount"
            id="amount"
            type="text"
            {...formik.getFieldProps("amount")}
          />
          {formik.errors.amount && <p>{formik.errors.amount}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default NewAddBill;
