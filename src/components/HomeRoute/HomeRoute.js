import { BillCard, Heading, MainDiv } from "./styledComponent";

const billsList = [
  {
    category: "electricity",
    billList: [
      {
        name: "electricity",
        amount: 200,
        frequency: 3,
        phoneNumber: 972374987,
        email: ""
      }
    ]
  },
  {
    category: "mobile Recharge",
    billList: []
  },
  {
    category: "subscription",
    billList: []
  }
];
const HomeRoute = () => {
  return (
    <MainDiv>
      <Heading>Your Bills</Heading>
      {billsList.map((item) => (
        <BillCard></BillCard>
      ))}
    </MainDiv>
  );
};
export default HomeRoute;
