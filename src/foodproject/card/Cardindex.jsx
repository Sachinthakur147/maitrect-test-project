import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Typography from "@mui/material/Typography";
import "../home/Hstyle.css";
import NavIndex from "../home/Navindex";
import {Box} from "@mui/system";

const CardIndex = ({data, setOrderDetails, orderDetails}) => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
    if (num + 1 > 5) {
      alert("Sorry, your limit rechaed");
      setNum(5);
    } else {
      setNum(num + 1);
    }
  };
  const decNum = () => {
    if (num - 1 <= 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };

  useEffect(() => {
    const tempOrderDetails = () => {
      const isFoodAddedToCart =
        orderDetails.filter((food) => food.id === data.id).length > 0;
      if (isFoodAddedToCart) {
        return orderDetails.map((food) => {
          if (food.id === data.id) {
            return {...data, qty: num};
          }
          return food;
        });
      } else {
        return [...orderDetails, {...data, qty: num}];
      }
    };
    setOrderDetails(tempOrderDetails());
  }, [num]);

  return (
    <Box>
      <Card sx={{maxWidth: 345}} className="full-card">
        <img src={data.image} alt="img" width={"300px"} height={"200px"} />
        <CardContent>
          <Typography
            className="card-heading"
            gutterBottom
            variant="h5"
            component="div"
          >
            {data.name}
          </Typography>
          <div style={{display: "flex"}}>
            Price: &nbsp;&nbsp;<span> {data.price}</span>
          </div>
          {num > 0 && (
            <>
              <div style={{display: "flex"}}>
                Total: &nbsp;&nbsp;<span> {num}</span>
              </div>
              <div style={{display: "flex"}}>
                Cost: &nbsp;&nbsp;<span> {num * Number(data.price)}</span>
              </div>
            </>
          )}

          <div style={{justifyContent: "space-around"}}>
            <Button
              variant="contained"
              style={{
                fontSize: "30px",
                fontWeight: "500",
                marginTop: "5%",
                marginRight: "10%",
              }}
              onClick={incNum}
            >
              +
            </Button>
            {num > 0 && (
              <>
                <Button
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    marginTop: "5%",
                    backgroundColor: "red",
                    color: "white",
                  }}
                  onClick={decNum}
                >
                  -
                </Button>
              </>
            )}
            {!num > 0 && (
              <>
                <Button
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    marginTop: "5%",
                    backgroundColor: "lightgray",
                  }}
                  onClick={decNum}
                >
                  -
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardIndex;
