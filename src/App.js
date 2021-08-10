import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';
import "./App.css";

import {validarCpf, validarNome, validarSenha} from './models/cadastro';
import ValidacoesCadastro from "./contexts/Validacoes";
class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCpf, senha:validarSenha, nome:validarNome}}>
        <FormularioCadastro onSubmit={whySubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function whySubmit(dados){
  console.log(dados);
}

export default App;
