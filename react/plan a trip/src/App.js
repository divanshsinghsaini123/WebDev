import "./App.css";
import data from './data';
import { useState } from "react";
import Tours from "./components/Tours" ;

function App() {
  const [turs , setTours]= useState(data);
  return (
    <div>
       <Tours tours={turs}></Tours>
    </div>
  );
}
export default App;
