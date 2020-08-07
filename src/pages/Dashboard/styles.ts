import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/background.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
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
  border: 1px solid #2C4FA1;

    &:hover {
    background-color: #2C4FA1;
    color: #f4f4f5;
    }
`;

export const DivFilter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 
`;

export const DataContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background: #f5f5f4;
  border: 1px solid #d4d4d5;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 0
`;

export const ViewTable = styled.div`
  width: 50vw;
  display: flex;
  background-color: #2C4FA1;
  justify-content: space-around;
  margin-top: 20px
`;

export const ButtonTable = styled.button`
  font-size: 18px;
  margin: 10px;
  background: none;
  border: none;
  color: #f0f0f5;
  font-family: 'roboto', sans-serif;
`;
