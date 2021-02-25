import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { act } from "@testing-library/react";

///////////////INITIALIZE REDUCER////////////////////
let initializeReducer = {
  content: [],
  inputType: "All",
};

////////////////SET REDUCER/////////////////////////
let reducer = (state = initializeReducer, action) => {
  if (action.type === "ADD_ITEM") {
    let newState = { ...state };
    newState.content.push({
      name: action.value,
      completed: false,
      timing: action.timing,
    });
    state = { ...newState };
  }
  if (action.type === "DELETE_ELEMENT") {
    let newState = { ...state };
    newState.content.splice(action.index, 1);
    state = { ...newState };
  }
  if (action.type === "CANCEL_ELEMENT") {
    let newState = { ...state };
    newState.content[action.index].completed = !newState.content[action.index]
      .completed;
    state = { ...newState };
  }
  if (action.type === "CHANGE_DATA") {
    let newState = { ...state };
    newState.inputType = action.value;
    state = { ...newState };
  }
  return state;
};

//////////////////CREATE STORE/////////////////////

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
