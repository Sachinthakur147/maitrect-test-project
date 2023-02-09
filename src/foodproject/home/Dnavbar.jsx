import React, {useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
// import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import "./Hstyle.css";
import {Link} from "react-router-dom";

const DnavIndex = ({orderDetails}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getOrderCount = () => {
    const tempOrder = orderDetails.filter((order) => order.qty > 0);
    return tempOrder.length;
  };
  const getTotalPrice = () => {
    const tempOrder = orderDetails.filter((order) => order.qty > 0);
    let totalPrice = 0;
    tempOrder.forEach((order) => {
      totalPrice = totalPrice + order.qty * order.price;
    });
    return totalPrice;
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="">
      <div>
        <AppBar
          className="navbar"
          position="static"
          style={{backgroundColor: "blue"}}
        >
          <Toolbar>
            <IconButton>
              <div style={{color: "white", padding: "10px", marginTop: "10px"}}>
                <RestaurantIcon style={{height: "35px", width: "30px"}} />
              </div>
            </IconButton>{" "}
            <div>
              <h1>Food Restaurant</h1>
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{flexGrow: 1}}
            ></Typography>
            {orderDetails && (
              <>
                <div>
                  <Button onClick={handleOpen} style={{color: "white"}}>
                    {" "}
                    <ShoppingCartTwoToneIcon style={{marginRight: "5%"}} />
                    {getOrderCount()}
                  </Button>
                </div>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Order Summary
                    </Typography>
                    <br />
                    {orderDetails &&
                      orderDetails.map((order) => {
                        if (order.qty > 0) {
                          return (
                            <div style={{justifyContent: "space-between"}}>
                              <span>{order.name}:</span>
                              <span style={{marginLeft: "100px"}}>
                                {order.qty}
                              </span>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                    <Button
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      +
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                      }}
                    >
                      -
                    </Button>
                    <hr />
                    <div style={{justifyContent: "space-between"}}>
                      <span>{"Total Price"}:</span>
                      <span style={{marginLeft: "20px"}}>
                        {getTotalPrice()}
                      </span>
                    </div>
                    <hr />
                    <div style={{textAlign: "end"}}>
                      <Link to={"/orderplace"} style={{marginRight: "10px"}}>
                        SAVE AND CHECKOUT
                      </Link>
                      <Button variant="text" onClick={handleClose}>
                        Cancel
                      </Button>
                    </div>
                  </Box>
                </Modal>
              </>
            )}
          </Toolbar>
        </AppBar>
        <br />
        <br />
      </div>
    </div>
  );
};

export default DnavIndex;
