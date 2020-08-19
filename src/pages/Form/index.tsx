import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import api from '../../services/api';
import Menu from '../../components/Menu';
import {
  Container,
  Title,
  ImageLogo,
  Formulario,
  Resposta,
  RespostaTosse,
  Cargo,
  LastForm,
  Letra,
  LetraBaixo,
  Pergunta,
  SimouNao,
  Sintomas,
} from './styles';
import { Button } from '../../components/Button/styles';
import Logo from '../../assets/logo.png';

interface Location {
  id: number;
}

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
  olfato: boolean;
  paladar: boolean;
  apto: boolean;
  temperatura: number;
  nome: string;
}

const Form: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);
  const [id, setId] = useState();

  const history = useHistory();
  const location = useLocation<Location>();
  const form = location.state;

  useEffect(() => {
    api.get(`form/${form}`).then((response: any) => {
      setData(response.data);
      setId(response.data.id);
    });
  }, [form]);

  function handleNavigatetoBack() {
    history.goBack();
  }

  function handleNavigatetoPerfil() {
    history.push({
      pathname: '/perfil',
      state: id,
    });
  }

  return (
    <>
      <Menu />
      <Container>
        <Formulario>
          <ImageLogo src={Logo} alt="Logo" />
          <Title>
            Questionário de Sintomas
            {data.data}
          </Title>
          <Cargo>
            Colaborador:
            {data.nome}
          </Cargo>
          <Pergunta>1. Você teve Covid-19?</Pergunta>
          {data.infectado ? <Resposta>Sim</Resposta> : <Resposta>Não</Resposta>}
          <Pergunta>
            2. Você apresentou algum dos seguintes sintomas nas últimas 24
            horas?
          </Pergunta>
          <Sintomas>
            <SimouNao>
              <Letra>A. Febre</Letra>
              {data.febre ? <Resposta>Sim</Resposta> : <Resposta>Não</Resposta>}
            </SimouNao>
            <SimouNao>
              <Letra>B. Calafrios</Letra>
              {data.calafrio ? (
                <Resposta>Sim</Resposta>
              ) : (
                <Resposta>Não</Resposta>
              )}
            </SimouNao>
          </Sintomas>
          <Sintomas>
            <SimouNao>
              <Letra>C. Falta de Ar</Letra>
              {data.falta_ar ? (
                <Resposta>Sim</Resposta>
              ) : (
                <Resposta>Não</Resposta>
              )}
            </SimouNao>
            <SimouNao>
              <LetraBaixo>D. Dor de cabeça</LetraBaixo>
              {data.cabeça ? (
                <Resposta>Sim</Resposta>
              ) : (
                <Resposta>Não</Resposta>
              )}
            </SimouNao>
          </Sintomas>
          <Sintomas>
            <SimouNao>
              <Letra>E. Dor de garganta</Letra>
              {data.garganta ? (
                <RespostaTosse>Sim</RespostaTosse>
              ) : (
                <RespostaTosse>Não</RespostaTosse>
              )}
            </SimouNao>
            <SimouNao>
              <LetraBaixo>F. Tosse</LetraBaixo>
              {data.tosse ? (
                <RespostaTosse>Sim</RespostaTosse>
              ) : (
                <RespostaTosse>Não</RespostaTosse>
              )}
            </SimouNao>
          </Sintomas>
          <Sintomas>
            <SimouNao>
              <Letra>G. Falta de olfato</Letra>
              {data.olfato ? (
                <RespostaTosse>Sim</RespostaTosse>
              ) : (
                <RespostaTosse>Não</RespostaTosse>
              )}
            </SimouNao>
            <SimouNao>
              <LetraBaixo>H. Dor no Corpo</LetraBaixo>
              {data.corpo ? (
                <RespostaTosse>Sim</RespostaTosse>
              ) : (
                <RespostaTosse>Não</RespostaTosse>
              )}
            </SimouNao>
          </Sintomas>
          <LastForm>
            <Letra>I. Falta de paladar</Letra>
            {data.paladar ? <Resposta>Sim</Resposta> : <Resposta>Não</Resposta>}
          </LastForm>
          <Pergunta>
            3. Você teve contato próximo com alguma pessoa testada positiva para
            COVID-19 nos últimos 14 dias?
            {data.contato_infectado ? (
              <Resposta>Sim</Resposta>
            ) : (
              <Resposta>Não</Resposta>
            )}
          </Pergunta>
          <Button onClick={handleNavigatetoPerfil}>Perfil</Button>
          <Button onClick={handleNavigatetoBack}>Voltar</Button>
        </Formulario>
      </Container>
    </>
  );
};

export default Form;
