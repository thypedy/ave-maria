import Navbar from "../components/Navbar";
import Qualquer from "../assets/img/logo.png";
import "../assets/css/TelaMapas.css"

import Card from "react-bootstrap/Card";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { SlArrowLeft } from "react-icons/sl";

const penas = [
  {
    id:1,
    img: Qualquer,
    empresa: "Casa Frederico da Silva",
    local: "Rua engraçada 401",
    subscrito: "Grande construção"
  },
  {
    id:2,
    img: Qualquer,
    empresa: "Empresa:",
    local: "Rua engraçada 401",
    subscrito: "Grande construção"
  },
  {
    id:3,
    img: Qualquer,
    empresa: "Empresa:",
    local: "Rua engraçada 401",
    subscrito: "Grande construção"
  },
]
 
function TelaPrincipal() {
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="row centralizado">
        <a href="/telaPrincipal" className="linsk"><SlArrowLeft/> Voltar</a>
        </div>
        <h1 className="pula">5.040 plantas gratuitas da empresa XXX</h1>
        <div className="row">
          {penas.map(({id, img, empresa, local, subscrito }) => (
            <a href="/telaMapas" className="olink">
            <Card className="row cardas" key={id}>
              <div className="d-flex">
                <div className="image-container">
                  <Card.Img variant="top" className="image" src={img} />
                </div>
                <div className="flex-grow-1">
                  <Card.Body>
                    <Card.Title className="text-right">{empresa}</Card.Title>
                    <Card.Title className="text-right"><HiOutlineLocationMarker/> {local}</Card.Title>
                    <Card.Text className="text-right">{subscrito}</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TelaPrincipal;
