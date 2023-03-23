import React from "react";
import HistoryList from "./historyData";
import Filter from "./filteredHistory";
import EmptyHistory from "./emptyHistory";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeletation = this.handleDeletation.bind(this);
    this.initialHistoryList = this.props.initialHistoryList;
  }

  handleDeletation(newList) {
    this.props.onListChange(newList);
  }

  render() {
    const filterText = this.props.filterText;
    const application = [];

    HistoryList.forEach((ele) => {
      if (ele.title.toLowerCase().includes(filterText)) {
        application.push(ele);
      } else if (ele.domainUrl.toLowerCase().includes(filterText)) {
        application.push(ele);
      }
    });

    const FilterApplictions = application.map((element) => (
      <Filter
        key={element.id}
        onDeletation={this.handleDeletation}
        initialHistoryList={element}
      />
    ));

    let length = FilterApplictions.length;

    return (
      <div className={`${length !== 0 ? "historyContainer" : ""}`}>
        {length !== 0 ? (
          <div>{FilterApplictions}</div>
        ) : (
          <EmptyHistory></EmptyHistory>
        )}
      </div>
    );
  }
}

export default History;
