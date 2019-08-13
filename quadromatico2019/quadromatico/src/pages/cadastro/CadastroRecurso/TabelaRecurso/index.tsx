
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#FF9522',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'theme.palette.background.default',
        },
    },
}))(TableRow);


function createData(codigo: any, descricao: any, curso: any, espacoFisico: any) {
    return { codigo, descricao, curso, espacoFisico };
}

const rows = [
    createData(1, 'Recurso 1', 'Curso 1', 'S'),
    createData(2, 'Recurso 2', 'Curso 1', 'S'),
    createData(3, 'Recurso 3', 'Curso 1', 'S'),
    createData(4, 'Recurso 4', 'Curso 1', 'S'),
    createData(5, 'Recurso 5', 'Curso 1', 'S'),
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

export default function TabelaRecurso() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Código</StyledTableCell>
                        <StyledTableCell align="right">Descrição</StyledTableCell>
                        <StyledTableCell align="right">Curso</StyledTableCell>
                        <StyledTableCell align="right">Espaço Físico</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.codigo}>
                            <StyledTableCell component="th" scope="row">
                                {row.codigo}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.descricao}</StyledTableCell>
                            <StyledTableCell align="right">{row.curso}</StyledTableCell>
                            <StyledTableCell align="right">{row.espacoFisico}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}