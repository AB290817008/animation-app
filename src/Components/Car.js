import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./../App2.css";

export default function Car() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["translateX(-50%)"]},
    
    timing: {
      playbackRate: 1,

      duration: 5000,
      iterations: Infinity,
    },
  });

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.25);
  };

  return (
    <div className="car" >
      <img src={require("./../Images/car.png")} alt="" width="100%" ref={ref} onClick={speedUp}/>
    </div>
  );
}
