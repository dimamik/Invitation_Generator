import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import sendFormData from '../actions/sendFormData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const Buttons = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <StyledButton
        variant="contained"
        component="label"
        onClick={async () => {
          await sendFormData({ ...props });
          navigate('/success');
        }}
      >
        Go to success page
      </StyledButton>
    </Container>
  );
};

export default Buttons;
