import styled from 'styled-components';
import pin from '../assets/pin.svg';
import arrow from '../assets/right-arrow.svg';

export const OffersWrapper = styled.section `
  h1 {
    font-family: 'Roboto', serif;
    font-size: 1.125rem; 
  }
  a {
    display: flex;
  }
  li + li {
    margin-block-start: 20px;
  }
  max-width: 1200px;
  margin: 0 auto;
`;
export const OffersCard = styled.li`
  font-family: 'Roboto', serif;
  list-style: none;
  border: solid 1px #DADADA;
  border-radius: 0.5rem;
  img {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .card-details {
    padding: 1.25rem;
    display: flex;
    width: 100%;
    justfiy-content: space-between;
  }
  .offer-details-wrapper {
    flex-grow: 1;
  }
  .offer-reseservations-wrapper {
    border-left: 1px solid #DADADA;
  }
  .offer-name {
    font-size: 1.5rem;
    color: #1D1D1D;
    font-weight: bold;
  }
  .check-more:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-inline-start: 5px;
    width: 20px;
    height: 20px;
  }
  .price-wrapper {
    display: flex;
    flex-direction: column;
    color: gray;
    height: 100%;
    padding-left: 20px;
    .call-to-action {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    span {
      text-align: right;
      font-size: 1.25rem;
    }
  }
  .total-price {
    font-size: 1.625px;
    color: #1D1D1D;
    font-weight: 500;
  }
  .location-link {
    color: #0C6EEF;
    font-weight: bold;
    &:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 20px;
      width: 18px;
      margin-inline-end: 0.313rem;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(${pin});
    }
  }
  .appartment-details-wrapper {
    display: flex;
    color: #1D1D1D;
    line-height: 40px;
  }
  button {
    font-size: 1rem;
    color: #fff;
    border: none;
    font-weight: 500;
    height: 45px;
    line-height: 45px;
    width: 100%;
    line-height: 40px;
    border-radius: 0.5rem;
    background-color: #FF6064;
    text-transform: uppercase;
    min-width: 200px;
    margin: 0 auto;
    &:hover {
      background-color: #FF3A3D;
    }
  }
`;