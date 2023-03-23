import React from "react";
import Header from "./header";
import History from "./history";
import "./container.css";
import HistoryList from "./historyData";
import EmptyHistory from "./emptyHistory";

class Container extends React.Component {
  constructor() {
    super();
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.state = { filterText: "", list: HistoryList };
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  handleListChange(newList) {
    this.setState({ list: newList });
    console.log(this.state.list);
  }

  render() {
    const length = this.state.list.length;

    return (
      <div className="container">
        <div className="headerContainer">
          <Header
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          ></Header>
        </div>
        {length > 0 ? (
          <History
            initialHistoryList={this.state.list}
            filterText={this.state.filterText}
            onListChange={this.handleListChange}
          />
        ) : (
          <EmptyHistory></EmptyHistory>
        )}
      </div>
    );
  }
}

export default Container;
