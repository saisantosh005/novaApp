import { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { BillContext } from "../../App";
import {
  DetailsMainContainer,
  DetailsCardContainer,
  Heading,
  LabelName,
  Content,
  Details,
  ButtonContainer,
  Button,
  SpecialText,
  Input
} from "./styledComponents";

const DetailsRoute = (props) => {
  const contextBill = useContext(BillContext);
  const [edit, setEditStatus] = useState(false);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const details = contextBill.billListValues.filter((bill) => bill.id === id);
  const [freshDetails, setDetails] = useState(details[0]);
  const {
    category,
    referenceNumber,
    amount,
    email,
    frequency,
    phoneNumber
  } = freshDetails;
  const onGoback = () => {
    const { history } = props;
    history.goBack();
  };
  const onEditClick = () => {
    setEditStatus(!edit);
  };
  const onChangeReferenceNumber = (e) => {
    setDetails({ ...freshDetails, referenceNumber: e.target.value });
  };
  const onChangeFrequency = (e) => {
    setDetails({ ...freshDetails, frequency: e.target.value });
  };
  const onChangePhoneNumber = (e) => {
    setDetails({ ...freshDetails, phoneNumber: e.target.value });
  };
  const onChangeEmail = (e) => {
    setDetails({ ...freshDetails, email: e.target.value });
  };
  const onChangeAmount = (e) => {
    setDetails({ ...freshDetails, amount: e.target.value });
  };
  const onUpdateClick = () => {
    setEditStatus(!edit);
    contextBill.onUpdateBill(freshDetails);
  };
  return (
    <DetailsMainContainer>
      <DetailsCardContainer>
        <Heading>Bill Details</Heading>
        <Details>
          <Content>
            Category:
            {edit ? <Input /> : <SpecialText>{category}</SpecialText>}
          </Content>
          <Content>
            Reference Number:
            {edit ? (
              <Input
                onChange={onChangeReferenceNumber}
                value={referenceNumber}
              />
            ) : (
              <SpecialText>{referenceNumber}</SpecialText>
            )}
          </Content>
          <Content>
            Frequency:
            {edit ? (
              <Input onChange={onChangeFrequency} value={frequency} />
            ) : (
              <SpecialText>{frequency}</SpecialText>
            )}
          </Content>
          <Content>
            Phone number:
            {edit ? (
              <Input onChange={onChangePhoneNumber} value={phoneNumber} />
            ) : (
              <SpecialText>{phoneNumber}</SpecialText>
            )}
          </Content>
          <Content>
            Email:
            {edit ? (
              <Input onChange={onChangeEmail} value={freshDetails.email} />
            ) : (
              <SpecialText>{email}</SpecialText>
            )}
          </Content>
          <Content>
            Amout:
            {edit ? (
              <Input onChange={onChangeAmount} value={amount} />
            ) : (
              <SpecialText>{amount}</SpecialText>
            )}
          </Content>
        </Details>
        <ButtonContainer>
          <Link to={`/payment/${id}`}>
            <Button>Pay</Button>
          </Link>

          {edit ? (
            <Button onClick={onUpdateClick}>Update</Button>
          ) : (
            <Button onClick={onEditClick}>Edit</Button>
          )}
        </ButtonContainer>
        <button onClick={onGoback}>back</button>
      </DetailsCardContainer>
    </DetailsMainContainer>
  );
};
export default withRouter(DetailsRoute);
