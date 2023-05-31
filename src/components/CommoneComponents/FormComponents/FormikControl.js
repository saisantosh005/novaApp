import Input from "./Input";
import SelectComponent from "./SelectComponent";

const FormControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <SelectComponent {...rest} />;
    case "checkbox":
      return <></>;
    case "radio":
      return <></>;
    default:
      return null;
  }
  // return <div></div>;
};
export default FormControl;
