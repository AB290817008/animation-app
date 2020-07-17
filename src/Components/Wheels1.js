import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./../App2.css";

export default function Wheels1() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["rotate(360deg)"]},
    timing: {
      playbackRate: 1,

      duration: 1000,
      iterations: Infinity,
    },
  });

  // const speedUp = () => {
  //   const animation = getAnimation();
  //   animation.updatePlaybackRate(animation.playbackRate * 1.25);
  // };

  return (
    <>
      
      <img src={require("./../Images/wheel.png")} alt="" className='frontwheel' ref={ref}/>
    </>
  );
}
