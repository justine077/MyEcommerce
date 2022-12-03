import React, {useContext}from 'react'
import {GlobalState} from '../../GlobalState' 
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
// import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

// 

import {Container ,Button , Form , Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { BsCartPlus } from "react-icons/bs";


function Header() {
    const state = useContext(GlobalState)
    // console.log(state)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart


    const logoutUser = async () =>{
        await axios.get('user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    const adminRouter = () =>{
        return(
            <>
            <li><Link to="/create_product">Create Product</Link></li>
            <li><Link to="/category">Categories</Link></li>
        </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
               <li><Link to="/history"> History </Link></li> 
               <li><Link to="/" onClick={logoutUser}> Logout </Link></li> 
            </>
        )
    }

  return (
    <header>
        {/* Edited Starts */}
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: '#DEF5E5'}}>
        <Container>
            <Navbar.Brand href="#home" className='text-dark fw-bold'><Link to="/" className='text-decoration-none text-dark'> {isAdmin ? 'Admin' : 'UNDERGRNDEV'} </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: 'teal'}}/>
            <Navbar.Collapse id="responsive-navbar-nav" className='button1'>

            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search"className="me-2"
            aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
            </Form>

            <Nav className="ms-auto">
            <Nav.Link className='text-dark'><Link to="/"className='text-decoration-none text-dark'> {isAdmin ?  'Products' : 'Home' }</Link></Nav.Link>
            <Nav.Link className='text-dark'><Link to="/products" className='text-decoration-none text-dark'> {isAdmin ?  'Products' : 'Shop' } </Link></Nav.Link>
            <Nav.Link className='text-dark'>{isAdmin && adminRouter()}
            {
                isLogged ? loggedRouter():<Link to="/login" className='text-decoration-none text-dark'> Login</Link>
            }
            {/* <li>
                <img src={Close} alt="" width={30}className="menu"/> 
            </li> */}
            </Nav.Link>


            {/* <Nav.Link className='text-dark' href="/Signup">Signup</Nav.Link> */}
            {/* <Nav.Link className='text-dark' eventKey={2} href="/Signup">
              Signup
              </Nav.Link> */}
              
              {/* <Nav.Link className='text-dark' href="#register"></Nav.Link> */}

              {
                isAdmin ? '' 
                :    <div className='cart-icon'>
                       <Link class="btn cart1 border-0" to={'/cart'}>
                  <i className=""><BsCartPlus className='cart border-0'/>
                  <span className="">{cart.length}</span></i>
              </Link>
                    </div>
            }
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/* Edited Ends */}

        {/* <div className='menu'>
            <img src={Menu} alt="" width={30}/>
        </div>

        <div className='logo'>
            <h3>
                <Link to="/"> {isAdmin ? 'Admin' : 'UNDERGRNDEV'} </Link>
            </h3> 
        </div>

        <ul>
              <li><Link to="/"> {isAdmin ?  'Products' : 'Home' }</Link></li>
            <li><Link to="/products"> {isAdmin ?  'Products' : 'Shop' } </Link></li>
         
            {isAdmin && adminRouter()}
            {
                isLogged ? loggedRouter(): <li><Link to="/login"> Login ✥ Register  </Link></li>
            }

            <li>
                <img src={Close} alt="" width={30}className="menu"/> 
            </li>

        </ul>
        
            {
                isAdmin ? '' 
                :    <div className='cart-icon'>
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width={30}/>
                        </Link>
                    </div>
            } */}


    </header>
  )
}

export default Header