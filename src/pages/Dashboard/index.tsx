import React, { useState, useEffect } from 'react';
import { Container, Search, SearchButton, DivSearch, DivFilter, FilterButton, DataContainer, ViewTable, ButtonTable, AlignCenter } from './styles';
import api from '../../services/api';
import Menu from '../../components/Menu';
import { Table, Radio, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, RadioGroup, FormControlLabel, FormLabel, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Data {
  data:String,
  infectado: Boolean,
  contato_infectado:Boolean,
  tosse:Boolean,
  febre:Boolean,
  falta_ar:Boolean,
  calafrio:Boolean,
  corpo:Boolean,
  cabeça:Boolean,
  garganta:Boolean,
  apto:Boolean,
  temperatura:Number,
  id: number,
  email: String,
  matricula: number,
  nome: String,
  numero: number,
  cpf: String,
  user_id: [],
  count: number
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Data[]>([])

  const [severDate, setSeverDate] = useState("")
  const [defaultDate, setDefaultDate] = useState("2020-08-11")
  const [selectDate, setSelectDate] = useState("")
  const [select, setSelect] = useState<String>('data')
  const [selectType, setSelectType] = useState<any>('')
  const [id, setId] = useState([])

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  useEffect(() => {
    setSeverDate(`${day}${month}${year}`)
    const finishDate = `${year}-${month}-${day}`

    const split = finishDate
    const array = split.split('-')
    const mes = ("00" + array[1]).slice(-2)
    const dia = ("00" + array[2]).slice(-2)

    setSelectDate(`${array[0]}-${mes}-${dia}`)
    console.log(defaultDate)
  },[day, defaultDate, month, year])

  useEffect(() => {
    if(selectDate != "") {
      const split = selectDate
      const array = split.split('-')
      const dia = parseInt(array[2])
      const mes = parseInt(array[1])
  
      const finishDate = `${dia}${mes}${array[0]}`
      
      setSeverDate(finishDate)
    }
  },[selectDate])

  useEffect(() => {
    if(data != null) {
      data.map((data:any) => (
        setId(data.user_id)
      ))
    }
  },[data])

  useEffect(() => {
    async function loadForms() {
      if(select == 'data'){
        await api.get(`/form?select=${select}&${select}=${severDate}`)
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
        await api.get(`/form?select=${select}&${select}=true`)
        .then((response:any) => {
          setData(response.data)
          console.log(select)
        })
        .catch(()=>{
          console.log("error")
        })
      }
    }
    loadForms()
  },[id, select, severDate])

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

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
            <RadioGroup aria-label="gender" name="gender1" value={select} onChange={handleChange}>
              <FormControlLabel value="data" control={<Radio />} label="Respondidos" />
              <FormControlLabel value="male" control={<Radio />} label="Não Respondidos" />
              <FormControlLabel value="apto" control={<Radio />} label="Inaptos" />
            </RadioGroup>
          </AlignCenter>
          <AlignCenter>
          <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
          >
            <MenuItem value={'data'}>Data</MenuItem>
            <MenuItem value={'infectado'}>Recuperados</MenuItem>
            <MenuItem value={'temperatura'}>Temperatura</MenuItem>
            <MenuItem value={'contato_infectado'}>Contato com infectado</MenuItem>
            <MenuItem value={'febre'}>Febre</MenuItem>
            <MenuItem value={'tosse'}>Tosse</MenuItem>
            <MenuItem value={'calafrio'}>Calafrios</MenuItem>
            <MenuItem value={'falta_ar'}>Falta de Ar</MenuItem>
            <MenuItem value={'garganta'}>Dor de Garganta</MenuItem>
            <MenuItem value={'cabeça'}>Dor de Cabeça</MenuItem>
            <MenuItem value={'corpo'}>Dor no Corpo</MenuItem>
            <MenuItem value={'olfato'}>Falta de Olfato</MenuItem>
            <MenuItem value={'paladar'}>Falta de Paladar</MenuItem>
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
                {data.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell component="th" scope="row">
                      {data.nome}
                    </TableCell>
                    { data.apto != false ? data.temperatura != 30.2 ? 
                      <TableCell style={{color: '#0f0'}} align="left">Sim</TableCell> : 
                      <TableCell align="left"></TableCell> : 
                      <TableCell style={{color: '#f00'}} align="left">Não</TableCell> 
                    }
                    <TableCell align="left">{data.email}</TableCell>
                    <TableCell align="left">{data.numero}</TableCell>
                    { data.temperatura != 30.2 ? data.temperatura >= 37.5 ?
                      <TableCell style={{color: '#f00'}} align="left">{data.temperatura}</TableCell> :
                      <TableCell style={{color: '#0f0'}} align="left">{data.temperatura}</TableCell> : 
                      <TableCell style={{color: '#f00'}} align="left">Medir Temperatura</TableCell>
                    }
                    { data.count > 0 ? 
                      <TableCell style={{color: '#f00'}} align="left"> {data.count} </TableCell> : 
                      <TableCell style={{color: '#0f0'}} align="left"> {data.count} </TableCell> 
                    }
                    <TableCell align="left">{data.matricula}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DataContainer>
      </Container>
    </>
  );
}

export default Dashboard;