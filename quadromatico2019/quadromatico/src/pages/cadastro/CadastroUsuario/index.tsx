import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Button, TextField } from '@material-ui/core';
import { ButtonLabel } from 'constants/labels';
import TabelaUsuario from './TabelaUsuario';
import FormUsuario from './FormUsuario';


const CadastroUsuario = () => {
  const classes = useStyles();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');


  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };


  return (
<<<<<<< HEAD
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Usuário">
=======
    <BaseCadastro title="Cadastro de Usuário">
>>>>>>> 531a19ed8772324361e0790bf6d601e11d1d1e0f
      <Button type="submit" variant="contained" onClick={handleClickOpen} className="">
        {ButtonLabel.NOVO}
      </Button>
      <TabelaUsuario ></TabelaUsuario>
      <FormUsuario selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroUsuario;
