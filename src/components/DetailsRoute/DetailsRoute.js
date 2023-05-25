import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const { category, amount, email, frequency, phoneNumber } = details[0];
  useEffect(() => {
    console.log(details, category, amount, email, "asdf");
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
            Reference Number:<SpecialText>{id}</SpecialText>
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
            Amout:<SpecialText>{frequency}</SpecialText>
          </Content>
        </Details>
        <ButtonContainer>
          <Link to={`/payment/${id}`}>
            <Button>Pay</Button>
          </Link>

          <Button>Edit</Button>
        </ButtonContainer>
        <Link to={`/`}>back</Link>
      </DetailsCardContainer>
    </DetailsMainContainer>
  );
};
export default DetailsRoute;
