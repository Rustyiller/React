import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    position: "absolute",
    top: "100%",
    left: "45%",  
  },
});

function Idea() {
  const style = useStyles();
  return (
    <div id="Idea" className="section">
      <img
        className="lax blok drugi"
        alt="Drugie tło"
        src="img/1.jpg"
        data-lax-translate-y="0 0, vh -320"
        data-lax-opacity="0 0, 400 1"
      />
      <div 
        style={{ 
          top: "50%", 
          transform: 'translate(-50%, -50%)' 
        }} 
        className="lax header" 
        data-lax-translate-y="0 0, vh 300" 
        data-lax-opacity="100 0, 400 1"
      >
        <p className="tytul">Purpose and goal</p>
      </div>
        <div 
          className="lax tekst" 
          style={{ 
            float: "left", 
            left: "10%", 
            top: "95%" 
          }} 
          data-lax-opacity="100 0, 400 1"
        >
          Gamitude is a project that has a goal to help people manage their energy. By doing so, they can stay focused for longer period of time completing their tasks. 
        </div>
        <div 
          className="lax tekst" 
          style={{ 
            float: "right", 
            left: "60%", 
            top: "95%" 
          }} 
          data-lax-opacity="100 0, 400 1" 
        >
          It also has a purpose to motivate people to develop themselves in different areas of life and orginise themselves.
        </div>
      <div 
        className="lax" 
        data-lax-opacity="100 0, 400 1"
      >
        <img 
        className="ikonal"
        alt="battery"
        src="img/battery.png"
        style={{
          left: "13%",
        }} />
        <img 
        className="ikonal"
        alt="list"
        src="img/list.png"
        style={{
          left: "28%",
        }} />
        <img 
        className="ikonar"
        alt="strength"
        src="img/strength.png"
        style={{
          top: '110%',
          left: "63%",
        }} />
        <img 
        className="ikonar"
        alt="intelligence"
        src="img/intelligence.png"
        style={{
          top: '110%',
          left: "75%",
        }} />
        <img 
        alt="fluency"
        className="ikonar"
        src="img/fluency.png"
        style={{
          top: '130%',
          left: "75%",
        }} />
        <img 
        alt="creativity"
        className="ikonar"
        src="img/creativity.png"
        style={{
          top: '130%',
          left: "63%",
        }} />
      </div>
      <Button 
        className={`${style.button} lax`} 
        data-lax-opacity="100 0, 400 1" 
        variant="contained" 
        color="primary" 
        href="https://hbr.org/2007/10/manage-your-energy-not-your-time"
      >
          Learn More
      </Button>
    </div>
    );
}
  
export default Idea;