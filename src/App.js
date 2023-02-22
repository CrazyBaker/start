import "./App.css";
import { React, useState, useEffect } from "react";
import Desktop from "./Components/Adaptive/Desktop.jsx";
import Mobile from "./Components/Adaptive/Mobile.jsx";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);

  useEffect(() => {
    window.addEventListener(`resize`, () => {
      setIsMobile(window.innerWidth <= 1080);
    });
    return () => {
      window.removeEventListener(`resize`, () => {
        setIsMobile(window.innerWidth <= 1080);
      });
    };
  }, [isMobile]);

  return <div className="App">{isMobile ? <Mobile /> : <Desktop />}</div>;
}

export default App;
