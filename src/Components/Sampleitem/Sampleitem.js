import React from "react";
import classes from "./Sampleitem.module.css";
import SHOP_DATA from "../../assets/Shopdata";
import { connect } from "react-redux";
import { setCartItem } from "../../redux/Cart/cartAction";
const Sampleitem = (props) => {
  const onPay = (name, id, type, url, price) => {
    props.setItem({
      name: name,
      id: id,
      type: type,
      image: url,
      price: price,
    });
  };
  const element = SHOP_DATA.map((data) => {
    if (data.routeName === props.name) {
      let idx = 0;
      return data.items.map((data) => {
        return idx++ < props.amount ? (
          <div key={data.id} className="col-md-3">
            <div className="container">
              <div className="row">
                <div
                  onClick={() =>
                    onPay(
                      data.name,
                      data.id,
                      props.name,
                      data.imageUrl,
                      data.price
                    )
                  }
                  className={classes.img}
                  style={{ backgroundImage: `url(${data.imageUrl})` }}
                >
                  <p className={classes.paybadge}>
                    <br />
                    Proceed to pay
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="d-flex col-md-8 p-0 justify-content-start">
                  <p className={classes.name}>{data.name}</p>
                </div>
                <div className="d-flex col-md-4 p-0 justify-content-end">
                  <p className={classes.price}>{`${data.price} $`}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      });
    } else return null;
  }).filter(Boolean)[0];
  let cards = [],
    temp = [];
  let prev = 0;
  for (let index = 0; index <= element.length - (element.length % 4); index++) {
    if (index % 4 === 0) {
      let data = [];
      for (let i = prev; i < index; i++) data.push(element[i]);
      cards.push(<div className="row">{data}</div>);
      prev = index;
    }
  }
  console.log(cards);
  for (
    let index = element.length - (element.length % 4);
    index < element.length;
    index++
  )
    temp.push(element[index]);
  cards.push(<div className="row">{temp}</div>);

  console.log(element);
  return (
    <div className="container" style={{ maxWidth: "100vw" }}>
      {cards}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setItem: (item) => dispatch(setCartItem(item)),
});

export default connect(null, mapDispatchToProps)(Sampleitem);
