import "../assets/css/Home.css";
import Qualquer from "../assets/img/logo.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <html>
      <body className="corpo">
        <Container>
          <Image className="celular" src={Qualquer} fluid />
          <div className="botao">
            <a href="/login" className="login">
              Login
            </a>
            <a href="/cadastro" className="cadastro">
              Cadastre-se
            </a>
          </div>
        </Container>
      </body>
    </html>
  );
}
export default Home;
