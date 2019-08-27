import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Button, TextField } from '@material-ui/core';
import { ButtonLabel } from 'constants/labels';
import TabelaTurma from './TabelaTurma';
import FormTurma from './FormTurma';


const CadastroTurma = () => {
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
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Turmas">
      <Button type="submit" variant="contained" onClick={handleClickOpen} className="">
        {ButtonLabel.NOVO}
      </Button>
      <TabelaTurma ></TabelaTurma>
      <FormTurma selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroTurma;
