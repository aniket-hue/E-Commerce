import React from "react";
import Card from "../../Components/Card/Card";

const Homepage = () => {
  return (
    <div className="container" style={{ maxWidth: "100vw" }}>
      <div className="row m-md-4 w-100">
        <div className="col-md-4 m-md-0 m-sm-2">
          <Card type="hats" />
        </div>
        <div className="col-md-4 m-md-0 m-sm-2">
          <Card type="jackets" />
        </div>
        <div className="col-md-4 m-md-0 m-sm-2">
          <Card type="sneakers" />
        </div>
      </div>
      <div className="row m-md-4 w-100">
        <div className="col-md-6 m-md-0 m-sm-2">
          <Card type="womens" />
        </div>
        <div className="col-md-6 m-md-0 m-sm-2">
          <Card type="mens" />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
