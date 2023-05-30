import { ErrorMessage, Field } from "formik";
import { InputContainer, InputField, Label } from "./styledComponents";
import TextError from "./TextError";

const Input = (props) => {
  const { name, label, rest } = props;
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <InputField id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </InputContainer>
  );
};
export default Input;
