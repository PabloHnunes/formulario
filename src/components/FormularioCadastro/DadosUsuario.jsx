import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import ValidacoesCadastro from '../../contexts/Validacoes';
import useErros from '../../hooks/useErros';

function DadosUsuario({onSubmit}) { 
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                onSubmit({email,senha});
            }
        }}>
            <TextField
            value={email}
            onChange={(evento) =>{
                setEmail(evento.target.value);
            }} 
            id="email" 
            label="Email" 
            type="email" 
            margin="normal"
            variant="outlined"
            required 
            fullWidth/>
            <TextField 
            value={senha}
            onChange={(evento) =>{
                setSenha(evento.target.value);
            }} 
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha"
            name="senha" 
            label="Senha" 
            type="password" 
            margin="normal"
            required
            variant="outlined" 
            fullWidth/>
            <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            > 
            Próximo 
            </Button>
        </form>
    );
}
 
export default DadosUsuario;