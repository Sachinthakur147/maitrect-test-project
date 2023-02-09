import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Hstyle.css";
import {textAlign} from "@mui/system";
import NavIndex from "./Navindex";

const SignUpIndex = () => {
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
            height: "78vh",
            width: "40%",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          <div className="page-heading" style={{marginRight: "10%"}}>
            Sing Up
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "4%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "20%",
                textAlign: "initial",
                marginLeft: "15%",
              }}
            >
              <label style={{fontSize: "20px"}}>First Name:</label>
            </div>
            <div style={{width: "40%"}}>
              <TextField
                type="text"
                label="Enter Fname"
                name="fname"
                onChange={handleChange}
                value={isFood.fname}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "4%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "20%",
                textAlign: "initial",
                marginLeft: "15%",
              }}
            >
              <label style={{fontSize: "20px"}}>Last Name:</label>
            </div>
            <div style={{width: "40%"}}>
              <TextField
                type="text"
                label="Enter Lname"
                style={{color: "white"}}
                name="lname"
                onChange={handleChange}
                value={isFood.lname}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "4%",
              justifyContent: "space-around",
            }}
          >
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
          <div
            style={{
              display: "flex",
              paddingTop: "4%",
              justifyContent: "space-around",
            }}
          >
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
            className="row"
            style={{
              display: "flex",
              paddingTop: "4%",
              justifyContent: "space-around",
            }}
          >
            <label style={{fontSize: "20px"}}>Confirm Password :</label>
            {/* </div> */}

            <TextField
              autoComplete="off"
              label="Enter Confirm password"
              type="password"
              name="Cpassword"
              onChange={handleChange}
              value={isFood.Cpassword}
            />
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
                style={{fontSize: "25px", fontWeight: "500"}}
                onClick={() => {
                  console.log(isFood);
                  submitHandler();
                  setIsFood((preval) => {
                    return {
                      ...preval,
                      fname: "",
                      lname: "",
                      email: "",
                      password: "",
                      Cpassword: "",
                    };
                  });
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SignUpIndex;
