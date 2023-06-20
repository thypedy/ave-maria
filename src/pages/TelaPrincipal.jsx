import Navbar from "../components/Navbar";
import Qualquer from "../assets/img/logo.png";
import "../assets/css/TelaPrincipal.css"

import Card from "react-bootstrap/Card";

const coisas = [
  {
    id:1,
    img: Qualquer,
    empresa: "Empresa:",
    nome: "Grande construção"
  },
  {
    id:2,
    img: Qualquer,
    empresa: "Empresa:",
    nome: "Grande construção"
  },
  {
    id:3,
    img: Qualquer,
    empresa: "Empresa:",
    nome: "Grande construção"
  },
]
 
function TelaPrincipal() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="pula">Empresas</h1>
        <div className="row">
          {coisas.map(({id, img, empresa, nome }) => (
            <a href="/telaMapas" className="olink">
            <Card className="row cardas" key={id}>
              <div className="d-flex">
                <div className="image-container">
                  <Card.Img variant="top" className="image" src={img} />
                </div>
                <div className="flex-grow-1">
                  <Card.Body>
                    <Card.Text className="text-right">{empresa}</Card.Text>
                    <Card.Title className="text-right">{nome}</Card.Title>
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
