import styled from "styled-components";

import { MdLocationOn } from "react-icons/md";
import { BsFillCloudRainFill, BsWind, BsMoisture } from "react-icons/bs";
import background from "../../assets/minibg.png";

export const DivLeft = styled.div`
  height: 480px;
  width:480px;
  background-repeat: no-repeat;
  margin-right: 32px;
  background-image: url(${background});
  position: relative;
  background-size: cover;
  border-radius: 10px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction:column;
    max-width: 380px;
    height:230px;
    margin:0px auto;
    /* gap:24px; */
    margin-bottom:24px;
  }
`;

export const DivImg = styled.div`
  top: -55px;
  position: absolute;
  left: -55px;
`;

export const ImgCloud = styled.img``;

export const DivLocation = styled.div`
  justify-content: flex-end;
  width: 100%;
  display: flex;
  margin-top: 33px;
  padding-right: 33px;
  align-items: center;
  @media (max-width: 770px) {
    margin-top:0px;
  }
`;

export const Icon = styled(MdLocationOn)`
  width: 20px;
  height: 20px;
  color: #c2bff4;
`;

export const Location = styled.p`
  color: #c2bff4;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const Temperature = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 70px;
  @media (max-width: 770px) {
    margin-top:0px;
  }
  span {
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    margin-top: 20px;
  }
`;

export const Celsius = styled.h1`
  font-weight: 700;
  font-size: 88px;
  line-height: 106px;
  color: #fff;
  @media (max-width: 770px) {
    font-size:48px;
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 140px;
  padding: 13px;
  @media (max-width: 770px) {
    margin-top:0px;
    
  }
`;

export const DivAir = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 770px) {
   width:120px;
   justify-content:center;
  }

  p {
    color: rgba(194, 191, 244, 1);
    font-size: 12px;
  }
  background-color: rgba(102, 96, 200, 0.6);
  padding: 12px 16px;
  border-radius: 6px;
  margin-right: 8px;
  h3 {
    font-size: 17px;
    color: #fff;
  }
`;

export const DivIcon = styled.div``;

export const DivInfo = styled.div``;

export const DivDamp = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 770px) {
   width:120px;
   justify-content:center;
   margin-right:0px;
  }
  p {
    color: rgba(194, 191, 244, 1);
    font-size: 12px;
  }
  background-color: rgba(102, 96, 200, 0.6);
  padding: 12px 16px;
  border-radius: 6px;
  margin-right: 8px;
  h3 {
    font-size: 17px;
    color: #fff;
  }
`;

export const DivRain = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 770px) {
   width:120px;
   justify-content:center;
  }
  p {
    color: rgba(194, 191, 244, 1);
    font-size: 12px;
  }
  background-color: rgba(102, 96, 200, 0.6);
  padding: 12px 16px;
  border-radius: 6px;
  margin-right: 8px;
  h3 {
    font-size: 17px;
    color: #fff;
  }
`;

export const IconRain = styled(BsFillCloudRainFill)`
  margin-right: 15px;
  width: 26px;
  height: 24px;
  color: rgba(194, 191, 244, 1);
`;

export const IconAir = styled(BsWind)`
  margin-right: 15px;
  width: 26px;
  height: 24px;
  color: rgba(194, 191, 244, 1);
`;

export const IconDamp = styled(BsMoisture)`
  margin-right: 15px;
  width: 26px;
  color: rgba(194, 191, 244, 1);
  height: 24px;
`;

export const MaxAndMin = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  p {
    color: #fff;
  }
  span {
    color: rgba(194, 191, 244, 1);
  }
`;

export const DisplayGridInfos = styled.div`
  display: grid;
  width: 456px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: 770px) {
    display: flex;
    width: 100%;
    /* gap:8px; */
    max-width:370px;
    gap:8px;
    /* margin: 0 auto; */
  }
`;
