import "./history.css";
import React from "react";
import HistoryList from "./historyData";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.initialHistoryList = this.props.initialHistoryList;
  }

  delete() {
    let id = this.initialHistoryList.id;
    for (let i = 0; i < HistoryList.length; i++) {
      if (HistoryList[i].id === id) {
        HistoryList.splice(i, 1);
      }
    }
    this.props.onDeletation(HistoryList);
  }

  render() {
    return (
      <div className="history">
        <div className="time">{this.initialHistoryList.timeAccessed}</div>
        <div className="applicationContainer">
          <div className="titleImg">
            <img
              src={this.initialHistoryList.logoUrl}
              alt="Application Logo"
            ></img>
          </div>
          <div className="titleLink">
            <div className="title">{this.initialHistoryList.title}</div>
            <div className="link">{this.initialHistoryList.domainUrl}</div>
          </div>
          <div className="deleteImg" onClick={this.delete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete Icon"
            ></img>
          </div>
        </div>
        <div className="deleteLink" onClick={this.delete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete Icon"
          ></img>
        </div>
      </div>
    );
  }
}

export default Filter;
