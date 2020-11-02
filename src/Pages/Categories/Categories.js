import React from "react";
import { withRouter } from "react-router-dom";
import Shopitem from "../../Components/Shopitem/Shopitem";

const Categories = (props) => {
  return (
      <Shopitem type={props.match.params.category} amount={8} />
  );
};
export default withRouter(Categories);
