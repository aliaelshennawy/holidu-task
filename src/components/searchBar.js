import React, { useState, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { Input, AutoComplete } from 'antd';
import Offers from "../components/offers";
  
export default function Searchbar(searchData) {
  const [options, setOptions] = useState([]);

const onSearch = val => {
    let filtered = searchData.searchData.filter( obj =>
      obj.location.name
          .includes(val)
      
    );
    setOptions(filtered);
    console.log('filtered', filtered);
  };
  const defaultOptions = [{
    label:'',
    value: 'No values yet'
  }];
  const { Option } = AutoComplete;
  function renderSearchItem(item) {
    return (
      <Option key={item.id} text={item.location.name} value={item.location.name}>
        <p>{item.location.name}</p>
      </Option>
    );
  }
  function renderSearchCards(filtered) {
      return (
        <Offers offersList={filtered}/>
      )
  }
return (
  <AutoComplete
  dropdownMatchSelectWidth={500}
  style={{ width: 250 }}
  dataSource={searchData.searchData ?
    searchData.searchData.map(renderSearchItem) :
    defaultOptions
  }
  onSelect={renderSearchCards}
  filterOption={options}
  onSearch={onSearch}
>
  <Input.Search size="large" placeholder="Where do you want to go?" />
</AutoComplete> 
);
}