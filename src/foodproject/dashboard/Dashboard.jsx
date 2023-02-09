import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../home/Hstyle.css";
import NavIndex from "../home/Navindex";
import Menupage from "./Menucard";
// import {Link} from "react-router-dom";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box className="signup-page-wrapper">
      {showMenu && <Menupage />}
      {!showMenu && (
        <>
          <div>
            <NavIndex />
          </div>
          <div className="mainpage">
            <div
              style={{
                paddingTop: "1%",

                height: "50vh",
                width: "40%",

                textAlign: "center",
              }}
            >
              <div className="" style={{marginRight: "10%", fontSize: "60px"}}>
                Welcome To Food's Kitchen
              </div>

              <div style={{marginRight: "5%"}}>
                <Button
                  variant="contained"
                  style={{fontSize: "16px", fontWeight: "500", marginTop: "5%"}}
                  onClick={() => {
                    setShowMenu(true);
                  }}
                >
                  Go to menu
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
