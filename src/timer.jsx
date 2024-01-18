import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SettingsMenu from './settingsmenu';
import Pausebutton from './pausebtn';
import Playbutton from './playbtn';
import SettingsButton from './settingsbtn';
import RestartButton from './restartbtn';

const green = '#4aec8c';

function PomodoroTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(10);
  const [timeRemaining, setTimeRemaining] = useState(sessionDuration * 60);
  const handleRestartTimer = () => {
    setTimeRemaining(sessionDuration * 60);
  };

  useEffect(() => {
    let timerInterval = null;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
          
            clearInterval(timerInterval);
            setIsRunning(false);
            return sessionDuration * 60;
          } else {
       
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, sessionDuration]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleSetDuration = (duration) => {
    setSessionDuration(duration);
    setTimeRemaining(duration * 60);
    setIsSettingsOpen(false);
  };

  return (
    <div>
      <div>
        <CircularProgressbar
          value={(timeRemaining / (sessionDuration * 60)) * 100}
          text={`${Math.floor(timeRemaining / 60).toString().padStart(2, '0')}:${(timeRemaining % 60).toString().padStart(2, '0')}`}
          styles={buildStyles({ pathColor: green, textColor: green })}
        />
      </div>

      <div>
      {isRunning ? (
        <Pausebutton onClick={handlePauseTimer} />
      ) : (
        <Playbutton onClick={handleStartTimer} />
      )}
      <RestartButton onClick={handleRestartTimer} />
      <SettingsButton onClick={handleOpenSettings} />
    </div>
      {isSettingsOpen && (
        <SettingsMenu
          sessionDuration={sessionDuration}
          onSetDuration={handleSetDuration}
          onCloseSettings={handleCloseSettings}
        />
      )}
    </div>
  );
}

export default PomodoroTimer;