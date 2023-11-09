import { Navbar, Container, Nav } from "react-bootstrap";

const BarraSopra = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          SpaceFlight
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-light">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light">
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-light">
              More deets
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="text-light">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraSopra;
