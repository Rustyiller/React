import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    position: "absolute",
    top: "120%",
    left: "25%",  
  },
  chek: {
    position: "absolute",
    top: "153%",
    left: "25%", 
  }
});

function Metodologies() {
  const style = useStyles();
  return (
    <div id="metodologies" className="section">
      <img
        className="lax blok trzeci"
        alt="Trzecie tło"
        src="img/5.jpg"
        data-lax-translate-y="0 0, vh -340"
        data-lax-opacity="500 0, 800 1"
      />
      <div 
        style={{ 
          top: '160%', 
          transform: 'translate(-50%, -50%)'
        }} 
        className="lax header" 
        data-lax-translate-y="0 0, 200 -200" 
        data-lax-opacity="500 0, 700 1"
      >
        <p className="tytul">Methodologies used in this project</p>
      </div>
      <div 
        className="lax tekst" 
        data-lax-translate-y="0 0, vh -400" 
        data-lax-opacity="500 0, 700 1"
        style={{ 
          float: "left", 
          top: '205%', 
          left: "10%"
        }}
      >
        <p style={{ textAlign: "center"}}><b>Pomodoro</b></p>
        <ul>
          <li>Decide on the task to be done.</li>
          <li>Set the pomodoro timer to 25 minutes and start working on the task</li>
          <li>Then rest for 5 minutes</li>
          <li>If you already had 4 repetition, rest for 15-30 minutes</li>
        </ul>
        <Button 
          className={style.button} 
          variant="contained" 
          color="primary" 
          href="https://pl.wikipedia.org/wiki/Technika_Pomodoro"
        >
          Learn More Pomodoro
        </Button>
      </div>
      <div 
        className="lax tekst" 
        data-lax-translate-y="0 0, vh -400" 
        data-lax-opacity="500 0, 700 1" 
        style={{ 
          float: "left", 
          top: '205%', 
          left: "60%"
        }}
      >
        <p style={{ textAlign: "center"}}><b>90/30</b></p>
        <ul>
          <li>Decide what is your most important task to focus on</li>
          <li>Spend 90 minutes on it without interuptions</li>
          <li>Then rest for 20-30 minutes</li>
        </ul>
        <Button className={style.chek} variant="contained" color="secondary" href="https://curiositydaily.com/its-never-too-early-to-protect-your-hearing-w-david-owen-and-why-you-should-work-in-90-minute-spurts/">
          Learn More about 90/30
        </Button>
      </div>
    </div>
    );
}
  
export default Metodologies;





