import logo from './logo.svg';
import './App.css';
import Val from './components/Val';
import Ui from './components/Ui';
import { useState, React } from "react";
import { MyContext } from "./components//MyContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  const [code, setcode] = useState("");
const [lang, setlang] = useState("cpp");
const [input, setinput] = useState("");
const [res, setres] = useState({});
const [dis, setdis] = useState("Dis");
  return (
    <div>
      <MyContext.Provider value={{dis , setdis , lang , setlang ,input ,setinput,code ,setcode,res,setres}}>
<BrowserRouter>
      <Nav/>
<Routes>
<Route path="/"    element={ <Ui /> } ></Route>
<Route path="/cpp"    element={ <Ui /> } ></Route>
<Route path="/py"    element={ <Ui /> } ></Route>
<Route path="/js"    element={ <Ui /> } ></Route>
<Route path="/java"    element={ <Ui /> } ></Route>
</Routes>
</BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
