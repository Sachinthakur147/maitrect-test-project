import React from "react";
import DnavIndex from "../home/Dnavbar";
import Box from "@mui/material/Box";
import "../home/Hstyle.css";

const OCpage = () => {
  return (
    <Box className="signup-page-wrapper">
      <div>
        <DnavIndex />
      </div>
      <div className="mainpage">
        <div
          style={{
            paddingTop: "1%",
            border: "1px solid",
            height: "15vh",
            width: "45%",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <div className="" style={{marginRight: "10%", fontSize: "40px"}}>
            CheckOut
          </div>
          <div style={{textAlign: "left", fontSize: "20px", marginLeft: "2%"}}>
            Thanks you for your order.
          </div>
        </div>
      </div>
    </Box>
  );
};

export default OCpage;
