import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import BaseCadastro from '../BaseCadastro';

import FormUsuario from './FormUsuario';
import Usuario from 'interfaces/entity/usuario';
import { obterUsuariosRequest, criarUsuario, deletarUsuario } from '../../../store/cadastro/usuario/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import TableMaterial from '../../../components/TableMaterial';

const CadastroUsuario = () => {
  const classes = useStyles();
  const dispatch = useDispatch();



  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Usuario | undefined>(undefined);


  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = (value: Usuario | undefined) => {
    setOpen(false);
    setSelectedValue(undefined);
    if (value) {
      dispatch(criarUsuario(value));
    }
  };

  useEffect(() => {
    dispatch(obterUsuariosRequest());

  }, []);

  const editClickHandler = (event: any, rowData: Usuario) => {
    setOpen(true);
    setSelectedValue(rowData);
  }

  const usuarios = useSelector(
    ({ usuario: { listaUsuarios } }: ApplicationState) => listaUsuarios
  );


  return (
    <BaseCadastro handleClick={handleClickOpen} title="Cadastro de Usuário">
      <TableMaterial title='Usuários' data={usuarios} columns={[
        { title: "Código", field: "id" },
        { title: "Login", field: "login" },
      ]} editClick={editClickHandler} deleteData={deletarUsuario} />
      <FormUsuario selectedValue={selectedValue} open={open} onClose={handleClose} />

    </BaseCadastro>
  );
};



export default CadastroUsuario;
