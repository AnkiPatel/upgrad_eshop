import { Box, ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router";
import CartDrawer from "./Components/CartDrawer/CartDrawer";
import { OpenCartContext } from "./Context/OpenCartContext";
import { Paths } from "./Resources/ListOfPaths/ListOfPaths";
import SnackBar from "./Components/snackbar/Snackbar";
import PrimarySearchAppBar from "./Components/Header/Header";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  const { openCart } = useContext(OpenCartContext);
  return (
    <Box>
      <Box>
        <PrimarySearchAppBar />
      </Box>
      <Box>
        <Routes>
          {Paths.map((path) => {
            return <Route path={path?.path} element={path?.component} />;
          })}
        </Routes>
      </Box>

      
      <CartDrawer />
      <SnackBar />
    </Box>
  );
};

export default App;
