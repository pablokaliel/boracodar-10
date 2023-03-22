import styled from "styled-components";
import { FaLeaf } from "react-icons/fa";

export const QualityAir = styled.div`
  width: 277px;
  height: 244px;
  border-radius: 10px;
  background-color: #6d67d0;
  @media (max-width: 770px) {
  margin: 0 auto;
  width: 380px;
  }
`;

export const Quality = styled.div`
  display: flex;
  margin-top: 35px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: rgba(218, 216, 247, 1);
  p {
    margin-left: 8px;
  }
`;

export const IconFlor = styled(FaLeaf)``;

export const Condition = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 33px;
  p {
    color: rgba(135, 235, 205, 1);
    font-size: 18px;
  }
  h1 {
    color: rgba(231, 230, 251, 1);
    font-size: 40px;
  }
`;

export const NumbersConditions = styled.div`
  display: grid;
  margin: 0px 16px;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const DivCondition = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: rgba(135, 235, 205, 1);
    font-size: 14px;
  }
  span {
    color: rgba(231, 230, 251, 1);
    font-size: 12px;
  }
`;
