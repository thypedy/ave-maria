import "../assets/css/Cadastro.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Qualquer from "../assets/img/logo.png";

function Cadastro() {
  return (
    <Container>
      <Image className="celular" src={Qualquer} fluid />
      <Form className="form">
        <h1 className="texto">Cadastro</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className="textos" type="email" placeholder="E-mail" />
          <Form.Control className="textos" type="Nome" placeholder="Nome" />
          <Form.Control
            className="textos"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Senha"
          />
          <Form.Control
            className="textos"
            type="Confirmar Senha"
            placeholder="Confirmar Senha"
          />
        </Form.Group>
        <div className="alinhar">
          <Form.Check
            className="check_button"
            type="switch"
            id="custom-switch"
            label="Lembrar da senha"
          />
          <a href="/login" className="voltarlogin">
            Voltar ao login
          </a>
        </div>
        <a href="/login" className="logar">
          Cadastro
        </a>
      </Form>
    </Container>
  );
}
export default Cadastro;
