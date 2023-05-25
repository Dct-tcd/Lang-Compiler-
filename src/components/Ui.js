import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import Val from "./Val";
import logo from "./logo.png";
function Ui(props) {
  const { lang, setlang, input, setinput, code, setcode, res, setres , dis, setdis} =
    useContext(MyContext);
  // const [langer, setlanger] = useState("");
  return (
    <>
    {/* <div style={{display:"flex",justifyContent:"center"}}>

      <div className="dropdown">
        <button className="dropbtn">{lang.toUpperCase()} <span className="material-symbols-outlined">
expand_more
</span>
</button>
        <div className="dropdown-content">
          <a
            onClick={() => {
                setlang("cpp");
            }}
          >
            C++
          </a>
          <a
            onClick={() => {
              setlang("py");
            }}
            >
            Python
          </a>
          <a
            onClick={() => {
                setlang("java");
            }}
            >
            Java
          </a>
          <a
            onClick={() => {
                setlang("js");
            }}
            >
            JavaScript
          </a>
        
        </div>
      </div>
              </div> */}

      <div style={{ display: "flex" ,flexDirection:`${window.innerWidth<=600?"column":"row"}` , justifyContent:"center",  margin: "3%" }}>
        <textarea
          cols="50"
          rows="10"
          spellCheck="false"
          className="numbered"
          placeholder="Write the Code  ... "
          style={{ width: `${window.innerWidth<=600?"87%":"70%"}`,minWidth:"40%", minHeight: "300px",fontSize:"115%", overflow: "auto",backgroundColor:"antiquewhite" }}
          onChange={(e) => {
            setcode(e.target.value);
          }}
        />
          <textarea
          spellCheck="false"
          className="numbered"
            placeholder="Input  ... "
            style={{minheight:"310px",fontSize:"110%" , }}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
      </div>
      <Val/>
      <div style={{display:'flex',justifyContent:"center",marginTop:"3%"}}>
      
      <img className="App-logo" src={logo} style={{visibility:`${dis!=="Dis"?"visible":"hidden"}`,  width:"5%" , height:"5%"}}/>

      <textarea
            placeholder="Output  ... "
            cols="20"
            className="numbered"
            // rows="10"  
            style={{ width: "79%",marginBottom:"2%", minHeight: "100px",marginRight:"35px", overflow: "auto" ,fontSize:"110%" }}
            value={res.error==""? res.output : res.error }
            >
                </textarea>
                </div>
    </>
  );
}

export default Ui;
