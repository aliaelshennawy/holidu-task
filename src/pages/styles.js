import styled from 'styled-components';
import banner from '../assets/search-background.jpg';


export const SearchWrapper = styled.div `
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  .ant-input {
    height: 50px
  }
  .ant-input-search-button {
    height: 50px;
  }
`