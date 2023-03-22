import styled from "styled-components";

export const SwapperDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height:100%;
  @media (max-width: 770px) {
    gap:30px;
    height: 230px;
  }
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: rgba(218, 216, 247, 1);
  }
  span {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: rgba(194, 191, 244, 1);

    p {
      color: #fff;
      font-size: 17px;
    }
  }
`;

export const DaysAndClima = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #6d67d0;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 0px 40px;
  border-radius: 10px;
  @media (max-width: 770px) {
    display: flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    width: 380px;
    gap:8px;
  }
`;
