import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

// 32.2%
const Card = (props) => {
  const style = {
    backgroundImage: `url(${require(`../../assets/cards/${props.type}.jpg`)})`,
  };
  return (
    <div
      className={`d-flex justify-content-center position-relative align-items-center ${classes.wrapper}`}
    >
      <div style={style} className={`position-absolute ${classes.imgHolder}`}></div>
      <Link to={`/shop/${props.type}`} className="text-decoration-none">
        <div className={classes.name}>
          <div className="pt-2 pt-2 pl-4 pr-4">
            <p className={classes.type}>{props.type}</p>
            <p className={classes.shop}>SHOP NOW</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
