import {
  ErrorText,
  FormComponent,
  FormContainer,
  InputContainer
} from "./styledComponents";
import * as Yup from "yup";
import { Field, useFormik, Formik, ErrorMessage } from "formik";
const onSubmit = (values) => {
  console.log(values, "onsubmit");
};
const initialValues = {
  name: "sai",
  email: "",
  channel: ""
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email format";
  }
  if (!values.channel) {
    errors.channel = "required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email Format").required("Required"),
  channel: Yup.string().required("Required")
});

const FormikPra = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormContainer>
        <FormComponent>
          <InputContainer>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />{" "}
            <ErrorMessage name="email" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="channel">Channel</label>
            <Field type="text" name="channel" id="channel" />
            <ErrorMessage name="channel" />
          </InputContainer>
          <button type="submit">Submit</button>
        </FormComponent>
      </FormContainer>
    </Formik>
  );
};

export default FormikPra;
