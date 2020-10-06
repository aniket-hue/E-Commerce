import React from "react";
import Cart from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { setCartVisiblity } from "../../redux/Cart/cartAction";
const Carticon = (props) => {
  const onCartClick = () => {
    props.dropdownToggle();
  };
  return (
    <div className="position-relative w-50">
      <img onClick={onCartClick} src={Cart} alt="#" />
      <div className="position-absolute" style={{ top: "20%", left: "40%" }}>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state.cart.cartItems.length });

const mapDispatchToProps = (dispatch) => {
  return {
    dropdownToggle: () => dispatch(setCartVisiblity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carticon);
