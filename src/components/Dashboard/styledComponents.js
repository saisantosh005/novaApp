import styled from "styled-components";

const DashboardMainContainer = styled.div``;

const DispenserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const RefillSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ReportSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ButtonContainer = styled.div``;

const Button = styled.button``;

const BoldText = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`;

export {
  DashboardMainContainer,
  DispenserContainer,
  RefillSectionContainer,
  ReportSectionContainer,
  ButtonContainer,
  Button,
  BoldText
};
