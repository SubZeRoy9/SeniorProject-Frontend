import React, { useEffect, useRef } from "react";
import video1 from "../../assets/video1.mp4";

function BackgroundVideo() {
  return (
    <video
      id="background-video"
      width="100%"
      height="100%"
      loop={true}
      autoPlay={true}
      muted={true}
    >
      <source src={video1} type="video/mp4" />
    </video>
  );
}
export default BackgroundVideo;
