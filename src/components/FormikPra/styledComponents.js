import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div``;
const ErrorText = styled.p`
  color: red;
`;

export { FormContainer, Form, InputContainer, ErrorText };
