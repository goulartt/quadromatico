
import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { obterAulasRequest } from '../../../../store/cadastro/aula/actions';
import { ApplicationState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import Cancel from '@material-ui/icons/Cancel';
import Edit from '@material-ui/icons/Edit';

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

export default function TabelaAula() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(obterAulasRequest());

    }, []);

    const Aulas = useSelector(
        ({ aula: { listaAulas } }: ApplicationState) => listaAulas
    );
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Código</StyledTableCell>
                        <StyledTableCell align="right">Hora Inicio</StyledTableCell>
                        <StyledTableCell align="right">Hora Terminio</StyledTableCell>

                        <StyledTableCell align="right">Ações</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {Aulas.map(row => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>

                            <StyledTableCell align="right">{row.horaInicioAula}</StyledTableCell>
                            <StyledTableCell align="right">{row.horaTerminoAula}</StyledTableCell>

                            <StyledTableCell align="right">
                                <Edit />
                                <Cancel />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
