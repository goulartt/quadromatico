import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Button, TextField } from '@material-ui/core';
import { ButtonLabel } from 'constants/labels';
import TabelaDisciplina from './TabelaDisciplina';
import FormDisciplina from './FormDisciplina';
import Recurso from 'interfaces/entity/recurso';


const CadastroDisciplina = () => {
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
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Disciplinas">
      <Button type="submit" variant="contained" onClick={handleClickOpen} className="">
        {ButtonLabel.NOVO}
      </Button>
      <TabelaDisciplina ></TabelaDisciplina>
      <FormDisciplina selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroDisciplina;
