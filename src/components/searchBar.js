import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useDispatch , useSelector} from "react-redux";
import { Input, AutoComplete } from "antd";
import { useHistory } from "react-router-dom";
import { setSearchQuery } from "../actions";
import { getOffers } from '../actions';

const Searchbar = () => {
  const [options, setOptions] = useState([]);
  const offersList = useSelector(state => state.offers);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleSearchChange(e) {
    console.log(e.target.value);
    delayedQuery(e.target.value);
  }
  const delayedQuery = useCallback(
    debounce((q) => sendSearchQuery(q), 600),
    []
  );
  function sendSearchQuery(query) {
    dispatch(setSearchQuery(query));
    dispatch(getOffers());
  }
  function onOfferSelect() {
    history.push("/offers");
  }
  // const onSearch = val => {
  //   history.push("/offers");
  // };
  const defaultOptions = [
    {
      label: "",
      value: "No values yet",
    },
  ];
  const { Option } = AutoComplete;
  function renderSearchItem(item) {
    return (
      <Option
        key={item.id}
        text={item.location.name}
        value={item.location.name}
      >
        <p>{item.location.name}</p>
      </Option>
    );
  }
  return (
    <AutoComplete
      dropdownMatchSelectWidth={500}
      style={{ width: 500 }}
      dataSource={offersList ?
        offersList.map(renderSearchItem) :
        defaultOptions
      }
      onSelect={onOfferSelect}
    >
      <Input.Search
        size="large"
        placeholder="Where do you want to go?"
        onChange={handleSearchChange}
      />
    </AutoComplete>
  );
};

export default Searchbar;
