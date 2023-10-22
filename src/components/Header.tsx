import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar className="bg-light mb-3">
        <Container fluid className="py-4">
          <LinkContainer to="/">
            <Navbar.Brand>ToyMe</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
