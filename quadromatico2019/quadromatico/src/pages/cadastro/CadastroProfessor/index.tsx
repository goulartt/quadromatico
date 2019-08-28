import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';

import FormProfessor from './FormProfessor';
import { obterProfessoresRequest, criarProfessor, deletarProfessor } from '../../../store/cadastro/professor/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';
import Professor from 'interfaces/entity/professor';

const CadastroProfessor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Professor | undefined>(undefined);


  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: Professor | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if (value) {
      dispatch(criarProfessor(value));
    }
  };

  useEffect(() => {
    dispatch(obterProfessoresRequest());

  }, []);

  const editClickHandler = (event: any, rowData: Professor) => {
    setOpen(true);
    setSelectedValue(rowData);
  }

  const professores = useSelector(
    ({ professor: { listaProfessores } }: ApplicationState) => listaProfessores
  );

  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Professores">

      <TableMaterial title='Professores' data={professores} columns={[
        { title: "Código", field: "id" },
        { title: "Nome", field: "nome" },
      ]} editClick={editClickHandler} deleteData={deletarProfessor} />
      <FormProfessor selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroProfessor;
