import { Container, Swapper, DivRight, TimeSun } from "./styles";
import ContainerLeft from "../../components/containerLeft";
import ContainerQualityAir from "../../components/qualityair";
import ContainerDaysAndClima from "../../components/ContainerDaysAndClima";
import TimesAndSun from "../../components/ContainerTimesSun";

function Home() {
  return (
    <Container>
      <Swapper>
        <ContainerLeft />
        <DivRight>
          <ContainerQualityAir />
          <TimesAndSun/>
          <ContainerDaysAndClima />
        </DivRight>
      </Swapper>
    </Container>
  );
}

export default Home;
