import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./../App2.css";

export default function City() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["translateX(-1400px)"] },
    timing: {
      playbackRate: 1,

      duration: 30000,
      iterations: Infinity,
    },
  });

  // const speedUp = () => {
  //   const animation = getAnimation();
  //   animation.updatePlaybackRate(animation.playbackRate * 1.25);
  // };

  return (
    <div className="city">
      <img src={require("./../Images/city.png")} alt="" width="850%" ref={ref} />
      
    </div>
  );
}
