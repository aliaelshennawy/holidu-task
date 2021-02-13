import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import { LoadingWrapper } from './styles';

let Loading = ({ loading }) =>
  loading ? (
    <LoadingWrapper>
      <h1>Looking for offers!</h1>
      <Spin size="large" />
    </LoadingWrapper>
  ) : null;
const mapStateToProps = (state) => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);
export default Loading;
