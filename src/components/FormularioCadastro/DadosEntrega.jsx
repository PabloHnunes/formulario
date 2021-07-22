import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({onSubmit}) {
    const [cep,setCep] = useState("");
    const [endereco,setEndereco] = useState("");
    const [numero,setNumero] = useState("");
    const [estado,setEstado] = useState("");
    const [cidade,setCidade] = useState("");

    return(
        <form onSubmit={
            (evento) => {
                evento.preventDefault();
                onSubmit({cep,endereco,numero,estado,cidade});
            }
        }>
            <TextField
            value={cep}
            onChange={(evento) =>{
                setCep(evento.target.value);
            }}  
            id="cep" 
            label="CEP" 
            type="number" 
            margin="normal"
            variant="outlined" 
            />
            <TextField
            value={endereco}
            onChange={(evento) =>{
                setEndereco(evento.target.value);
            }}              
            id="endreco" 
            label="Endereço" 
            type="text" 
            margin="normal"
            variant="outlined" 
            fullWidth/>
            <TextField
            value={numero}
            onChange={(evento) =>{
                setNumero(evento.target.value);
            }}  
            id="numero" 
            label="Número" 
            type="number" 
            margin="normal"
            variant="outlined" 
            />
            <TextField
            value={estado}
            onChange={(evento) =>{
                setEstado(evento.target.value);
            }}  
            id="estado" 
            label="Estado" 
            type="text" 
            margin="normal"
            variant="outlined" 
            />
            <TextField
            value={cidade}
            onChange={(evento) =>{
                setCidade(evento.target.value);
            }}  
            id="cidade" 
            label="Cidade" 
            type="text" 
            margin="normal"
            variant="outlined" 
            />
            <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
            > 
            Finalizar Cadastro 
            </Button>
        </form>
    );
}

export default DadosEntrega;