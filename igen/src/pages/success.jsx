import { textAlign } from '@mui/system';
import styled from 'styled-components';

import { StyledH1, SuccessContent, Container,SuccessP} from '../styles/StyledComponents';



const Success = () => {
  return <>
    <Container>
      <SuccessContent>
        <StyledH1>Thank You!</StyledH1>
        <SuccessP>Your invitation has been send <span>❤</span></SuccessP>
      </SuccessContent>
    </Container>
  </>
}

export default Success;
