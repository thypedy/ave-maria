import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/css/Navbar.css"

import { CiHeart } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

const menu =[
  {
    id:1,
    descricao:"Favoritos",
    logo:<CiHeart/>
  },
  {
    id:2,
    descricao:"Visitas agendadas",
    logo:<CiCalendar/>
  },
  {
    id:3,
    descricao:"Propostas enviadas",
    logo:<CiUser/>
  },
  {
    id:4,
    descricao:"Ajuda",
    logo:<CiCircleInfo/>
  },
  {
    id:5,
    descricao:"Sair",
    logo:<CiLogin/>
  }
];

function Navbara() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 tamanho">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="texto1 me-2"
                    aria-label="Search"
                  />
                </Form>
            <Navbar.Toggle className="menu" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  APTO
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                {menu.map(({id, descricao, logo}) =>(
                  <div key={id}>
                    <p>{descricao} {logo}</p>
                  </div>
                ))}

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default Navbara;
