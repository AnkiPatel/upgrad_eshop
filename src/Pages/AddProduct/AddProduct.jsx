import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addProduct, editProduct } from "../../Redux/Slices/ProductSlice";
import { useEffect } from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "450px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
});

const AddProduct = () => {
  const { container, subContainer } = useStyle();
  const [value, setvalues] = useState({});
  const { state } = useLocation();
  console.log(state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setvalues({ ...value, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (state) {
      alert("edit successfully");
      navigate(-1)
      return dispatch(editProduct({ ...value }));
    }
    dispatch(addProduct({ ...value }));
    alert("Product Added ");
    navigate("/");
  };

  useEffect(() => {
    if (state) {
      setvalues({ ...state });
    }
  }, [state]);

  return (
    <Box className={container}>
      <form onSubmit={handleSubmit} className={subContainer}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Add Product
          </Typography>
        </Box>
        <Box>
          <TextField
            name="name"
            required
            fullWidth
            type="text"
            value={value?.name}
            placeholder="name"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="category"
            required
            fullWidth
            value={value?.category}
            type="text"
            placeholder="category"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="menufecturer"
            required
            fullWidth
            value={value?.menufecturer}
            type="text"
            placeholder="menufecturer"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="items"
            required
            fullWidth
            type="text"
            placeholder="items"
            value={value?.items}
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="price"
            required
            fullWidth
            type="text"
            value={value?.price}
            placeholder="price"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="image"
            required
            fullWidth
            type="text"
            value={value?.image}
            placeholder="image"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="description"
            required
            fullWidth
            type="text"
            value={value?.description}
            placeholder="description"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button type="submit" fullWidth variant={"contained"} size={"small"}>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddProduct;
