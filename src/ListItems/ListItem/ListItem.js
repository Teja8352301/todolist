import React, { Component } from "react";
import classes from "./ListItem.module.css";
class ListItem extends Component {
  showReference = ref => {
    console.log(ref);
  };
  name1 = null;
  render() {
    let inlineStyle = {
      textDecoration: "line-through black",
      textDecorationStyle: "solid",
    };
    if (this.props.completed) {
      this.name1 = (
        <del style={{ textDecorationColor: "black" }}>
          {this.props.name}&nbsp;&nbsp;&nbsp;&nbsp;{this.props.timing}
        </del>
      );
    } else {
      this.name1 = (
        <React.Fragment>
          {this.props.name}&nbsp;&nbsp;&nbsp;&nbsp;{this.props.timing}
        </React.Fragment>
      );
    }
    return (
      <div className={classes.OuterListItem}>
        <div className={classes.ListItem}>{this.name1};</div>
        <div className={classes.Icon}>
          <i
            onClick={this.props.clicked}
            className="fa fa-check-circle"
            style={{
              fontSize: "30px",
              color: "white",
              padding: "10px",
              backgroundColor: "rgb(207, 115, 29)",
            }}
          ></i>
        </div>
        <div className={classes.Icon}>
          <i
            onClick={this.props.deleted}
            className="fa fa-close"
            style={{
              fontSize: "30px",
              color: "white",
              padding: "10px",
              backgroundColor: "rgb(207, 115, 29)",
            }}
          ></i>
        </div>
      </div>
    );
  }
}
export default ListItem;
