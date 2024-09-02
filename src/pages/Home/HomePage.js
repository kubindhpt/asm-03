import React from "react";

import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import AnotherInfor from "./../../components/AnotherInfor/AnotherInfor";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Category />
      <TrendingProducts />
      <AnotherInfor />
    </>
  );
};

export default HomePage;
