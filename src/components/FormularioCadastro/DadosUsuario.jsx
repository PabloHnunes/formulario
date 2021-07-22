import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

function DadosUsuario({onSubmit}) { 
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({email,senha});
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
            id="senha" 
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
            Cadastrar 
            </Button>
        </form>
    );
}
 
export default DadosUsuario;