/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/api';
import {
  Container,
  Title,
  ImageLogo,
  Formulario,
  Cargo,
  ViewCenter,
} from './styles';
import { Button } from '../../components/Button/styles';
import Logo from '../../assets/logo.png';

interface Location {
  id: number;
}

interface Data {
  data: string;
  email: string;
  nome: string;
  numero: string;
}

interface FormData {
  infectado: boolean;
  contato_infectado: boolean;
  tosse: boolean;
  febre: boolean;
  falta_ar: boolean;
  calafrio: boolean;
  corpo: boolean;
  cabeça: boolean;
  garganta: boolean;
  olfato: boolean;
  paladar: boolean;
  apto: boolean;
}

const Perfil: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);
  const [formData, setFormData] = useState<FormData[]>([]);

  const history = useHistory();
  const location = useLocation<Location>();
  const id = location.state;

  useEffect(() => {
    api.get(`user/${id}`).then((response: any) => {
      setData(response.data);
      setFormData(response.data.forms);
      console.log(response.data);
    });
  }, [id]);

  function handleNavigatetoBack() {
    history.goBack();
  }

  function handleNavigateToForm(id: any) {
    history.push({
      pathname: '/form',
      state: id,
    });
  }
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <Container>
      <Formulario>
        <ImageLogo src={Logo} alt="Logo" />
        <Title>{data.nome}</Title>
        <Cargo>{data.email}</Cargo>
        <Cargo>Celular: {data.numero}</Cargo>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="left">Apto</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Celular</TableCell>
                <TableCell align="left">Temperatura</TableCell>
                <TableCell align="left">Sintomas</TableCell>
                <TableCell align="left">Matricula</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((mapData: any) => (
                <TableRow key={mapData.id}>
                  <TableCell
                    onClick={() => handleNavigateToForm(mapData.id)}
                    style={{ cursor: 'pointer' }}
                    component="th"
                    scope="row"
                  >
                    {mapData.nome}
                  </TableCell>
                  {mapData.count >= 0 ? (
                    mapData.apto != false ? (
                      mapData.temperatura != 30.2 ? (
                        <TableCell style={{ color: '#0f0' }} align="left">
                          Sim
                        </TableCell>
                      ) : (
                        <TableCell align="left" />
                      )
                    ) : (
                      <TableCell style={{ color: '#f00' }} align="left">
                        Não
                      </TableCell>
                    )
                  ) : (
                    <TableCell align="left" />
                  )}
                  <TableCell align="left">{mapData.email}</TableCell>
                  <TableCell align="left">{mapData.numero}</TableCell>
                  {mapData.temperatura != 30.2 ? (
                    mapData.temperatura >= 37.5 ? (
                      <TableCell style={{ color: '#f00' }} align="left">
                        {mapData.temperatura}
                      </TableCell>
                    ) : (
                      <TableCell style={{ color: '#0f0' }} align="left">
                        {mapData.temperatura}
                      </TableCell>
                    )
                  ) : (
                    <TableCell style={{ color: '#f00' }} align="left">
                      Medir Temperatura
                    </TableCell>
                  )}
                  {mapData.count > 0 ? (
                    <TableCell style={{ color: '#f00' }} align="left">
                      {mapData.count}
                    </TableCell>
                  ) : (
                    <TableCell style={{ color: '#0f0' }} align="left">
                      {mapData.count}
                    </TableCell>
                  )}
                  <TableCell align="left">{mapData.matricula}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ViewCenter>
            <Button onClick={handleNavigatetoBack}>Voltar</Button>
          </ViewCenter>
        </TableContainer>
      </Formulario>
    </Container>
  );
};

export default Perfil;
