import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.relatives = [
      { name: "Mumtaj" },
      { name: "Ameen" },
      { name: "Amir" },
      { name: "subhradip" }
    ];
  }
  render() {
    return (
      <div id="main">
        <ol key={"relativeList"}>
          {this.relatives &&
            this.relatives.map((item, index) => (
              <li key={`relativeListItem${index + 1}`}>{item.name}</li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
