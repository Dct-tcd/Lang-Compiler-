import logo from './logo.svg';
import './App.css';
import Val from './Val';
import Ui from './Ui';
import { useState, React } from "react";
import { MyContext } from "./MyContext";


function App() {
  const [code, setcode] = useState("");
const [lang, setlang] = useState("Cpp");
const [input, setinput] = useState("");
const [res, setres] = useState({});
  return (
    <div>
      <MyContext.Provider value={{lang , setlang ,input ,setinput,code ,setcode,res,setres}}>
        <Ui/>
        {/* <Val/> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;
