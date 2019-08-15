import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Button, TextField } from '@material-ui/core';
import { ButtonLabel } from 'constants/labels';
import TabelaRecurso from './TabelaRecurso';
import FormRecurso from './FormRecurso';
import Recurso from 'interfaces/entity/recurso';


const CadastroRecurso = () => {
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
    <BaseCadastro title="Cadastro de recursos">
      <Button type="submit" variant="contained" onClick={handleClickOpen} className="">
        {ButtonLabel.NOVO}
      </Button>
      <TabelaRecurso ></TabelaRecurso>
      <FormRecurso selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroRecurso;
