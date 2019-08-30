import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';
import FormAula from './FormAula';
import { obterAulasRequest, criarAula, deletarAula } from '../../../store/cadastro/aula/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';
import Aula from 'interfaces/entity/aula';

const CadastroAula = () => {
  const classes = useStyles();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Aula | undefined>(undefined);


  function handleClickOpen() {
    setOpen(true);
  }

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(obterAulasRequest());

  }, []);

  const handleClose = (value: Aula | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if(value) {
      dispatch(criarAula(value));
    }
  };

  const editClickHandler = (event: any, rowData: Aula) => {
    setOpen(true);
    setSelectedValue(rowData);
  }


  const aulas = useSelector(
    ({ aula: { listaAulas } }: ApplicationState) => listaAulas
  );

  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Aula">
      <TableMaterial title='Aulas' data={aulas} columns={[
        { title: "Hora Inicio", field: "horaInicioAula" },
        { title: "Hora Término", field: "horaTerminoAula" },

      ]} editClick={editClickHandler} deleteData={deletarAula} />
      <FormAula selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroAula;
