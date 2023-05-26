import {
  ErrorText,
  Form,
  FormContainer,
  InputContainer
} from "./styledComponents";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  console.log(formik.touched);
  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <InputContainer>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorText>{formik.errors.name}</ErrorText>
          ) : null}
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorText>{formik.errors.email}</ErrorText>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channle && formik.errors.channel && (
            <ErrorText>{formik.errors.channel}</ErrorText>
          )}
        </InputContainer>
        <button type="submit">Submit</button>
      </Form>
    </FormContainer>
  );
};

export default FormikPra;
