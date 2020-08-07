import React, { useState, useEffect } from 'react';
import { Container, Search, SearchButton, DivSearch, DivFilter, FilterButton, DataContainer, ViewTable, ButtonTable } from './styles';
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
        console.log(response.data)
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
            <FilterButton onClick={() => { setSelect("infectado") }} >Infectado</FilterButton>
            <FilterButton onClick={() => { setSelect("Temperatura") }} >Temperatura</FilterButton>
            <FilterButton onClick={() => { setSelect("paladar") }} >Falta de Paladar</FilterButton>
            <FilterButton onClick={() => { setSelect("olfato") }} >Falta de Olfato</FilterButton>
            <FilterButton onClick={() => { setSelect("corpo") }} >Dor no Corpo</FilterButton>
            <FilterButton onClick={() => { setSelect("cabeça") }} >Dor de Cabeça</FilterButton>
          </DivFilter>
          <DivFilter>
            <FilterButton onClick={() => { setSelect("garganta") }} >Dor de Garganta</FilterButton>
            <FilterButton onClick={() => { setSelect("calafrio") }} >Calafrios</FilterButton>
            <FilterButton onClick={() => { setSelect("falta_ar") }} >Falta de Ar</FilterButton>
            <FilterButton onClick={() => { setSelect("febre") }} >Febre</FilterButton>
            <FilterButton onClick={() => { setSelect("tosse") }} >Tosse</FilterButton>
            <FilterButton onClick={() => { setSelect("contato_infectdo") }} >Contato com infectado</FilterButton>
          </DivFilter>
          <ViewTable>
            <ButtonTable>Nome</ButtonTable>
            <ButtonTable>Apto</ButtonTable>
            <ButtonTable>Email</ButtonTable>
            <ButtonTable>Numero</ButtonTable>
            <ButtonTable>Numero</ButtonTable>
            <ButtonTable>Sintomas</ButtonTable>
            <ButtonTable>Date</ButtonTable>
          </ViewTable>
          {data.map((map, i) => (
            <table key={i}>
              <tr>
                <td>test</td>
                <td> {map.febre} </td>
                <td> {map.temperatura} </td>
                <td> {map.temperatura} </td>
                <td> {map.data} </td>
              </tr>
            </table>
          ))}
        </DataContainer>
      </Container>
    </>
  );
}

export default Dashboard;