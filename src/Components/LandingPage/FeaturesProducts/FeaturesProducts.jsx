import {
  Box,
  FormControl,
  MenuItem,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { ProductData } from "../../../Resources/ProductData/ProductData";
import ProductCards from "../../Cards/ProductCards";
import { useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Slices/ProductSlice";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "20px",
      gap: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "start",
      gap: "20px",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-evenly",
      },
    },
  };
});

const FeaturesProducts = () => {
  const { container, subContainer } = useStyle();
  const [selectedProduct, setselectedProduct] = useState(null);
  const { allProducts } = useSelector(getProducts);
  const [filterproducts, setfilterproducts] = useState([]);
  const [products, setproducts] = useState();
  const [value, setValue] = React.useState(0);
  console.log(allProducts);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    let value = [];
    if (newValue == 1) {
      value = products?.filter((f) => f.category === "appreals");
    } else if (newValue == 2) {
      value = products?.filter((f) => f.category === "footwares");
    } else if (newValue == 3) {
      value = products?.filter((f) => f.category === "electronics");
    } else if (newValue == 4) {
      value = products?.filter((f) => f.category === "personal");
    } else {
      value = products;
    }
    setfilterproducts(value);
  };
  useEffect(() => {
    setproducts(allProducts);
    setfilterproducts(allProducts);
    setValue(0);
  }, [allProducts]);
  const handleSort = (e) => {
    console.log(e.target.value);
    let temp = JSON.parse(JSON.stringify(filterproducts));
    let value = [];
    if (e.target.value === "increment") {
      value = temp?.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      value = temp?.sort((a, b) => {
        return b.price - a.price;
      });
    }
    setfilterproducts(value);
  };

  return (
    <>
      <Box className={container}>
        <Box>
          <Tabs value={value} onChange={handleChange} scrollButtons>
            <Tab label="All" />
            <Tab label="Appreal" />
            <Tab label="Footwears" />
            <Tab label="Electronics" />
            <Tab label="Personal Life" />
          </Tabs>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
          <FormControl fullWidth sx={{ maxWidth: "350px" }}>
            <Typography>Sort By</Typography>
            <TextField select fullWidth size="small" onChange={handleSort}>
              <MenuItem value={"increment"}> Price Increment</MenuItem>
              <MenuItem value={"decrement"}>Price Decrement</MenuItem>
            </TextField>
          </FormControl>
        </Box>
        <Box className={subContainer}>
          {filterproducts?.map((data, i) => {
            return <ProductCards key={i} data={data} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default FeaturesProducts;
