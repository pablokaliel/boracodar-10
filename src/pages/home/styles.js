import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  @media (max-width: 770px) {
    display: flex;
    flex-direction:column;
  }
`;

export const Swapper = styled.div`
  display: flex;
  @media (max-width: 770px) {
    display: flex;
    width: 100%;
    flex-direction:column;
  }
`;

export const DivRight = styled.div`
  display: grid;
  width:500px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  max-height:480px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction:column;
    width: 100%;
  }
`;



export const DivCloud = styled.div`
  display: flex;
  justify-content: space-between;
`;
