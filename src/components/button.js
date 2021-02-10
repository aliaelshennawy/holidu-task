import React from 'react';
import { connect } from 'react-redux';
import { getOffers } from '../actions';
let Button=({getOffers})=>(
   <button onClick={getOffers}>Press to see all offers</button>
)
const mapDispatchToProps = {
     getOffers: getOffers,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;