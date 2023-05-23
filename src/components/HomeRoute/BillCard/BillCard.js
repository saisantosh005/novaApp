import {
  BillCardMainContainer,
  Heading,
  ReferenceNumber,
  Amount
} from "./styledComponents";

const BillCard = (props) => {
  const { category, id, amount, date, status } = props.details;
  return (
    <BillCardMainContainer>
      <Heading>{category}</Heading>
      <ReferenceNumber>Reference Number: {id}</ReferenceNumber>
      <Amount>Rs {amount}</Amount>
    </BillCardMainContainer>
  );
};

export default BillCard;
