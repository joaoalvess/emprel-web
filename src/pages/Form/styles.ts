import styled from 'styled-components';

export const Container = styled.div`
  background: #2c4fa1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Formulario = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #d4d4d5;
  background: #f0f0f5;
  padding: 15px;
`;

export const ImageLogo = styled.img``;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  margin: 30px 0 20px 0;
`;

export const Resposta = styled.p`
  font-size: 18px;
  font-family: Roboto_500Medium;
  text-align: center;
  margin-bottom: 3px;
  margin-right: 10px;
`;

export const RespostaTosse = styled.p`
  font-size: 18px;
  font-family: Roboto_500Medium;
  text-align: center;
  margin-bottom: 3px;
  margin-right: 60px;
`;

export const Cargo = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: Roboto_400Regular;
  text-align: center;
`;

export const LastForm = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Sintomas = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SimouNao = styled.div`
  flex-direction: column;
  justify-content: center;
`;

export const Pergunta = styled.h3`
  font-size: 16px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: Roboto_400Regular;
`;

export const Letra = styled.p`
  font-size: 16px;
  margin-left: 40px;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-family: Roboto_500Medium;
`;

export const LetraBaixo = styled.p`
  font-size: 16px;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Roboto_500Medium;
`;

export const ViewTemp = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ViewCenter = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const TextTemp = styled.p`
  font-size: 20px;
  font-family: Roboto_500Medium;
  margin-top: 20px;
`;

export const TemperaturaNormal = styled.p`
  font-size: 28px;
  margin-left: 30px;
  margin-right: 30px;
  color: #008000;
`;

export const TemperaturaAlta = styled.p`
  font-size: 28px;
  margin-left: 30px;
  margin-right: 30px;
  color: #ffff00;
`;

export const TemperaturaMuitoAlta = styled.p`
  font-size: 28px;
  margin-left: 30px;
  margin-right: 30px;
  color: #b22222;
  text-align: center;
`;
