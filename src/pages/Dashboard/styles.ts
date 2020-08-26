import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-top: 10%;
`;

export const Search = styled.input`
  width: 40vw;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 16px;
  border: 1px solid #d3d4d5;
`;

export const SearchButton = styled.button`
  background-color: #f4f4f5;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  width: 150px;
  font-size: 16px;
  color: #2c4fa1;
  font-family: 'roboto', sans-serif;
  &:hover {
    background-color: #357ebd;
  }
`;

export const FilterButton = styled.button`
  font-family: 'roboto', sans-serif;
  font-size: 16px;
  border-radius: 20px;
  padding: 7px 10px 7px 10px;
  margin-right: 10px;
  border: 1px solid #2c4fa1;
  text-align: left;

  &:hover {
    background-color: #2c4fa1;
    color: #f4f4f5;
  }
`;

export const DivFilter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 15px 0;
  text-align: left;
  justify-content: center;
  align-items: center;
`;

export const DataContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: #f4f4f5;
  border: 1px solid #d4d4d5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0 0;
`;

export const ViewTable = styled.div`
  width: 60vw;
  display: flex;
  background-color: #2c4fa1;
  justify-content: space-around;
  margin-top: 20px;
  border-radius: 2px;
`;

export const ButtonTable = styled.button`
  font-size: 18px;
  margin: 10px;
  background: none;
  border: none;
  color: #f0f0f5;
  font-family: 'roboto', sans-serif;
`;

export const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin-right: 100px;
`;

export const ViewCenter = styled.div`
  margin-bottom: 25px;
`;
