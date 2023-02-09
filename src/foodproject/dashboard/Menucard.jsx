import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import "../home/Hstyle.css";
import {foods} from "../constant/mockdata";
import CardIndex from "../card/Cardindex";
import NavIndex from "../home/Navindex";
import DnavIndex from "../home/Dnavbar";
import MyContext from "../../context/app-context";

const Menupage = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(foods);
  }, []);
  return (
    <Box>
      <MyContext.Consumer>
        {(context) => (
          <>
            <DnavIndex orderDetails={context.state.orderDetails} />
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
                    <CardIndex
                      setOrderDetails={context.setOrderDetails}
                      orderDetails={context.state.orderDetails}
                      data={card}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </MyContext.Consumer>
    </Box>
  );
};

export default Menupage;
