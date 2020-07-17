import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./../App2.css";

export default function Highway() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["translateX(-3200px)"] },
    timing: {
      playbackRate: 1,
      
      duration: 2500,
      iterations: Infinity,
    },
  });

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.25);
  };

  return (
    <div className="highway"  >
      <img src={require("./../Images/road.jpg")} alt="" ref={ref} />
    </div>
  );
}
