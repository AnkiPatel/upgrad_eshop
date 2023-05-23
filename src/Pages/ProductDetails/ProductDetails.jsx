import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import products from "../../Assets/products.jpg";
import TopBanner from "../../Components/TopBanner/TopBanner";
import { ProductData } from "../../Resources/ProductData/ProductData";
import { useEffect } from "react";
import { useParams } from "react-router";
import ProductDetailSection from "../../Components/ProductDetails/ProductDetailSection/ProductDetailSection";
import { useSelector } from "react-redux";
import { getProducts } from "../../Redux/Slices/ProductSlice";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",

      background: theme.palette.background.secondary,
    },
  };
});

const ProductDetails = () => {
  const [product, setproduct] = useState(null);
  const { container } = useStyle();
  const { id } = useParams();
  console.log(id)
  const { allProducts } = useSelector(getProducts);
  useEffect(() => {
    let value = allProducts?.find((data) => data?.id === id);
    setproduct(value);
    console.log(value);
  }, []);

  return (
    <Box>
      <TopBanner bg={products} Text={"Products"} PageName={"Products"} />
      <Box className={container}>
        <ProductDetailSection product={product} />
      </Box>
    </Box>
  );
};

export default ProductDetails;
