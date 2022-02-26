import React from "react";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" expand="md" sticky="top" variant="dark">
          <Container>
            <Navbar.Brand>Loren DiLoreto</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>Skills</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
              <Nav.Link>Experience</Nav.Link>
              <Nav.Link>Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <h1 class="cover-page-title">Loren DiLoreto</h1>
        <h1 class="cover-page-description">Computer Science Student @ Worcester Polytechnic Institute</h1>
        <Image
          img src="./assets/LorenDiLoreto.jpg"
          className="d-block mx-auto cover-page-image"
        />
      </>
    );
  }
}

export default App;