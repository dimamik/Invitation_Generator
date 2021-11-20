import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
  return (
      <div className="container">
          <h1>Create your Invitation!</h1>
          <button>Generate</button>
      </div>
  )
}

export default Home;