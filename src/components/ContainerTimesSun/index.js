import {DivTitle,TimeSun,DivImgHours,DivHours} from './styles'

import hours from '../../assets/hours.png'
import sunhours from '../../assets/sunhours.png'

function TimesAndSun() {
  return (
    <TimeSun>
      <DivTitle>
        <img src={hours} alt="relogio" />
        <p>horario do Sol</p>
      </DivTitle>

      <DivImgHours>
        <img src={sunhours} alt="" />
        <p>16:01</p>
      </DivImgHours>
      <DivHours>
        <p>06:12</p>
        <p>18:52</p>
      </DivHours>
    </TimeSun>
  );
}

export default TimesAndSun;
