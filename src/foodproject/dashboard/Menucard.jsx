import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import "../home/Hstyle.css";
import {foods} from "../constant/mockdata";
import CardIndex from "../card/Cardindex";
import NavIndex from "../home/Navindex";
import DnavIndex from "../home/Dnavbar";

const Menupage = () => {
  const [cardData, setCardData] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    setCardData(foods);
  }, []);
  return (
    <Box>
      <DnavIndex orderDetails={orderDetails} />
      <div className="Home-page-wrraper">
        <div className="fullpage">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {cardData.map((card, i) => (
              <CardIndex setOrderDetails={setOrderDetails} data={card} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Menupage;
