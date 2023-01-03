import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.pinimg.com/236x/f7/82/83/f7828373702afaab9618c44bebc378a5.jpg"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
           <h2 style={{textDecoration:"none",color:"yellow"}} >Star Lounge</h2> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header