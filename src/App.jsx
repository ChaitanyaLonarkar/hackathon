// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/Component/Navbar";
import Blogs from "../src/Component/Blogs";
import SideBar from "../src/Component/SideBar";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="div">
<SideBar/>
      <Blogs/>
      </div>
    </>
  );
}

export default App;
