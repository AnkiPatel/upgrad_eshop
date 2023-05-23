import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/Slices/ProductSlice";
import { getLoginValue } from "../../Redux/Slices/LoginSlice";

export default function RecipeReviewCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const { isLogedin, user } = useSelector(getLoginValue);

  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBuy = (e) => {
    e.stopPropagation();
    navigate(`/products/${data?.id}`);
  };

  const handleDelete = (e) => {
    dispatch(deleteProduct({ id: data?.id }));
  };

  const handleEdit = () => {
    navigate("/addproduct", { state: data });
  };

  return (
    <Card
      sx={{
        maxWidth: 320,
        height: "100%",
        minHeight: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: (theme) => `1px solid ${theme.palette.grey[400]}`,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={data?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Typography>{data?.name}</Typography>
          <Typography>$ {data?.price}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" onClick={handleBuy}>
          Buy
        </Button>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "end",
          }}
        >
          {isLogedin? (
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          ) : null}

          {isLogedin && user?.type === "admin" ? (
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          ) : null}
        </Box>
      </CardActions>
    </Card>
  );
}
