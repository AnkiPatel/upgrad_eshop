import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getLoginValue, setloginIn } from "../../Redux/Slices/LoginSlice";
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

const Login = () => {
  const { container, subContainer } = useStyle();
  const [value, setvalues] = useState({});
  const handleChange = (e) => {
    setvalues({ ...value, [e.target.name]: e.target.value });
  };
  const { token, isLogedin, found } = useSelector(getLoginValue);
  console.log(token, isLogedin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setloginIn({ ...value }));
  };
  useEffect(() => {
    if (found) {
      alert("Login Successfull");
      navigate("/");
    }
  }, [found]);
  return (
    <Box className={container}>
      <form onSubmit={handleSubmit} className={subContainer}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Login
          </Typography>
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
            Signin
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Don't Have Account.?
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home.?
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
