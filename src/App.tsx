import Calculator from 'components/Calculator';
import { Container } from '@mui/material';
import TheHeader from 'components/TheHeader';

function App() {
  return (
    <>
      <Container fixed disableGutters className="container">
        <TheHeader />
        <Calculator />
      </Container>
    </>
  );
}

export default App;
