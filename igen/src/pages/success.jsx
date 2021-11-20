import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Success = () => {
  return <Div onClick={() => console.log('Hello')}>Hello from Success</Div>
}

export default Success;
