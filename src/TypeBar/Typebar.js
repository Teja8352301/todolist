import React, { Component } from "react";
import classes from "./Typebar.module.css";
import { connect } from "react-redux";
import DataList from "../DataList/DataList";
class Typebar extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  addItem = event => {
    this.inputRef.current.value = this.inputRef.current.value.trim();
    if (this.inputRef.current.value.length) {
      let date = new Date();
      let hours = date.getHours();
      if (date.getHours() > 12) {
        hours = hours - 12;
      }
      let timing = hours + ":" + date.getMinutes() + ":" + date.getSeconds();
      if (date.getHours() > 12) {
        timing = timing + "PM";
      } else {
        timing = timing + "AM";
      }
      this.props.addItems(this.inputRef.current.value, timing);
    } else {
      alert("InValid Data");
    }
    this.inputRef.current.value = "";
  };
  keyboardEnter = event => {
    let date = new Date();
    let hours = date.getHours();

    if (date.getHours() > 12) {
      hours = hours - 12;
    }
    let timing = hours + ":" + date.getMinutes() + ":" + date.getSeconds();
    if (date.getHours() > 12) {
      timing = timing + "PM";
    } else {
      timing = timing + "AM";
    }
    this.inputRef.current.value = this.inputRef.current.value.trim();
    if (this.inputRef.current.value.length) {
      this.props.addItems(this.inputRef.current.value, timing);
    } else {
      alert("InValid Data");
    }
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <div>
        <div className={classes.Typebar}>
          <input
            ref={this.inputRef}
            className={classes.Input}
            type="text"
            placeholder="Enter the Content"
            onKeyPress={event => {
              if (event.key == "Enter") {
                this.keyboardEnter(event);
              }
            }}
          />
          <div className={classes.Icon} onClick={event => this.addItem(event)}>
            <i
              className="fa fa-plus"
              style={{
                fontSize: "30px",
                color: "white",
                padding: "10px",
                backgroundColor: "rgba(228, 140, 58, 0.671)",
              }}
            ></i>
          </div>
        </div>
        <DataList />
      </div>
    );
  }
}
let propsToDispatch = dispatch => {
  return {
    addItems: (value, timings) =>
      dispatch({ type: "ADD_ITEM", value: value, timing: timings }),
  };
};
export default connect(null, propsToDispatch)(Typebar);
