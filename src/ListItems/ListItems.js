import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem/ListItem";
class ListItems extends Component {
  showIndex(event, index) {
    this.props.deleteElement(index);
  }
  cancelIndex(event, index) {
    this.props.cancelElement(index);
  }
  render() {
    let inputTyping = this.props.data.inputType;
    let newInput = null;
    if (inputTyping === "All") {
      newInput = null;
    } else if (inputTyping === "Complete") {
      newInput = true;
    } else {
      newInput = false;
    }
    let items = this.props.data.content.map((val, index) => {
      if (newInput != null) {
        if (val.completed === newInput) {
          return (
            <ListItem
              completed={val.completed}
              timing={val.timing}
              name={val.name}
              key={index}
              index={index}
              clicked={event => this.cancelIndex(event, index)}
              deleted={event => this.showIndex(event, index)}
            />
          );
        }
      } else {
        return (
          <ListItem
            completed={val.completed}
            timing={val.timing}
            name={val.name}
            key={index}
            index={index}
            clicked={event => this.cancelIndex(event, index)}
            deleted={event => this.showIndex(event, index)}
          />
        );
      }
    });
    return <div>{items}</div>;
  }
}

let storeToProps = state => {
  return {
    data: state,
  };
};

let propsToDispatch = dispatch => {
  return {
    deleteElement: index => dispatch({ type: "DELETE_ELEMENT", index: index }),
    cancelElement: index => dispatch({ type: "CANCEL_ELEMENT", index: index }),
  };
};
export default connect(storeToProps, propsToDispatch)(ListItems);
