/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import {
  Container,
  SimouNao,
  Sintomas,
  ViewCenter,
  ViewTemp,
  Form,
  ImageLogo,
  LastForm,
  Letra,
  LetraB,
  LetraD,
  Pergunta,
  Title,
  TemperaturaAlta,
  TextTemp,
  TemperaturaNormal,
  TemperaturaMuitoAlta,
  Select,
  TempButton,
  DataContainer,
} from './styles';
import { Input, Label } from '../../components/Input/styles';
import { Button } from '../../components/Button/styles';
import api from '../../services/api';
import Logo from '../../assets/logo.png';
import Menu from '../../components/Menu';

const Visitante: React.FC = () => {
  const [selectUser, setSelectUser] = useState('');
  const [selectEmail, setSelectEmail] = useState('');
  const [selectCpf, setSelectCpf] = useState('');
  const [selectNumero, setSelectNumero] = useState<number>();
  const [severDate, setSeverDate] = useState('');

  const [selectInfectado, setSelectInfectado] = useState(false);
  const [selectContato, setSelectContato] = useState<boolean>(false);

  const [selectFebre, setSelectFebre] = useState<boolean>(false);
  const [calafrios, setCalafrios] = useState<boolean>(false);
  const [ar, setAr] = useState<boolean>(false);
  const [selectTosse, setSelectTosse] = useState<boolean>(false);
  const [selectGarganta, setSelectGarganta] = useState<boolean>(false);
  const [selectCabeça, setSelectCabeça] = useState<boolean>(false);
  const [selectCorpo, setSelectCorpo] = useState<boolean>(false);
  const [selectOlfato, setSelectOlfato] = useState<boolean>(false);
  const [selectPaladar, setSelectPaladar] = useState<boolean>(false);
  const [selectTemperatura, setSelectTemperatura] = useState(36.0);

  const [estaApto, setEstaApto] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const history = useHistory();

  useEffect(() => {
    if (selectTemperatura >= 37.5 || selectContato == true || totalCount > 2) {
      setEstaApto(false);

      if (selectInfectado == true) {
        if (selectTemperatura >= 37.5) {
          setEstaApto(false);
        } else {
          setEstaApto(true);
        }
      }
    } else {
      setEstaApto(true);
    }
  }, [selectInfectado, selectContato, totalCount, selectTemperatura]);

  const date = new Date().getDate(); // Current Date
  const month = new Date().getMonth() + 1; // Current Month
  const year = new Date().getFullYear();

  useEffect(() => {
    setSeverDate(`${date}${month}${year}`);
  }, [date, month, year]);

  async function handleSubmit() {
    const nome = selectUser;
    const email = selectEmail;
    const cpf = selectCpf;
    const numero = selectNumero;
    const data = severDate;
    const infectado = selectInfectado;
    const contato_infectado = selectContato;
    const febre = selectFebre;
    const calafrio = calafrios;
    const falta_ar = ar;
    const tosse = selectTosse;
    const garganta = selectGarganta;
    const cabeça = selectCabeça;
    const corpo = selectCorpo;
    const olfato = selectOlfato;
    const paladar = selectPaladar;
    const apto = estaApto;
    const temperatura = selectTemperatura;
    const count = totalCount;

    const formData = {
      nome,
      email,
      cpf,
      numero,
      data,
      infectado,
      contato_infectado,
      febre,
      calafrio,
      falta_ar,
      tosse,
      garganta,
      cabeça,
      corpo,
      olfato,
      paladar,
      apto,
      temperatura,
      count,
    };

    await api
      .post('/cadastrovisitante', formData)
      .then(() => {
        alert('Visitante Cadastrado com sucesso!');
        history.push('/dashboard');
      })
      .catch(() => {
        alert('Ocorreu um erro tente novamente!');
      });
  }

  function handleChangeInfectado(e: any) {
    if (e == 'true') {
      setSelectInfectado(true);
    }
    if (e == 'false') {
      setSelectInfectado(false);
    }
  }

  function handleChangeFebre(e: any) {
    if (e == 'true') {
      setSelectFebre(true);
      setTotalCount(totalCount + 1);
      setSelectTemperatura(37.0);
    }
    if (e == 'false') {
      setSelectFebre(false);
      setTotalCount(totalCount - 1);
      setSelectTemperatura(30.2);
    }
  }

  function handleChangeCalafrios(e: any) {
    if (e == 'true') {
      setCalafrios(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setCalafrios(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeFaltaAr(e: any) {
    if (e == 'true') {
      setAr(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setAr(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeCabeça(e: any) {
    if (e == 'true') {
      setSelectCabeça(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setSelectCabeça(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeGarganta(e: any) {
    if (e == 'true') {
      setSelectGarganta(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setSelectGarganta(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeTosse(e: any) {
    if (e == 'true') {
      setSelectTosse(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setSelectTosse(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeOlfato(e: any) {
    if (e == 'true') {
      setSelectOlfato(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setSelectOlfato(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangePaldar(e: any) {
    if (e == 'true') {
      setSelectPaladar(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setSelectPaladar(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeCorpo(e: any) {
    if (e == 'true') {
      setSelectCorpo(true);
      setTotalCount(totalCount + 1);
    }
    if (e == 'false') {
      setSelectCorpo(false);
      setTotalCount(totalCount - 1);
    }
  }

  function handleChangeContato(e: any) {
    if (e == 'true') {
      setSelectContato(true);
    }
    if (e == 'false') {
      setSelectContato(false);
    }
  }

  function aumentaTemperatura() {
    const tempAumentado: any = selectTemperatura + 0.1;
    const newTemp = parseFloat(tempAumentado.toFixed(2));

    return setSelectTemperatura(newTemp);
  }

  function diminueTemperatura() {
    const tempDiminuido: any = selectTemperatura - 0.1;
    const newTemp = parseFloat(tempDiminuido.toFixed(2));

    return setSelectTemperatura(newTemp);
  }

  return (
    <Container>
      <Menu />
      <DataContainer>
        <ImageLogo src={Logo} />
        <Title>Cadastrar Visitante</Title>
        <Label>Nome</Label>
        <Input
          value={selectUser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSelectUser(e.target.value);
          }}
        />
        <Label>Email</Label>
        <Input
          value={selectEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSelectEmail(e.target.value);
          }}
        />
        <Label>Cpf</Label>
        <Input
          value={selectCpf}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSelectCpf(e.target.value);
          }}
        />
        <Label>Celular</Label>
        <Input
          value={selectNumero}
          onChange={(e: any) => setSelectNumero(e.target.value)}
        />
        <Pergunta>1. Você teve Covid-19?</Pergunta>
        <Select
          name="select"
          onChange={(e) => handleChangeInfectado(e.target.value)}
        >
          <option value="true">Sim</option>
          <option value="false" selected>
            Não
          </option>
        </Select>
        <Pergunta>
          2. Você apresentou algum dos seguintes sintomas nas últimas 24 horas?
        </Pergunta>
        <Form>
          <Sintomas>
            <SimouNao>
              <Letra>A. Febre</Letra>
              <Select
                name="select"
                onChange={(e) => handleChangeFebre(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
            <SimouNao>
              <LetraB>B. Calafrios</LetraB>
              <Select
                name="select"
                onChange={(e) => handleChangeCalafrios(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
          </Sintomas>
          <Sintomas>
            <SimouNao>
              <Letra>C. Falta de Ar</Letra>
              <Select
                name="select"
                onChange={(e) => handleChangeFaltaAr(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
            <SimouNao>
              <Letra>D. Dor de cabeça</Letra>
              <Select
                name="select"
                onChange={(e) => handleChangeCabeça(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
          </Sintomas>
          <Sintomas>
            <SimouNao>
              <Letra>E. Dor de garganta</Letra>
              <Select
                name="select"
                onChange={(e) => handleChangeGarganta(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
            <SimouNao>
              <LetraD>F. Tosse</LetraD>
              <Select
                name="select"
                onChange={(e) => handleChangeTosse(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
          </Sintomas>
          <Sintomas>
            <SimouNao>
              <Letra>G. Falta de olfato</Letra>
              <Select
                name="select"
                onChange={(e) => handleChangeOlfato(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
            <SimouNao>
              <Letra>H. Falta de paladar</Letra>
              <Select
                name="select"
                onChange={(e) => handleChangePaldar(e.target.value)}
              >
                <option value="true">Sim</option>
                <option value="false" selected>
                  Não
                </option>
              </Select>
            </SimouNao>
          </Sintomas>
        </Form>
        <LastForm>
          <Letra>I. Dor no Corpo</Letra>
          <Select
            name="select"
            onChange={(e) => handleChangeCorpo(e.target.value)}
          >
            <option value="true">Sim</option>
            <option value="false" selected>
              Não
            </option>
          </Select>
        </LastForm>
        <Pergunta>
          3. Você coabita com alguma pessoa que foi testada positiva para
          COVID-19 nos últimos 14 dias?
        </Pergunta>
        <Select
          name="select"
          onChange={(e) => handleChangeContato(e.target.value)}
        >
          <option value="true">Sim</option>
          <option value="false" selected>
            Não
          </option>
        </Select>
        <ViewCenter>
          <TextTemp>Temperatura:</TextTemp>
        </ViewCenter>
        <ViewTemp>
          <TempButton onClick={diminueTemperatura}>
            <MinusCircleOutlined />
          </TempButton>
          {selectTemperatura >= 37.2 ? (
            selectTemperatura >= 37.5 ? (
              <TemperaturaMuitoAlta>{selectTemperatura}</TemperaturaMuitoAlta>
            ) : (
              <TemperaturaAlta> {selectTemperatura} </TemperaturaAlta>
            )
          ) : (
            <TemperaturaNormal> {selectTemperatura} </TemperaturaNormal>
          )}
          <TempButton onClick={aumentaTemperatura}>
            <PlusCircleOutlined />
          </TempButton>
        </ViewTemp>
        <ViewTemp>
          {estaApto ? null : (
            <TemperaturaMuitoAlta>
              O Visitante não está apto a entrar, entre em contato com o seu
              gestor!
            </TemperaturaMuitoAlta>
          )}
        </ViewTemp>
        <ViewCenter>
          <Button onClick={() => handleSubmit()}>Enviar</Button>
        </ViewCenter>
      </DataContainer>
    </Container>
  );
};

export default Visitante;
