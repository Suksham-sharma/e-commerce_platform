// basic react class templeate;

import React from "react";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return <div className="shop-page">Shop Page</div>;
  }
}

export default ShopPage;
