import React, { Component } from "react";
import "./Avatar.css";
import Avatarlist from "./Avatarlist";
import "bootstrap/dist/css/bootstrap.min.css";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcom to my page",
    };
  }
  namechange() {
    this.setState({
      name: "Suprise",
    });
  }
  render() {
    const avatarlistarray = [
      {
        id: 1,
        name: "Maumita",
        work: "Analyst",
      },
      {
        id: 2,
        name: "Pooja",
        work: "Developer",
      },
      {
        id: 3,
        name: "Rohini",
        work: "Engineer",
      },
      {
        id: 4,
        name: "Nitya",
        work: "Analyst",
      },
    ];

    const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
      return (
        <Avatarlist
          key={i}
          id={avatarlistarray[i].id}
          name={avatarlistarray[i].name}
          work={avatarlistarray[i].work}
        />
      );
    });

    return (
      <div className="mainpage">
        <h1> {this.state.name} </h1>
        {arrayavatarcard}
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => this.namechange()}
        >
          {" "}
          Click me{" "}
        </button>
      </div>
    );
  }
}

export default Avatar;
