import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
function NavbarHeader() {
    const productCart = useSelector(state=>state.cart)
    return (
        <Navbar  expand="lg" className='position-fixed bg-white w-100 '>
            <Container>
                <NavLink to="/" className="navbar-brand fw-bold">E-Commerce</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-center links">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/product">Product</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div className='btns'>
                    <Button variant="outline-dark">
                        <Link to="/login" className='nav-link'><FaSignInAlt /> Login</Link>
                    </Button>
                    <Button variant="outline-dark ms-2">
                        <Link to="/register" className='nav-link'><FaUserPlus /> Register</Link>
                    </Button>
                    <Button variant="outline-dark ms-2">
                        <Link to="/cart" className='nav-link'><FaShoppingCart /> Cart {productCart.length}</Link>
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;