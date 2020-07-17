import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./../App2.css";
import Wheels from "./Wheels";
export default function Car() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["translateY(-5px)"] },

    timing: {
      playbackRate: 1,
    
      duration: 10000,
      iterations: Infinity,
    },
  });

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.5);

  };

  return (
    <div className="car" onClick={speedUp}>
      <img
        src={require("./../Images/car.png")}
        alt=""
        width="100%"
        ref={ref}
        
      />
      
    </div>
  );
}
