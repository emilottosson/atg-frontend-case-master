import HorseBetting from '../HorseBetting';
import { Wrapper, Title, Subtitle } from './HomePage.styles';

export default function HomePage() {
  return (
    <Wrapper>
      <Title>Välj insatstyp för hästspel</Title>
      <Subtitle>
        Sidan kommer visa de senaste resultaten för vald insatstyp
      </Subtitle>
      <HorseBetting></HorseBetting>
    </Wrapper>
  );
}
