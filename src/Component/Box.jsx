import React from "react";
import { useState } from "react";
import Abuse from "./Abuse";
export default function Box() {
  const [input, setinput] = useState("");
  const [alertCount, setAlertCount] = useState(1);

  const abuse = () => {
    
    if (Abuse.includes(input.toLowerCase())) {
      alert("You are trying to add abusing comment ",(setAlertCount(alertCount + 1)));
    }
    // else{
    //   alert("k")
    // }
    console.log(alertCount)

    if(alertCount==3){
     const input= document.getElementById("input");
     input.disabled = true
     const btn= document.getElementById("btn");
     btn.disabled = true;
     btn.style.backgroundColor="red"
     input.value="Comment feature is blocked"

    }
  };
  return (
    <>
      <div className="commment-post">
        <input id="input"
          type="text "
          onChange={(e) => {
            setinput(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Enter comment here " required
        />
        <button id="btn" onClick={abuse}>Post</button>
      </div>
    </>
  );
}
