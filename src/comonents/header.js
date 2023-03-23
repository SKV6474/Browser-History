import React from "react";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div className="header">
        <div className="logoImg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="logo"
          ></img>
        </div>
        <div className="searchBar">
          <div className="searchBarImage">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="Search"
            ></img>
          </div>
          <div className="inputDiv">
            <input
              type="text"
              placeholder="Search history"
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            ></input>
          </div>
          <div className="dropDown">
            {/* <img src="" alt="dropDown"></img> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
