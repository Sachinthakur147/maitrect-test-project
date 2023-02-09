import {useState} from "react";
import MyContext from "../app-context";

const MyProvider = (props) => {
  const [state, setState] = useState({
    orderDetails: [],
  });

  return (
    <MyContext.Provider
      value={{
        state: state,
        setOrderDetails: (oredrs) => {
          setState({
            orderDetails: oredrs,
          });
        },
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
