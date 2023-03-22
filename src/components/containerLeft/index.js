import {
  DivLeft,
  DivImg,
  ImgCloud,
  DivLocation,
  Icon,
  Location,
  Temperature,
  Celsius,
  Infos,
  DivAir,
  DivIcon,
  DivInfo,
  DivDamp,
  DivRain,
  IconRain,
  IconAir,
  IconDamp,
  DisplayGridInfos,
  MaxAndMin,
} from "./styles";

import weather from "../../assets/weather.png";

function ContainerLeft() {
  return (
    <DivLeft>
      <DivImg>
        <ImgCloud src={weather} alt="nuvem" />
      </DivImg>

      <DivLocation>
        <Icon />
        <Location>Rio do Sul,SC</Location>
      </DivLocation>

      <Temperature>
        <Celsius>18</Celsius>
        <span>°C</span>
      </Temperature>
      <MaxAndMin>
        <p>22°</p>
        <span>16°</span>
      </MaxAndMin>

      <Infos>
        <DisplayGridInfos>
          <DivAir>
            <DivIcon>
              <IconAir />
            </DivIcon>
            <DivInfo>
              <p>Vento</p>
              <h3>17km/h</h3>
            </DivInfo>
          </DivAir>
          <DivDamp>
            <DivIcon>
              <IconDamp />
            </DivIcon>
            <DivInfo>
              <p>umidade</p>
              <h3>31%</h3>
            </DivInfo>
          </DivDamp>
          <DivRain>
            <DivIcon>
              <IconRain />
            </DivIcon>
            <DivInfo>
              <p>chuva</p>
              <h3>10%</h3>
            </DivInfo>
          </DivRain>
        </DisplayGridInfos>
      </Infos>
    </DivLeft>
  );
}

export default ContainerLeft;
