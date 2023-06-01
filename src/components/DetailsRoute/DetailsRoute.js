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
  const storedDetails = JSON.parse(localStorage.getItem("billList"));
  const details = storedDetails.filter((detail) => detail.id == id);
  const [freshDetails, setDetails] = useState(details[0]);

  const {
    category,
    referenceNumber,
    amount,
    email,
    frequency,
    phoneNumber
  } = details[0];
  const onGoback = () => {
    const { history } = props;
    history.goBack();
  };
  const onEditClick = () => {
    setEditStatus(!edit);
  };
  useEffect(() => {
    // console.log(details, category, amount, email, "asdf");
  });
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
            {edit ? (
              <Input />
            ) : (
              <SpecialText>{freshDetails.category}</SpecialText>
            )}
          </Content>
          <Content>
            Reference Number:
            {edit ? (
              <Input
                onChange={onChangeReferenceNumber}
                value={freshDetails.referenceNumber}
              />
            ) : (
              <SpecialText>{freshDetails.referenceNumber}</SpecialText>
            )}
          </Content>
          <Content>
            Frequency:
            {edit ? (
              <Input
                onChange={onChangeFrequency}
                value={freshDetails.frequency}
              />
            ) : (
              <SpecialText>{freshDetails.frequency}</SpecialText>
            )}
          </Content>
          <Content>
            Phone number:
            {edit ? (
              <Input
                onChange={onChangePhoneNumber}
                value={freshDetails.phoneNumber}
              />
            ) : (
              <SpecialText>{freshDetails.phoneNumber}</SpecialText>
            )}
          </Content>
          <Content>
            Email:
            {edit ? (
              <Input onChange={onChangeEmail} value={freshDetails.email} />
            ) : (
              <SpecialText>{freshDetails.email}</SpecialText>
            )}
          </Content>
          <Content>
            Amout:
            {edit ? (
              <Input onChange={onChangeAmount} value={freshDetails.amount} />
            ) : (
              <SpecialText>{freshDetails.amount}</SpecialText>
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
