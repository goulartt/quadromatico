import React, { useEffect, forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable, { Action, MaterialTableProps, Icons } from "material-table";
import { useDispatch, useSelector } from 'react-redux';



type TableMaterialProps = {
  columns: any[],
  data: any[],
  title: string,
  editClick: (event: any, rowData: any) => void
  deleteData: (object: any) => void
};

export default function TableMaterial({ columns, data, title, editClick, deleteData }: TableMaterialProps) {

  const icons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const [state, setState] = React.useState({
    columns: columns,
    data: data,
    title: title
  });
  const dispatch = useDispatch();

  return (
    <MaterialTable
      title={title}
      icons={icons}
      columns={columns}
      localization={{
        toolbar: {
          searchPlaceholder: 'Pesquisar',
          searchTooltip: 'Pesquisar',
          nRowsSelected: '{0} linhas(s) selecionadas'
        },
        body: {
          addTooltip: 'Adicionar',
          emptyDataSourceMessage: 'Sem registros.',
          filterRow: {
              filterTooltip: 'Filtro'
          },
          deleteTooltip: 'Deletar',
          editTooltip: 'Editar',
          editRow: {
            cancelTooltip: 'Cancelar',
            deleteText: 'Tem certeza que deseja deletar?',
            saveTooltip: 'Salvar'
          }
        },
        header: {
          actions: 'Ações'
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'linhas'
        },
       
      }}

      data={data}
      editable={{
        
        onRowDelete: oldData =>
          new Promise(resolve => {
            resolve();
            dispatch(deleteData(oldData));
          }),
      }}
      actions={[
        {
          icon: () => <Edit />,
          tooltip: 'Editar',
          onClick: editClick
        }
      ]}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );

}


