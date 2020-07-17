import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./../App2.css";
import Wheels1 from './Wheels1'

export default function Wheels() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["rotate(360deg)"] },
    
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
    <div className="wheels" >
      <img src={require("./../Images/wheel.png")} alt="" className='backwheel' ref={ref}/>
      <Wheels1/>
    </div>
  );
}
