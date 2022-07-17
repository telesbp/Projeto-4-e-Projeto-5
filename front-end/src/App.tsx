import { Button, Container } from "react-bootstrap";
import styled  from "styled-components";

function App() {
  return (
    <ContainerStyled>     
      <p>teste</p>
      <Button>teste</Button>
    </ContainerStyled>
  );
}

export default App;

const ContainerStyled = styled(Container)`
background-color: blue;
`