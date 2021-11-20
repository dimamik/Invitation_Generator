import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components'

import envelope from '../assets/envelope.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Ubuntu, Roboto, sans-serif;
  font-size: 24px;
  height: 100%;
`;

const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 80px 0;
`;

const Img = styled.div`
  background-image: url('${envelope}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const wobbleTop = keyframes`16.65% {
  transform: skew(-12deg);
}

33.3% {
  transform: skew(10deg);
}

49.95% {
  transform: skew(-6deg);
}

66.6% {
  transform: skew(4deg);
}

83.25% {
  transform: skew(-2deg);
}

100% {
  transform: skew(0);
}`

const Button = styled.div`
transform-origin: 0 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
transform: translateZ(0);
box-shadow: 0 0 1px rgba(0, 0, 0, 0);
width: max-content;

        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f1f1;
        border-radius: 10px;
        padding: 20px 40px;
        overflow: hidden;
        position: relative;
        transition: all 350ms ease-out;
        background-image: linear-gradient(130deg, #d8984e, #d84e4e);
        box-shadow: 0px 0px 16px 5px #d84e4e;
        cursor: pointer;
        color: #303030;
        font-weight: 700;
        

        &:hover,
        &:focus {
          animation-name: ${wobbleTop};
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: 1;
          transition: all 350ms ease-out;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 38px;
  margin: 0 0 140px 0;
  color: #303030;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Img>
        <Content>
          <Title>Invitation Generator</Title>
          <Button onClick={() => navigate('/form')}>Generate➡</Button>
        </Content>
      </Img>
    </Container>
  );
};


export default Home;
