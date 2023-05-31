import { ErrorMessage } from "formik";
import { InputContainer, Label, SelectField } from "./styledComponents";
import TextError from "./TextError";

const SelectComponent = (props) => {
  const { name, label, dropDownOptions, ...rest } = props;
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <SelectField component="select" name={name} id={name} {...rest}>
        {dropDownOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </SelectField>
      <ErrorMessage name={name} component={TextError} />
    </InputContainer>
  );
};

export default SelectComponent;
