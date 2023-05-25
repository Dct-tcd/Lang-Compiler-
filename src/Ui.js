import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import Val from "./Val";
function Ui() {
  const { lang, setlang, input, setinput, code, setcode, res, setres } =
    useContext(MyContext);
  // const [langer, setlanger] = useState("");
  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>

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
              </div>

      <div style={{ display: "flex" ,justifyContent:"center", flexDirection: "row", margin: "3%" }}>
        <textarea
          cols="50"
          rows="10"
          spellcheck="false"
          className="numbered"
          placeholder="Write the Code  ... "
          style={{ width: "70%", minHeight: "300px", overflow: "auto" }}
          onChange={(e) => {
            setcode(e.target.value);
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea
          spellcheck="false"
            placeholder="Input  ... "
            style={{ minwidth: "40%", minHeight: "310px" }}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
        </div>
      </div>
      <Val/>
      <div style={{display:'flex',justifyContent:"center",marginTop:"3%"}}>
          {/* <label> Output </label> */}
      <textarea
            placeholder="Output  ... "
            style={{ width: "81%", minHeight: "100px", overflow: "auto"  }}
            value={res.error==""? res.output : res.error }
            >
                </textarea>
                </div>
    </>
  );
}

export default Ui;
