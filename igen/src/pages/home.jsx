import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Ubuntu, Roboto, sans-serif;
  font-size: 64px;
`;

const Button = styled.div`
  background-color: indigo;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 600px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 132px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Invitation Generator</Title>
      <Button onClick={() => navigate('/form')}>Generate! ➡</Button>
    </Container>
  );
};


export default Home;
