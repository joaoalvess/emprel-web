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

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Search,
  DivSearch,
  DivFilter,
  DataContainer,
  AlignCenter,
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

  const [severDate, setSeverDate] = useState("")
  const [defaultDate, setDefaultDate] = useState("2020-08-11")
  const [selectDate, setSelectDate] = useState("")
  const [select, setSelect] = useState<String>('data')
  const [choice, setChoice] = useState<String>('select')
  const [selectType, setSelectType] = useState<any>('')
  const [id, setId] = useState([])

  const history = useHistory();

  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  useEffect(() => {
    setSeverDate(`${day}${month}${year}`);
    const finishDate = `${year}-${month}-${day}`;

    const split = finishDate;
    const array = split.split('-');
    const mes = `00${array[1]}`.slice(-2);
    const dia = `00${array[2]}`.slice(-2);

    setSelectDate(`${array[0]}-${mes}-${dia}`);
  }, [day, defaultDate, month, year]);

  useEffect(() => {
    if (selectDate !== '') {
      const split = selectDate;
      const array = split.split('-');
      const dia = parseInt(array[2], 10);
      const mes = parseInt(array[1], 10);

      const finishDate = `${dia}${mes}${array[0]}`;

      setSeverDate(finishDate);
    }
  }, [selectDate]);

  useEffect(() => {
    if (data != null) {
      const teste = data.map((mapData: any) => mapData.user_id);

      console.log(teste);
    }
  }, [data, id]);

  useEffect(() => {
    async function loadForms() {
      if (choice == "select") {
        if(select == 'data'){
          await api.get(`/formselect?select=${select}&selectDate=${severDate}`)
          .then((response:any) => {
            if(response.data == null || response.data.length == 0){
              return
            }
            setData(response.data)
            console.log(select)
          })
          .catch(()=>{
            console.log("error")
          })
        }
        if(select != 'data') {
          await api.get(`/formselect?select=${select}&${select}=true&selectDate=${severDate}`)
          .then((response:any) => {
            setData(response.data)
            console.log(select)
          })
          .catch(()=>{
            console.log("error")
          })
        }
      }
      if (choice == "inapto") {
        if (select == "data") {
          await api.get(`/forminapto?select=${select}&selectDate=${severDate}`)
            .then((response: any) => {
              if (response.data == null || response.data.length === 0) {
                return;
              }
              setData(response.data);
              console.log(select);
            })
            .catch(() => {
              console.log("error");
            });
        }
        if (select != "data") {
          await api.get(
              `/forminapto?select=${select}&${select}=true&selectDate=${severDate}`
            )
            .then((response: any) => {
              setData(response.data);
              console.log(select);
            })
            .catch(() => {
              console.log("error");
            });
        }
      }
    }

    loadForms();
  }, [choice, id, select, severDate]);

  const classes = useStyles();

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

  const handleChangeChoice = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChoice(event.target.value as string);
  };

  function handleNavigateToForm(id: any) {
    history.push({
      pathname: '/form',
      state: id,
    });
  }

  return (
    <>
      <Container>
        <Menu />
        <DivSearch>
          <Search />
          <Button variant="contained" color="primary">
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
                <MenuItem value="contato_infectado">
                  Contato com infectado
                </MenuItem>
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="left">Apto</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Numero</TableCell>
                  <TableCell align="left">Temperatura</TableCell>
                  <TableCell align="left">Sintomas</TableCell>
                  <TableCell align="left">Matricula</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((mapData: any) => (
                  <TableRow key={mapData.id}>
                    <TableCell
                      onClick={() => handleNavigateToForm(mapData.id)}
                      style={{ cursor: 'pointer' }}
                      component="th"
                      scope="row"
                    >
                      {mapData.nome}
                    </TableCell>
                    {mapData.apto !== false ? (
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
