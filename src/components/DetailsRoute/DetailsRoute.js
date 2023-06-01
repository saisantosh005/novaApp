import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
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
  // const onChangeReferenceNumber
  // const onChangeFrequency
  // const onChangePhoneNumber
  // const onChangeEmail
  // const onChangeAmount

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
              <Input value={freshDetails.referenceNumber} />
            ) : (
              <SpecialText>{referenceNumber}</SpecialText>
            )}
          </Content>
          <Content>
            Frequency:
            {edit ? (
              <Input value={freshDetails.frequency} />
            ) : (
              <SpecialText>{frequency}</SpecialText>
            )}
          </Content>
          <Content>
            Phone number:
            {edit ? (
              <Input value={freshDetails.phoneNumber} />
            ) : (
              <SpecialText>{phoneNumber}</SpecialText>
            )}
          </Content>
          <Content>
            Email:
            {edit ? (
              <Input value={freshDetails.email} />
            ) : (
              <SpecialText>{email}</SpecialText>
            )}
          </Content>
          <Content>
            Amout:
            {edit ? (
              <Input value={freshDetails.amount} />
            ) : (
              <SpecialText>{amount}</SpecialText>
            )}
          </Content>
        </Details>
        <ButtonContainer>
          <Link to={`/payment/${id}`}>
            <Button>Pay</Button>
          </Link>

          <Button onClick={onEditClick}>{edit ? "Update" : "Edit"}</Button>
        </ButtonContainer>
        <button onClick={onGoback}>back</button>
      </DetailsCardContainer>
    </DetailsMainContainer>
  );
};
export default withRouter(DetailsRoute);
