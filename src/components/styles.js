import styled from 'styled-components';
import pin from '../assets/pin.svg';

export const OffersWrapper = styled.section `
  margin-block: 40px;
  h1 {
    font-family: 'Roboto', serif;
    font-size: 1.125rem; 
  }
  .swiper-container {
    width: 40%;
    img {
      height: 100%;
      object-fit: cover;
      max-height: 250px;
      min-height: 250px;
    }
    .swiper-button-next, .swiper-button-prev {
      color: #fff;
      &:after {
        font-size: 20px;
      }
    }
  }
  .offer-wrapper {
    display: flex;
  }
  ul {
    padding: 0;
  }
  li + li {
    margin-block-start: 20px;
  }
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 90%;
    margin: 40px auto;
  }
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
      a {
        text-align: center;
        font-size: 1rem;
        dispaly: inline-block;
        color: #fff;
        border: none;
        font-weight: 500;
        height: 45px;
        line-height: 45px;
        width: 100%;
        border-radius: 0.5rem;
        background-color: #FF6064;
        text-transform: uppercase;
        min-width: 200px;
        margin: 0 auto;
        &:hover {
          background-color: #FF3A3D;
        }
      }
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
  @media (max-width: 768px) {

    .offer-wrapper {
      flex-direction: column;
    }
    .card-details {
      flex-direction: column;
    }
    .swiper-container {
      width: 100%;
    }
    .offer-reseservations-wrapper {
      border: none;
      .price-wrapper {
        padding: 0;
      }
      span {
        text-align: left;
      }
      a {
        width: 100%;
      }
    }
  }
`;
export const SearchWrapper = styled.div`
  .ant-form {
    display: flex;
    flex-direction: row;
  }
  .ant-form-item + .ant-form-item {
    margin-inline-start: 20px;
  }
  .ant-picker {
    height: 50px;
  }
  .small-input {
    width: 150px;
  }
  .ant-select-selector {
    width: 500px;
  }
  .call-to-action {
    background-color: #FF6064;
    height: 50px;
    color: #fff;
    width: 150px;
    font-weight: bold;
    border: none;
    &:hover {
      background-color: #FF3A3D;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    .ant-form {
      flex-direction: column;
    }
    .ant-picker {
      width: 100%;
    }
    .ant-form-item + .ant-form-item {
      margin-inline-start: 0;
    }
    .ant-select-selector {
      width: 100%;
    }
    .ant-input {
      width: 100%
    }
    .call-to-action {
      width: 100%;
    }
    .small-input {
      width: 100%;
    }
  }
`;