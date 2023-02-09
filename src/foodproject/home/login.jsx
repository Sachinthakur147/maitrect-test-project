import React, {useEffect, useState} from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Hstyle.css";
import NavIndex from "./Navindex";
import {Link} from "react-router-dom";

const LoginIndex = () => {
  const [users, setusers] = useState([]);
  const [isFood, setIsFood] = useState({
    fname: "",
    lname: "",

    email: "",
    password: "",
    Cpassword: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    const tempData = {...isFood};
    if (event.target.name === "fname") {
      tempData.fname = value;
    } else if (event.target.name === "lname") {
      tempData.lname = value;
    } else if (event.target.name === "email") {
      tempData.email = value;
    } else if (event.target.name === "password") {
      tempData.password = value;
    } else if (event.target.name === "Cpassword") {
      tempData.Cpassword = value;
    }

    setIsFood(tempData);
  };

  const submitHandler = () => {
    console.log("118");

    const teampuser = [...users];
    teampuser.push(isFood);
    setusers(teampuser);
  };

  return (
    <Box className="signup-page-wrapper">
      <div>
        <NavIndex />
      </div>
      <div className="mainpage">
        <div
          style={{
            paddingTop: "1%",
            border: "1px solid",
            height: "50vh",
            width: "35%",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <div className="page-heading" style={{marginRight: "10%"}}>
            Login
          </div>

          <div style={{display: "flex", paddingTop: "4%"}}>
            <div
              style={{
                width: "20%",
                textAlign: "initial",
                marginLeft: "15%",
              }}
            >
              <label style={{fontSize: "20px"}}>Email :</label>
            </div>
            <div style={{width: "40%"}}>
              <TextField
                type="text"
                autoComplete="off"
                label="Enter email"
                name="email"
                style={{color: "white"}}
                onChange={handleChange}
                value={isFood.email}
              />
            </div>
          </div>
          <div style={{display: "flex", paddingTop: "4%"}}>
            <div
              style={{
                width: "20%",
                textAlign: "initial",
                marginLeft: "15%",
              }}
            >
              <label style={{fontSize: "20px"}}>Password :</label>
            </div>
            <div style={{width: "40%"}}>
              <TextField
                autoComplete="off"
                label="Enter password"
                type="password"
                name="password"
                onChange={handleChange}
                value={isFood.password}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              paddingTop: "10%",
              justifyContent: "space-around",
              textAlign: "start",
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{fontSize: "16px", fontWeight: "500"}}
                onClick={() => {
                  console.log(isFood);
                  submitHandler();
                  setIsFood((preval) => {
                    return {
                      ...preval,

                      email: "",
                      password: "",
                    };
                  });
                }}
              >
                Login
              </Button>
            </div>
          </div>
          <div className="row" style={{textAlign: "end", paddingRight: "10px"}}>
            <div style={{fontSize: "18px"}}>
              <Link href="/Signup" style={{fontSize: "20px"}}>
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default LoginIndex;
