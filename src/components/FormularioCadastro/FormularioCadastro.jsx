import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({onSubmit, validarCpf}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    console.log(dadosColetados);
  })
  const formulario = [
  <DadosUsuario onSubmit={coletarDados}/>,
  <DadosPessoais onSubmit={coletarDados} validarCpf={validarCpf} />,
  <DadosEntrega onSubmit={coletarDados}/>
];
  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    next();
  }
  function next(){
    setEtapaAtual(etapaAtual+1);
  }
  
  return (
    <>
      {formulario[etapaAtual]}
    </>
  );
}



export default FormularioCadastro;
