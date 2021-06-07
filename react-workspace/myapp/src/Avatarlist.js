import React from "react";
import "./Avatar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Avatarlist = (props) => {
  return (
    <div class="container" className="mt-5">
      <div className="avatar_style  m-2 p-2 mb-2 bg-danger text-white text-center col-xs-1 col-sm-2 ">
        <img
          src={`https://joeschmoe.io/api/v1/${props.name}`}
          alt="Avatar"
          className="img-fluid z-depth-4"
        />
        <h1 className="">{props.name}</h1>
        <p> {props.work}</p>
      </div>
    </div>
  );
};
export default Avatarlist;
