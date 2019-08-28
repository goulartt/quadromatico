import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';

import FormDisciplina from './FormDisciplina';
import { obterDisciplinasRequest, criarDisciplina, deletarDisciplina } from '../../../store/cadastro/disciplina/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';
import Disciplina from 'interfaces/entity/disciplina';

const CadastroDisciplina = () => {
  const classes = useStyles();
  const dispatch = useDispatch();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Disciplina | undefined>(undefined);


  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: Disciplina | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if (value) {
      dispatch(criarDisciplina(value));
    }
  };

  useEffect(() => {
    dispatch(obterDisciplinasRequest());

  }, []);

  const editClickHandler = (event: any, rowData: Disciplina) => {
    setOpen(true);
    setSelectedValue(rowData);
  }

  const disciplinas = useSelector(
    ({ disciplina: { listaDisciplinas } }: ApplicationState) => listaDisciplinas
  );

  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Disciplinas">
       <TableMaterial title='Disciplinas' data={disciplinas} columns={[
        { title: "Código", field: "id" },
        { title: "Nome", field: "nome" },
      ]} editClick={editClickHandler} deleteData={deletarDisciplina} />
      <FormDisciplina selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroDisciplina;
