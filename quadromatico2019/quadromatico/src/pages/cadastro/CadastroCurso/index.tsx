import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import FormCurso from './FormCurso';
import { obterCursosRequest, criarCurso, deletarCurso } from '../../../store/cadastro/curso/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';
import Curso from 'interfaces/entity/curso';

const CadastroCurso = () => {
  const classes = useStyles();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Curso | undefined>(undefined);


  function handleClickOpen() {
    setOpen(true);
  }

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(obterCursosRequest());

  }, []);

  const handleClose = (value: Curso | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if(value) {
      dispatch(criarCurso(value));
    }
  };

  const editClickHandler = (event: any, rowData: Curso) => {
    setOpen(true);
    setSelectedValue(rowData);
  }


  const Cursos = useSelector(
    ({ curso: { cursosDisponiveis } }: ApplicationState) => cursosDisponiveis
  );

  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Curso">
      <TableMaterial title='Cursos' data={Cursos} columns={[
        { title: "Quantidade de Períodos", field: "qtdePeriodos" }

      ]} editClick={editClickHandler} deleteData={deletarCurso} />
      <FormCurso selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroCurso;
