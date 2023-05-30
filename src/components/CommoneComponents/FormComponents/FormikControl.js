import Input from "./Input";

const FormControl = (props) => {
  const { control, rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "checkbox":
      return <></>;
    case "select":
      return <></>;
    case "radio":
      return <></>;
    default:
      return null;
  }
  // return <div></div>;
};
export default FormControl;
