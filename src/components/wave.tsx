import React from "react";

const MovingWave = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#4f46e5"
          fillOpacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,192C480,181,600,107,720,80C840,53,960,75,1080,90.7C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default MovingWave;
