import React,{useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({onSubmit, validarCpf}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf:{valido:true, texto:""}
  });

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({nome, sobrenome, cpf, promocoes, novidades});
    }}
      >
      <TextField
      value={nome}
      onChange={
        (event) => {
          setNome(event.target.value);       
        }} 
      id="nome" 
      label="Nome" 
      margin="normal"
      variant="outlined" 
      fullWidth />
      <TextField 
      value={sobrenome}
      onChange={
       (event) =>{
        setSobrenome(event.target.value);       
        }} 
      id="sobrenome" 
      label="Sobrenome" 
      margin="normal" 
      variant="outlined"
      fullWidth />
      <TextField
      value={cpf}
      onChange={
      (event) =>{
      setCpf(event.target.value);       
      }}
      onBlur={(event) => {
        const cpfValido = validarCpf(cpf);
        setErros({cpf:cpfValido});
      }}
      error={!erros.cpf.valido}
      helperText={erros.cpf.texto}  
      id="cpf" 
      label="CPF" 
      margin="normal" 
      variant="outlined"
      fullWidth />
      <FormControlLabel
        label="Promoções"
        checked={promocoes}
        control={<Switch onChange={(event)=> {
          setPromocoes(event.target.checked)
        }} 
        name="Promoções" 
         
        color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch 
          checked={novidades} 
          onChange={(event)=> {
          setNovidades(event.target.checked)
        }} 
          name="Novidades" 
          
          color="primary" />}
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
