import styled from "styled-components";

export const TimeSun = styled.div`
  width: 277px;
  border-radius: 10px;
  background-color: #6d67d0;

  @media (max-width: 770px) {
  margin: 0 auto;
  width: 380px;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  margin-top: 35px;
  width: 100%;
  justify-content: center;
  align-items: center;

  p {
    /* font-weight: 700; */
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #dad8f7;
    padding: 0px 8px;
  }
`;

export const DivImgHours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 217px;
    margin-top: 24px;
    height: 110px;
    margin-bottom: 8px;
  }

  p {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const DivHours = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 17px;

  p {
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
`;
