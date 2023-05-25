import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "./MyContext";
// var axios = require('axios');
function Val() {
  // MyContext
  const { lang , setlang , input , setinput ,code ,setcode ,res,setres ,dis, setdis } = useContext(MyContext);
 
  console.log(lang);

  const handleclick = () => {
    setdis("");
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
        setdis("Dis");
      })
      .catch(function (error) {
        console.log(error);
        setdis("Dis");
      });
  };
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={handleclick}> Test the Code </button>
    </div>
  );
}

export default Val;
