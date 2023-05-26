import styled from "styled-components";

import { Form } from "formik";
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
const FormComponent = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div``;
const ErrorText = styled.p`
  color: red;
`;

export { FormContainer, FormComponent, InputContainer, ErrorText };
