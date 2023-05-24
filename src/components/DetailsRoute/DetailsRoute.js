import { Link } from "react-router-dom";
import {
  DetailsMainContainer,
  DetailsCardContainer,
  Heading,
  LabelName,
  Content,
  Details,
  ButtonContainer,
  Button
} from "./styledComponents";

const DetailsRoute = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  return (
    <DetailsMainContainer>
      <DetailsCardContainer>
        <Heading>Bill Details</Heading>
        <Details>
          <Content>
            <LabelName>Name:</LabelName>
          </Content>
          <Content>
            <LabelName>Category:</LabelName>
          </Content>
          <Content>
            <LabelName>Date:</LabelName>
          </Content>
          <Content>
            <LabelName>Frequency:</LabelName>
          </Content>
          <Content>
            <LabelName>Amout:</LabelName>
          </Content>
        </Details>
      </DetailsCardContainer>
      <ButtonContainer>
        <Button>
          <Link to="payment">Pay</Link>
        </Button>

        <Button>Edit</Button>
      </ButtonContainer>
    </DetailsMainContainer>
  );
};
export default DetailsRoute;
