import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RestaurantIcon from "@mui/icons-material/Restaurant";
// import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import "./Hstyle.css";

const NavIndex = () => {
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
            <img src=""></img>
            <div>
              <h1>Food Restaurant</h1>
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{flexGrow: 1}}
            ></Typography>
            {/* <a href="/Login" style={{fontSize: "20px"}}>
              Login
            </a>
            <a href="/Signup">SignUp</a> */}
            <div className="lnk-contect" style={{padding: "5px"}}>
              <a href="/Login" style={{fontSize: "20px", color: "white"}}>
                Login
              </a>
            </div>
            <div className="lnk-contect" style={{padding: "5px"}}>
              <a href="/Signup" style={{fontSize: "20px", color: "white"}}>
                SignUp
              </a>
            </div>
            {/* <Button className="btn-login">Login</Button> */}
            {/* <Button className="btn-signup">Signup</Button> */}
          </Toolbar>
        </AppBar>
        <br />
        <br />
      </div>
    </div>
  );
};

export default NavIndex;
