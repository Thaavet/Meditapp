import React, { useState } from 'react';
import Confirmbutton from './confirmbtn';
import Backbutton from './backbtn';

function SettingsMenu(props) {
  const { sessionDuration, onSetDuration, onCloseSettings } = props;
  const [durationInput, setDurationInput] = useState(sessionDuration);

  const handleChangeDuration = (event) => {
    setDurationInput(event.target.value);
  };

  const handleSaveDuration = () => {
    const duration = parseInt(durationInput, 10);
    if (!isNaN(duration) && duration > 0) {
      onSetDuration(duration);
    }
  };

  return (
    <div>
      <h2>Impostazioni</h2>
      <label>
        Durata della sessione : {durationInput} (minuti):
        <input type="range" min="1" max="90" value={durationInput} onChange={handleChangeDuration} />
      </label>
      
      <Backbutton onClick={onCloseSettings}/>
      <Confirmbutton onClick={handleSaveDuration}/>
    </div>
  );
}

export default SettingsMenu;