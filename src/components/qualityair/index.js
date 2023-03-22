import {
  QualityAir,
  Quality,
  IconFlor,
  Condition,
  NumbersConditions,
  DivCondition,
} from "./styles";

function ContainerQualityAir() {
  return (
    <QualityAir>
      <Quality>
        <IconFlor />
        <p>Qualidade do ar</p>
      </Quality>
      <Condition>
        <p>Boa</p>
        <h1>21</h1>
      </Condition>
      <NumbersConditions>
        <DivCondition>
          <p>12.9</p>
          <span>PM2.5</span>
        </DivCondition>
        <DivCondition>
          <p>12.9</p>
          <span>PM10</span>
        </DivCondition>
        <DivCondition>
          <p>2.1</p>
          <span>SO²</span>
        </DivCondition>
        <DivCondition>
          <p>1.4</p>
          <span>SO²</span>
        </DivCondition>
        <DivCondition>
          <p>21.2</p>
          <span>O³</span>
        </DivCondition>
        <DivCondition>
          <p>0.7</p>
          <span>CO</span>
        </DivCondition>
      </NumbersConditions>
    </QualityAir>
  );
}

export default ContainerQualityAir;
