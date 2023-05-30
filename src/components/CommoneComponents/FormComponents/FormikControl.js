const FormControl = (props) => {
  const { control } = props;
  switch (control) {
    case "input":
      return <></>;
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
