import * as S from "./index.styles";
import Card from "../Card";

function Home() {
  return (
    <>
      <S.HomeContainer>
        <h1>Welcome to Cyberstore</h1>
      </S.HomeContainer>
      <S.HomeContainer>
        <Card />
      </S.HomeContainer>
    </>
  );
}

export default Home;
