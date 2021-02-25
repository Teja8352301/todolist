import React, { Component } from "react";
import classes from "./DataList.module.css";
import { connect } from "react-redux";
class DataList extends Component {
  constructor() {
    super();
    this.dataListRef = React.createRef();
  }
  state = {
    data: "All",
  };
  changeDataList = event => {
    this.setState({ data: event.target.value });

    if (
      event.target.value === "All" ||
      event.target.value === "Complete" ||
      event.target.value === "Incomplete"
    ) {
      this.props.changeDataType(event.target.value);
    }
  };
  render() {
    return (
      <div>
        <input
          list="datalist"
          name="browser"
          className={classes.DataList}
          value={this.state.data}
          onChange={this.changeDataList}
        />

        <datalist id="datalist">
          <option value="All" />
          <option value="Complete" />
          <option value="Incomplete" />
        </datalist>
      </div>
    );
  }
}
let propsToDispatch = dispatch => {
  return {
    changeDataType: value => dispatch({ type: "CHANGE_DATA", value: value }),
  };
};
export default connect(null, propsToDispatch)(DataList);
