import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro 
        onSubmit={whySubmit} 
        validarCpf={validarCpf}
        />
      </Container>
    );
  }
}

function whySubmit(dados){
  console.log(dados);
}
function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto:"CPF precisa ter 11 digitos!"}
  }else{
    return {valido: true, texto:""}
  }
}

export default App;
