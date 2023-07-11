import Calculator from 'components/Calculator';
import { Container } from '@mui/material';
import TheHeader from 'components/TheHeader';

function App() {
  return (
    <>
      <Container
        fixed
        disableGutters
        sx={{
          maxHeight: '100vh',
          maxWidth: '100vw',
          minWidth: 'calc(100vw - 64px)',
          minHeight: '100vh',
        }}
      >
        <TheHeader />
        <Calculator />
      </Container>
    </>
  );
}

export default App;
