import React, { useState, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { Input, AutoComplete } from 'antd';
  
export default function Searchbar(searchData) {
  const [options, setOptions] = useState([]);

const onSearch = val => {
    let filtered = searchData.searchData.filter( obj =>
      obj.details.name
          .toLowerCase()
          .includes(val)
      
    );
    setOptions(filtered);
  };
  const defaultOptions = [{
    label:'',
    value: 'No values yet'
  }];
  const { Option } = AutoComplete;
  function renderSearchItem(item) {
    return (
      <Option key={item.id} text={item.details.name} value={item.details.name}>
        <p>{item.details.name}</p>
      </Option>
    );
  }

return (
  <AutoComplete
  dropdownMatchSelectWidth={500}
  style={{ width: 250 }}
  dataSource={searchData.searchData ?
    searchData.searchData.map(renderSearchItem) :
    defaultOptions
  }
  filterOption={options}
  onSearch={onSearch}
>
  <Input.Search size="large" placeholder="Search for your next vacation" />
</AutoComplete> 
);
}