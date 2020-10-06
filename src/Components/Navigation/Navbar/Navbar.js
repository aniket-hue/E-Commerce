import React from "react";
import classes from "./Navbar.module.css";
import Links from "../../Link/Link";
import Logo from "../../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";
import { connect } from "react-redux";
import Carticon from "../../Carticon/Carticon";

const Navbar = (props) => {
  const userState =
    props.currentUser === null ? (
      <Links name="SIGN IN" />
    ) : (
      <p className={classes.signOut} onClick={() => auth.signOut()}>
        SIGN OUT
      </p>
    );

  return (
    <div className="container" style={{ width: "100vw" }}>
      <div className="row">
        <div className="col-md-1">
          <Link to="/">
            <img src={Logo} alt="#" />
          </Link>
        </div>
        <div className="col-md-11 d-flex justify-content-end">
          <div className="col-md-1">
            <Links name="SHOP" />
          </div>
          <div className="col-md-1">
            <Links name="CONTACT" />
          </div>
          <div className="col-md-1">{userState}</div>
          <div className="col-md-1">
            <Carticon />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
