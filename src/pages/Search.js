import React , { useEffect } from "react";
import { getOffers } from '../actions';
import Searchbar from "../components/searchBar";
import {SearchWrapper} from './styles';
import { connect ,  useDispatch} from 'react-redux'

const Search = ({offersList}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch])
  return (
    <SearchWrapper>
      <Searchbar/>
    </SearchWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    offersList: state.offers,
  };
}
const mapDispatchToProps = {
  getOffers: getOffers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
