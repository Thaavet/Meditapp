import React, { useState } from 'react';
import Timer from './Timer';
import './app.css';
function App() {
 
const [showsettings, setshowsettings] = useState(true);

  return (
    <>
    <main>
      
    <Timer />

      
      
    </main>
    </>
  );
}

export default App;