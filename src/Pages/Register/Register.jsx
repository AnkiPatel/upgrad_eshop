import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../../Redux/Slices/LoginSlice";

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

const Register = () => {
  const { container, subContainer } = useStyle();
  const [value, setvalues] = useState({});
  const handleChange = (e) => {
    setvalues({ ...value, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("registered successfully");
    dispatch(registerUser({ ...value }));
    navigate("/login");
  };
  return (
    <Box className={container}>
      <form onSubmit={handleSubmit} className={subContainer}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Signup
          </Typography>
        </Box>
        <Box>
          <Typography>Name</Typography>
          <TextField
            name="name"
            required
            fullWidth
            type="text"
            placeholder="name"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Username</Typography>
          <TextField
            name="username"
            required
            fullWidth
            type="text"
            placeholder="username"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Email</Typography>
          <TextField
            name="email"
            required
            fullWidth
            type="email"
            placeholder="Email"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Password</Typography>
          <TextField
            name="password"
            required
            fullWidth
            type="password"
            placeholder="Password"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button type="submit" fullWidth variant={"contained"} size={"small"}>
            Signup
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Already Have Account.?
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
