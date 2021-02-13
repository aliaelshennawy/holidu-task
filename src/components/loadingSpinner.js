import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
let Loading = ({ loading }) => (
loading ?
<div>
   <h1>Loading</h1>
   <Spin size="large" />
</div> :
null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;