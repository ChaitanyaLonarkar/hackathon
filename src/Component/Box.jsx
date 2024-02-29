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
    
    console.log(alertCount)

    if(alertCount==3){

     const input= document.getElementById("input");
     input.disabled = true
     const btn= document.getElementById("btn");
     btn.disabled = true;
     btn.style.backgroundColor="red"
     input.value="Comment feature is blocked"
     alert("You are violating or trying to do abusing comment on blog post.\nSo that we are taking a strict action for this and your commenting feature is bloked for 3 days.")
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
