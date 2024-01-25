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
      <h2>Settings</h2>
      <label>
        Duration : {durationInput} (minutes):
        <input type="range" min="1" max="90" value={durationInput} onChange={handleChangeDuration} />
      </label>
      <diV></diV>
      <Backbutton onClick={onCloseSettings}/>
      <Confirmbutton onClick={handleSaveDuration}/>
    </div>
  );
}

export default SettingsMenu;