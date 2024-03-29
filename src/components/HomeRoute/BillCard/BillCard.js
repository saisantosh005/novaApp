import { Link } from "react-router-dom";
import {
  BillCardMainContainer,
  Heading,
  ReferenceNumber,
  Amount,
  LinkAndIconContainer
} from "./styledComponents";
import { FaTrash } from "react-icons/fa";

const BillCard = (props) => {
  const { category, id, referenceNumber, amount, date, status } = props.details;

  const onClickDelete = () => {
    props.onDeleteBill(id);
  };
  return (
    <BillCardMainContainer>
      <Heading>{category}</Heading>
      <ReferenceNumber>Reference Number: {referenceNumber}</ReferenceNumber>
      <Amount>Rs {amount}</Amount>
      <LinkAndIconContainer>
        {props.viewRequired && <Link to={`/details/${id}`}>View</Link>}
        <FaTrash onClick={onClickDelete} />
      </LinkAndIconContainer>
      {/* <button >Delete</button> */}
    </BillCardMainContainer>
  );
};

export default BillCard;
