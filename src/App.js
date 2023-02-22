import './App.css';
import { React, useState, useEffect } from 'react';
import Desktop from './Components/Adaptive/Desktop.jsx';
import Mobile from './Components/Adaptive/Mobile.jsx';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  console.log(window.innerHeight);

  useEffect(() => {
    if (window.innerWidth <= 1080) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  return <div className="App">{isMobile ? <Mobile /> : <Desktop />}</div>;
}

export default App;
