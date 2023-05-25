import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "./MyContext";
// var axios = require('axios');
function Val() {
  // MyContext
  const { lang , setlang , input , setinput ,code ,setcode ,res,setres } = useContext(MyContext);
 
  // console.log(code,input,code);

  const handleclick = () => {

    let data = {
      code: code,
      language: lang,
      input: input,
    };

    let config = {
      method: "post",
      url: "https://api.codex.jaagrav.in",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // 'Content-Type': 'application / json'
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setres(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={handleclick}> Test the Code </button>
    </div>
  );
}

export default Val;
