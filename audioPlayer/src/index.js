import React from "react";
import { render } from "react-dom";
import ReactAudioPlayer from "react-audio-player";
import music from "./music.wav";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


const alerting = () => {
  alert("test");
};

const App = () => (
  <div style={styles}>
    <h1 onClick={alerting}>Test react audio player</h1>
    <ReactAudioPlayer
      src={music}
      autoPlay={true}
      controls
      preload="auto"
      loop={true}
    />
  </div>
);

render(<App />, document.getElementById("root"));