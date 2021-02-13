import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Input, AutoComplete, Form, DatePicker, Button } from "antd";
import { useHistory } from "react-router-dom";
import { setSearchQuery } from "../actions";
import { getOffers } from "../actions";
import { SearchWrapper } from "./styles";
import moment from "moment";

const Searchbar = () => {
  const offersList = useSelector((state) => state.offers);
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
    dispatch(setSearchQuery({ searchTerm: query }));
    dispatch(getOffers());
  }
  function submitFormValues(values) {
    dispatch(
      setSearchQuery({
        searchTerm: values.location,
        adults: values.adults,
        checkin: moment(values.checkin).format("YYYY-MM-DD"),
        checkout: moment(values.checkout).format("YYYY-MM-DD"),
      })
    );
    dispatch(getOffers());
    history.push("/offers");
  }
  function disabledDate(current) {
    return current && current < moment();
  }
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
    <SearchWrapper>
      <Form name="search-form" onFinish={submitFormValues}>
        <Form.Item
          name="location"
          rules={[
            { required: true, message: "Please input your travel location" },
          ]}
        >
          <AutoComplete
            dataSource={
              offersList ? offersList.map(renderSearchItem) : defaultOptions
            }
          >
            <Input
              className="search-input"
              size="large"
              placeholder="Where do you want to go?"
              onChange={handleSearchChange}
            />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name="checkin"
          rules={[{ required: true, message: "Checkin date is required" }]}
        >
          <DatePicker placeholder="Checkin Date" disabledDate={disabledDate}/>
        </Form.Item>
        <Form.Item
          name="checkout"
          rules={[{ required: true, message: "Checkin out date is required" }]}
        >
          <DatePicker placeholder="Check out"  disabledDate={disabledDate}/>
        </Form.Item>
        <Form.Item
          name="adults"
          rules={[{ required: true, message: "Please enter number of adults" }]}
        >
        <Input placeholder="adults" className="small-input" type="number" min={1} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="call-to-action" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    </SearchWrapper>
  );
};

export default Searchbar;
