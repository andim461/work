import React from "react";
import ReactDOM from "react-dom";
import NameDateInput from './NameDateInput';
import indexCounter from "../store/indexCounter";

const Main = () => {
  const dataFields = [<NameDateInput/>];

  return dataFields[indexCounter.count];
};

export default Main;
