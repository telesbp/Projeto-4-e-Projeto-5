import { Button, Container } from "react-bootstrap";
import styled  from "styled-components";

function App() {
  return (
    <Container>     
      <p>teste</p>
      <Button>teste</Button>
    </Container>
  );
}

export default App;

const ContainerStyled = styled(Container)`
backgroud-color: blue;
`