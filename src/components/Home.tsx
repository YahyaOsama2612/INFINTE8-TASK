"use client";

import { useState } from "react";
import NextLevel from "./NextLevel";
import Rewards from "./Rewards";

const Home = () => {
  const [showNextLevel, setShowNextLevel] = useState(false);
  const [showRewards, setRewards] = useState(false);

  const showNextLevelPopUp = () => {
    setRewards(false);
    setShowNextLevel(false);
    setTimeout(() => {
      setShowNextLevel(true);
    }, 0);
  };
  const showRewardsPopUp = () => {
    setShowNextLevel(false);
    setRewards(true);
  };

  return (
    <div>
      <div className="flex justify-center space-x-5 mb-5">
        <button
          className="mt-2 mb-2 text-white bg-slate-500 p-2 rounded-lg"
          onClick={showNextLevelPopUp}
        >
          Next Level
        </button>
        <button
          className="mt-2 mb-2 text-white bg-slate-500 p-2 rounded-lg"
          onClick={showRewardsPopUp}
        >
          Rewards
        </button>
      </div>

      {showNextLevel && <NextLevel />}
      {showRewards && <Rewards closeRewards={() => setRewards(false)} />}
    </div>
  );
};

export default Home;
