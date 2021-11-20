import styled from 'styled-components';
import {StyledH1} from "../styles/StyledComponents";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
    return <>
        <StyledH1>
            Hello there!
        </StyledH1>
    </>
}

export default Home;
