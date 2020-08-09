import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/background.png');
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-top: 10%
`;

export const Search = styled.input`
  width: 40vw;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 16px;
  border: 1px solid #d3d4d5
`;

export const SearchButton = styled.button`
  background-color: #2C4FA1;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  width: 150px;
  font-size: 16px;
  color: #f4f4f5;
  font-family: 'roboto', sans-serif;
`;

export const FilterButton = styled.button`
  font-family: 'roboto', sans-serif;
  font-size: 16px;
  border-radius: 20px;
  padding: 7px 10px 7px 10px;
  margin-right: 10px;
  border: 1px solid #2C4FA1;
`;

export const DivFilter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px; 
`;

export const DataContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #f5f5f4;
  border: 1px solid #d4d4d5;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 0
`;

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 40vw;
  margin-top: 30px;
`;

export const Td = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
  font-family: 'roboto', sans-serif;
`;

export const Th = styled.th`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
  background-color: #2C4FA1;
  color: white;
  font-family: 'roboto', sans-serif;
`;

export const Tr = styled.tr`
  tr:nth-child(even){background-color: #f2f2f2}
`;

export const ViewTable = styled.div`
  width: 40vw;
`;