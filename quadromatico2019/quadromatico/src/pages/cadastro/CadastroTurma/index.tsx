import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import { Button, TextField } from '@material-ui/core';
import { ButtonLabel } from 'constants/labels';
import FormTurma from './FormTurma';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';
import { obterTurmasRequest, criarTurma, deletarTurma } from '../../../store/cadastro/turma/actions';
import { ApplicationState } from 'store';
import Turma from 'interfaces/entity/turma';
m

const CadastroTurma = () => {
  const dispatch = useDispatch();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Turma | undefined>(undefined);


  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: Turma | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if (value) {
      dispatch(criarTurma(value));
    }
  };
  useEffect(() => {
    dispatch(obterTurmasRequest());

  }, []);

  const turmas = useSelector(
    ({ turma: { listaTurmas } }: ApplicationState) => listaTurmas
  );
  const classes = useStyles();


  const editClickHandler = (event: any, rowData: Turma) => {
    setOpen(true);
    setSelectedValue(rowData);
  }

  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Turmas">
      <TableMaterial title='Turmas' data={turmas} columns={[
        { title: "Código", field: "codigo" },
        { title: "Descrição", field: "descricao" },
        {
          title: "É espaço físico?",
          field: "isEspacoFisico",
          render: (rowData: any) => {
            if (rowData.isEspacoFisico)
              return <span>S</span>
            else
              return <span>N</span>
          },
        }

      ]} editClick={editClickHandler} deleteData={deletarTurma} />
      <FormTurma selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroTurma;
