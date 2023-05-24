import AddBill from "./AddBill/AddBill";
import BillCard from "./BillCard/BillCard";
import {
  BillListContainer,
  Heading,
  MainContainer,
  MainDiv
} from "./styledComponent";

// const billsList = [
//   {
//     category: "electricity",
//     billList: [
//       {
//         name: "electricity",
//         amount: 200,
//         frequency: 3,
//         phoneNumber: 972374987,
//         email: ""
//       }
//     ]
//   },
//   {
//     category: "mobile Recharge",
//     billList: []
//   },
//   {
//     category: "subscription",
//     billList: []
//   }
// ];
const billsList = [
  {
    id: 123487,
    category: "electricity",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  },
  {
    id: 2345987,
    category: "mobile Recharge",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  },
  {
    id: 3234987,
    category: "subscription",
    amount: 200,
    frequency: 3,
    phoneNumber: 972374987,
    email: ""
  }
];

const HomeRoute = () => {
  return (
    <MainContainer>
      <MainDiv>
        <Heading>Your Bills</Heading>
        <BillListContainer>
          {billsList.map((item) => (
            <BillCard details={item} />
          ))}
        </BillListContainer>
      </MainDiv>
      <AddBill />
    </MainContainer>
  );
};
export default HomeRoute;
