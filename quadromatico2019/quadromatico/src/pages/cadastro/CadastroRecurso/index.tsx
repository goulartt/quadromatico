import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';

import FormRecurso from './FormRecurso';
import Recurso from 'interfaces/entity/recurso';
import superStyles from '../BaseCadastro/styles';
import { obterRecursosRequest, criarRecurso, deletarRecurso } from '../../../store/cadastro/recurso/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';

const CadastroRecurso = () => {
  const classes = useStyles();
  const superClasses = superStyles();
  const dispatch = useDispatch();


  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Recurso | undefined>(undefined);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: Recurso | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if(value) {
      dispatch(criarRecurso(value));
    }
  };

  const recursos = useSelector(
    ({ recurso: { listaRecursos } }: ApplicationState) => listaRecursos
  );


  useEffect(() => {
    dispatch(obterRecursosRequest());

  }, []);


  const editClickHandler = (event: any, rowData: Recurso) => {
    setOpen(true);
    setSelectedValue(rowData);
  }


  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de recursos">

      <TableMaterial title='Recursos' data={recursos} columns={[
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

      ]} editClick={editClickHandler} deleteData={deletarRecurso} />

      <FormRecurso selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroRecurso;
