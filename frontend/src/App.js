import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data";
import imag from "./images/p1.jpg";
import HomeScreens from "./Screens/HomeScreens";
import ProductScreen from "./Screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { Store } from './Store';

function App() {
  const {state} = useContext(Store);
  const {cart} = state;
  
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
               <Navbar.Brand className="text-white">Amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link text-white">
                 Cart
                 {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                      {cart.cartItems.reduce((a,c) => a + c.quantity,0 )}
                  </Badge>
                 )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3"> 
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreens />} />
          </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
