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
  SpecialText
} from "./styledComponents";

const DetailsRoute = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const storedDetails = JSON.parse(localStorage.getItem("billList"));
  const details = storedDetails.filter((detail) => detail.id == id);
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
  useEffect(() => {
    // console.log(details, category, amount, email, "asdf");
  });
  return (
    <DetailsMainContainer>
      <DetailsCardContainer>
        <Heading>Bill Details</Heading>
        <Details>
          <Content>
            Category:<SpecialText>{category}</SpecialText>
          </Content>
          <Content>
            Reference Number:<SpecialText>{referenceNumber}</SpecialText>
          </Content>
          <Content>
            Frequency:
            <SpecialText>{frequency}</SpecialText>
          </Content>
          <Content>
            Phone number:
            <SpecialText>{phoneNumber}</SpecialText>
          </Content>
          <Content>
            Email:
            <SpecialText>{email}</SpecialText>
          </Content>
          <Content>
            Amout:<SpecialText>{amount}</SpecialText>
          </Content>
        </Details>
        <ButtonContainer>
          <Link to={`/payment/${id}`}>
            <Button>Pay</Button>
          </Link>

          <Button>Edit</Button>
        </ButtonContainer>
        <button onClick={onGoback}>back</button>
      </DetailsCardContainer>
    </DetailsMainContainer>
  );
};
export default withRouter(DetailsRoute);
