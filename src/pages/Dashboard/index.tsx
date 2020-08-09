import React, { useState, useEffect } from 'react';
import { Container, Search, SearchButton, DivSearch, DivFilter, FilterButton, DataContainer, ViewTable } from './styles';
import api from '../../services/api'
import Menu from '../../components/Menu'

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
  id: number
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Data[]>([])

  const [severDate, setSeverDate] = useState("")
  const [select, setSelect] = useState<String>('data')
  const [selectType, setSelectType] = useState<any>('')

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  useEffect(() => {
    setSeverDate(`${day}${month}${year}`)
  },[day, month, year])

  useEffect(() => {
    async function loadForms() {
      await api.get(`/form?select=${select}&${select}=${severDate}`)
      .then((response:any) => {
        setData(response.data)
      })
      .catch(()=>{
        console.log("error")
      })
      if(select != 'data') {
        await api.get(`/form?select=${select}&${select}=true`)
        .then((response:any) => {
          setData(response.data)
        })
        .catch(()=>{
          console.log("error")
        })
      }
    }
    loadForms()
  },[select, severDate])

  return (
    <>
      <Menu />
      <Container>
        <DivSearch>
          <Search />
          <SearchButton>Pesquisar</SearchButton>
        </DivSearch>
        <DataContainer>
          <DivFilter>
            <FilterButton>Infectado</FilterButton>
            <FilterButton>Temperatura</FilterButton>
            <FilterButton>Falta de Paladar</FilterButton>
            <FilterButton>Falta de Olfato</FilterButton>
            <FilterButton>Dor no Corpo</FilterButton>
            <FilterButton>Dor de Cabeça</FilterButton>
          </DivFilter>
          <DivFilter>
            <FilterButton>Dor de Garganta</FilterButton>
            <FilterButton>Calafrios</FilterButton>
            <FilterButton>Falta de Ar</FilterButton>
            <FilterButton>Febre</FilterButton>
            <FilterButton>Tosse</FilterButton>
            <FilterButton>Contato com infectado</FilterButton>
          </DivFilter>
          {data.map((map, i) => (
            <ViewTable key={i}>
              <h1> {map.temperatura} </h1>
            </ViewTable>
          ))}
        </DataContainer>
      </Container>
    </>
  );
}

export default Dashboard;