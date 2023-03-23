import React from "react";
import "./emptyHistory.css";

class EmptyHistory extends React.Component {
  render() {
    return (
      <div className="emptyhistory">
        <div className="content">There is no history to show</div>
      </div>
    );
  }
}

export default EmptyHistory;
