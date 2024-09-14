import { findRenderedComponentWithType } from "react-dom/test-utils";
import "./App.css";
import { useState } from "react";


function App(){
    // here only change can only do the things 
    // and if you define a variable using useState its state will 
    //automaticlly updated on the UI 
   const [ cnt , change ] = useState(0);
   function incre(){
      // cnt = cnt + 1 ;
      change(cnt+1)
   }
   function decre(){
      // cnt = cnt - 1 ;
      change(cnt-1)
   }
   function reset(){
      change(0)
      // because 0 is the initial value here    
   }

  return( 
      <div className=" w-[100vw] h-[100vh]  bg-yellow-200 flex justify-center align-center">
         <div className="m-auto flex-col justify-center items-center ">
            <h2 className="font-extrabold text-2xl">
              Increment & Decrement
            </h2>
            <div className="flex gap-20 border border-black pl-8 pr-8 pt-2 pb-2">
              <button onClick={incre} className="p-1 border border-black rounded-3xl">+</button>
              <div>{cnt}</div>
              <button onClick={decre} className="p-1 border border-black rounded-3xl">-</button>
            </div>
            <button onClick={reset} className="mt-4 pr-3 pl-3 ml-[40%] border border-black rounded-2xl hover:bg-slate-100">Reset</button>
         </div>
      </div>
   );
}
export default App;
