
import './App.css';
import Adress from './Components/Profil/Adress';
import Fullname from './Components/Profil/Fullname';
import Profilephoto from './Components/Profil/Profilephoto';
import {Navbar,Container,Nav} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <Profilephoto/>
      <Fullname/>
      <Adress/> 
    </div>
  );
}

export default App;
