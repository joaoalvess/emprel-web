import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DataContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #f4f4f5;
  border: 1px solid #d4d4d5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0 0;
  margin-top: 8%;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  font-family: Roboto_500Medium;
  margin-top: 40px;
`;

export const ImageLogo = styled.img`
  width: 250px;
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

export const Pergunta = styled.h2`
  font-size: 18px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: Roboto_400Regular;
`;

export const Letra = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-family: Roboto_500Medium;
`;

export const LetraB = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Roboto_500Medium;
  margin-right: 35px;
`;

export const LetraD = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Roboto_500Medium;
  margin-right: 60px;
`;

export const Form = styled.div`
  width: 350px;
`;

export const LastForm = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Sintomas = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const SimouNao = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

export const Select = styled.select`
  width: 60px;
  font-size: 14px;
`;

export const TempButton = styled.button`
  background: none;
  border: none;
  width: 40px;
  font-size: 40px;
`;
