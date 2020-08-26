/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Table,
  Radio,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ReactExport from 'react-export-excel';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  DivSearch,
  DivFilter,
  DataContainer,
  AlignCenter,
  ViewCenter,
} from './styles';
import api from '../../services/api';
import Menu from '../../components/Menu';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Data {
  data: string;
  infectado: boolean;
  contato_infectado: boolean;
  tosse: boolean;
  febre: boolean;
  falta_ar: boolean;
  calafrio: boolean;
  corpo: boolean;
  cabeça: boolean;
  garganta: boolean;
  apto: boolean;
  temperatura: string;
  id: number;
  email: string;
  matricula: number;
  nome: string;
  numero: number;
  cpf: string;
  user_id: '{}';
  count: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const [severDate, setSeverDate] = useState('');
  const [dateToday, setDateToday] = useState('');
  const [defaultDate] = useState('2020-08-11');
  const [selectDate, setSelectDate] = useState('');
  const [select, setSelect] = useState<string>('data');
  const [selectUser, setSelectUser] = useState<string>('');
  const [choice, setChoice] = useState<string>('select');
  const [relatorioNome, setRelatorioNome] = useState<string>('Respondidos');

  const history = useHistory();

  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  useEffect(() => {
    async function selectDateNow() {
      await setSeverDate(`${day}${month}${year}`);
      const finishDate = await `${year}-${month}-${day}`;

      const split = await finishDate;
      const array = await split.split('-');
      const mes = await `00${array[1]}`.slice(-2);
      const dia = await `00${array[2]}`.slice(-2);

      await setDateToday(`${array[0]}-${mes}-${dia}`);
      await setSelectDate(`${array[0]}-${mes}-${dia}`);
    }

    selectDateNow();
  }, [day, defaultDate, month, year]);

  useEffect(() => {
    async function onSeverDate() {
      if (selectDate !== '') {
        const split = await selectDate;
        const array = await split.split('-');
        const dia = await parseInt(array[2], 10);
        const mes = await parseInt(array[1], 10);

        const finishDate = await `${dia}${mes}${array[0]}`;

        await setSeverDate(finishDate);
      }
    }

    onSeverDate();
  }, [selectDate]);

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

  const handleChangeChoice = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChoice(event.target.value as string);
  };
  useEffect(() => {
    async function loadForms() {
      if (choice == 'notsend') {
        await api
          .get(`/formselect?select=data&selectDate=${severDate}`)
          .then((response: any) => {
            const teste = response.data.map((mapData: any) => mapData.user_id);
            const id = { id: teste };

            api
              .post('/formnotsend', id)
              .then((response: any) => {
                setData(response.data);
                console.log(response.data);
              })
              .catch((response: any) => response);
          });
      }
      if (choice == 'select') {
        if (select == 'data') {
          await api
            .get(`/formselect?select=${select}&selectDate=${severDate}`)
            .then((response: any) => {
              if (
                // eslint-disable-next-line operator-linebreak
                (response.data == null && selectDate == dateToday) ||
                (response.data.length == 0 && selectDate == dateToday)
              ) {
                return;
              }

              setData(response.data);
              console.log(response.data);
            })
            .catch((response: any) => response);
        }
        if (select == 'sintomas') {
          await api
            .get(`/formselect?select=${select}&selectDate=${severDate}`)
            .then((response: any) => {
              setData(response.data);
            })
            .catch((response: any) => response);
        }
        if (select != 'data') {
          await api
            .get(
              `/formselect?select=${select}&${select}=true&selectDate=${severDate}`
            )
            .then((response: any) => {
              setData(response.data);
            })
            .catch((response: any) => response);
        }
      }
      if (choice == 'inapto') {
        if (select == 'data') {
          await api
            .get(`/forminapto?select=${select}&selectDate=${severDate}`)
            .then((response: any) => {
              setData(response.data);
            })
            .catch((response: any) => response);
        }
        if (select != 'data') {
          await api
            .get(
              `/forminapto?select=${select}&${select}=true&selectDate=${severDate}`
            )
            .then((response: any) => {
              setData(response.data);
            })
            .catch((response: any) => response);
        }
      }
    }

    loadForms();
  }, [choice, dateToday, select, selectDate, severDate]);

  const classes = useStyles();

  function handleNavigateToForm(id: any) {
    history.push({
      pathname: '/form',
      state: id,
    });
  }

  function handleNavigateToPerfil(id: any) {
    history.push({
      pathname: '/perfil',
      state: id,
    });
  }

  async function getUserId() {
    await api.get(`/perfilname/${selectUser}`).then((response: any) => {
      history.push({
        pathname: '/perfil',
        state: response.data.id,
      });
    });
  }

  const { ExcelFile } = ReactExport;
  const { ExcelSheet } = ReactExport.ExcelFile;
  const { ExcelColumn } = ReactExport.ExcelFile;

  useEffect(() => {
    if (choice == 'select') {
      setRelatorioNome('Respondidos');
    }
    if (choice == 'inapto') {
      setRelatorioNome('Inaptos');
    }
    if (choice == 'notsend') {
      setRelatorioNome('Não Respondidos');
    }
  }, [choice]);

  return (
    <>
      <Container>
        <Menu />
        <DivSearch>
          <Autocomplete
            id="combo-box-demo"
            options={data}
            getOptionLabel={(data) => data.nome}
            onInputChange={(event, newInputValue) => {
              setSelectUser(newInputValue);
            }}
            style={{ width: 600, marginRight: 25 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Digite um nome"
                variant="outlined"
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setSelectUser(event.target.value as string);
                }}
              />
            )}
          />
          <Button onClick={getUserId} variant="contained" color="primary">
            Pesquisar
          </Button>
        </DivSearch>
        <DataContainer>
          <DivFilter>
            <AlignCenter>
              <FormLabel component="legend">Questionarios</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={choice}
                onChange={handleChangeChoice}
              >
                <FormControlLabel
                  value="select"
                  control={<Radio />}
                  label="Respondidos"
                />
                <FormControlLabel
                  value="notsend"
                  control={<Radio />}
                  label="Não Respondidos"
                />
                <FormControlLabel
                  value="inapto"
                  control={<Radio />}
                  label="Inaptos"
                />
              </RadioGroup>
            </AlignCenter>
            <AlignCenter>
              <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                onChange={handleChangeSelect}
              >
                <MenuItem value="data">Data</MenuItem>
                <MenuItem value="infectado">Recuperados</MenuItem>
                <MenuItem value="temperatura">Temperatura</MenuItem>
                <MenuItem value="visitante">Visitantes</MenuItem>
                <MenuItem value="contato_infectado">
                  Contato com infectado
                </MenuItem>
                <MenuItem value="sintomas">Sintomas</MenuItem>
                <MenuItem value="febre">Febre</MenuItem>
                <MenuItem value="tosse">Tosse</MenuItem>
                <MenuItem value="calafrio">Calafrios</MenuItem>
                <MenuItem value="falta_ar">Falta de Ar</MenuItem>
                <MenuItem value="garganta">Dor de Garganta</MenuItem>
                <MenuItem value="cabeça">Dor de Cabeça</MenuItem>
                <MenuItem value="corpo">Dor no Corpo</MenuItem>
                <MenuItem value="olfato">Falta de Olfato</MenuItem>
                <MenuItem value="paladar">Falta de Paladar</MenuItem>
              </Select>
            </AlignCenter>
            <TextField
              id="date"
              label="Selecione uma data"
              type="date"
              value={selectDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setSelectDate(e.target.value)}
            />
          </DivFilter>
          <ViewCenter>
            <ExcelFile
              filename={`Relatorio Questionario ${relatorioNome} dia ${severDate}`}
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Button variant="contained" color="primary">
                  Gerar Excel
                </Button>
              }
            >
              <ExcelSheet data={data} name="Questionário">
                <ExcelColumn label="Nome" value="nome" />
                <ExcelColumn
                  label="Apto"
                  value={(data) =>
                    data.count >= 0 ? (data.apto ? 'Sim' : 'Não') : ''
                  }
                />
                <ExcelColumn label="Email" value="email" />
                <ExcelColumn label="Celular" value="numero" />
                <ExcelColumn label="Temperatura" value="temperatura" />
                <ExcelColumn label="Sintomas" value="count" />
                <ExcelColumn label="Matricula" value="matricula" />
              </ExcelSheet>
            </ExcelFile>
          </ViewCenter>
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
                {data.map((mapData: any) => (
                  <TableRow key={mapData.id}>
                    {choice != 'notsend' ? (
                      <TableCell
                        onClick={() => handleNavigateToForm(mapData.id)}
                        style={{ cursor: 'pointer' }}
                        component="th"
                        scope="row"
                      >
                        {mapData.nome}
                      </TableCell>
                    ) : (
                      <TableCell
                        onClick={() => handleNavigateToPerfil(mapData.id)}
                        style={{ cursor: 'pointer' }}
                        component="th"
                        scope="row"
                      >
                        {mapData.nome}
                      </TableCell>
                    )}
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
          </TableContainer>
        </DataContainer>
      </Container>
    </>
  );
};

export default Dashboard;
