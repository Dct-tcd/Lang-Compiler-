import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";

function Nav() {
  const {
    lang,
    setlang,
    input,
    setinput,
    code,
    setcode,
    res,
    setres,
    dis,
    setdis,
  } = useContext(MyContext);

  return (
    <div style={{ display: "flex", padding: "2%", backgroundColor: "teal",justifyContent:"space-between" }}>
      <div>

      <a
        style={{color:`${lang=="cpp"?"cyan":"antiquewhite"}`, margin: "3%",cursor:"pointer", textDecoration: "none" }}
        onClick={()=>{setlang("cpp")}}
      >
        C++
      </a>
      <a
        style={{color:`${lang=="py"?"cyan":"antiquewhite"}`,cursor:"pointer", margin: "3%", textDecoration: "none" }}
        onClick={()=>{setlang("py")}}
              >
        Python
      </a>
      <a
        style={{color:`${lang=="java"?"cyan":"antiquewhite"}`,cursor:"pointer", margin: "3%", textDecoration: "none" }}
        onClick={()=>{setlang("java")}}
      >
        Java
      </a>
      <a
        style={{color:`${lang=="js"?"cyan":"antiquewhite"}`,cursor:"pointer", margin: "3%", textDecoration: "none" }}
        onClick={()=>{setlang("js")}}
        >
        Javascript
      </a>
          </div>
      <div style={{color:"antiquewhite"}}>Current Lang - {lang.toUpperCase()=="CPP"?"C++":lang.toUpperCase()=="PY"? " Python " : lang.toUpperCase()=="JAVA" ?"Java":"Javascript"}</div>
    </div>
  );
}

export default Nav;
