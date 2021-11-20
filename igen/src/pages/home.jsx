import { useNavigate } from 'react-router-dom';

import { Container, Img, Content, Title, Button } from '../styles/StyledComponents'

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
