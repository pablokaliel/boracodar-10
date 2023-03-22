import { DaysAndClima, SwapperDay } from "./styles";
import cloud from "../../assets/cloud.png";
import cloudrain from "../../assets/cloudrain.png";
import cloudthunder from "../../assets/cloudthunder.png";
import sun from "../../assets/sun.png";
import sunandcloud from "../../assets/sunandcloud.png";

function ContainerDaysAndClima() {
  return (
    <DaysAndClima>
      <SwapperDay>
        <p>Amanha</p>
        <img src={cloud} alt="nuvem" />
        <span>
          <p>21° </p> 16°
        </span>
      </SwapperDay>
      <SwapperDay>
        <p>Sexta</p>
        <img src={sun} alt="nuvem" />
        <span>
          <p>28° </p> 20°
        </span>
      </SwapperDay>
      <SwapperDay>
        <p>Sabado</p>
        <img src={cloudrain} alt="nuvem" />
        <span>
          <p>25° </p> 21°
        </span>
      </SwapperDay>
      <SwapperDay>
        <p>Domingo</p>
        <img src={cloudthunder} alt="nuvem" />
        <span>
          <p>20° </p> 14°
        </span>
      </SwapperDay>
      <SwapperDay>
        <p>Segunda</p>
        <img src={sunandcloud} alt="nuvem" />
        <span>
          <p>24° </p> 18°
        </span>
      </SwapperDay>
    </DaysAndClima>
  );
}

export default ContainerDaysAndClima;
