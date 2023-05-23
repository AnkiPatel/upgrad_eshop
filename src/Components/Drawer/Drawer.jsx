import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import logo from '../../Assets/logo.svg'
const useStyle = makeStyles((theme) => {
  return {
    active: {
      color: theme.palette.background.main,
      background:theme.palette.grey[300]
    },
  };
});

export default function HeaderDrawer({ open, setOpen, list }) {
  const [navigationlinks, setnavigationlinks] = React.useState(list);

  const navigate = useNavigate();
  const Location = useLocation();
  const handleClick = (obj) => {
    let value = navigationlinks?.filter((f) => {
      if (f.link === obj.link) {
        f.selected = true;
      } else {
        f.selected = false;
      }
      return f;
    });
    setnavigationlinks(value);

    navigate(obj.link);
  };

  React.useEffect(() => {
    let value = navigationlinks?.filter((f) => {
      if (f.link === Location.pathname) {
        f.selected = true;
      }
      return f;
    });
    setnavigationlinks(value);
  }, [navigate]);

  const { active } = useStyle();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "350px",
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Box
            sx={{ padding: "20px", display: "flex", justifyContent: "center" }}
          >
            <img src={logo} alt={"logo"} style={{ width: "80%" }} />
          </Box>
          <List sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {navigationlinks &&
              navigationlinks.map((m, i) => {
                return (
                  <ListItem
                    key={i}
                    disablePadding
                    className={m.selected ? active : ""}
                  >
                    <ListItemButton onClick={() => handleClick(m)}>
                      <ListItemIcon
                        sx={{ color: (theme) => theme.palette.primary.main }}
                      >
                        {m?.icon}
                      </ListItemIcon>
                      <ListItemText>{m?.title}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </Box>
        <Box sx={{ padding: "20px",textAlign:'center' }}>
          <Typography>All Rights Reserved</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
