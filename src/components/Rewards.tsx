"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import background from "../assets/rewards-bg.svg";
import badgeone from "../assets/rewards-badgeOne.svg";
import badgetwo from "../assets/rewards-badgeTwo.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";

interface RewardsProps {
  closeRewards: () => void;
}

const Rewards = ({ closeRewards }: RewardsProps) => {
  const [flipOne, setFlipOne] = useState(false);
  const [flipTwo, setFlipTwo] = useState(false);

  // Function to handle closing the modal (or any action you need)
  const handleClose = () => {
    closeRewards();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      className="relative w-11/12 mb-10 lg:w-2/3 xl:w-1/2 min-h-[600px] rounded-xl mx-auto p-6 flex flex-col justify-center items-center"
    >
      {/* Close button with "X" */}
      <button
        onClick={handleClose}
        className="absolute top-4 border-[2px] font-bold rounded-lg px-2 right-4 text-white text-lg hover:text-gray-300 transition-all"
        style={{ zIndex: 10 }}
      >
        x
      </button>

      <motion.div
        className="text-center -translate-y-10 lg:-translate-y-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1
          className="font-black text-3xl md:text-5xl mb-4"
          style={{
            background: "#F3BA2F",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 15px rgba(243, 186, 47, 0.7)",
          }}
        >
          Congratulations!
        </h1>
        <h3 className="font-medium text-xl md:text-3xl text-[#F3BA2F]">
          Command Completed Successfully
        </h3>
        <p className="mt-4 text-base md:text-lg text-[#C8AA7A] w-full sm:w-3/4 lg:w-2/3 mx-auto">
          You have successfully completed a command! Here are your well-earned
          rewards. Keep exploring the Command Center for more exciting missions
          and bigger rewards!
        </p>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <Image src={arrowLeft} alt="Arrow Left" className="w-1/3 md:w-auto" />
          <p className="font-normal text-white text-lg md:text-xl">Rewards</p>
          <Image
            src={arrowRight}
            alt="Arrow Right"
            className="w-1/3 md:w-auto transform rotate-180"
          />
        </div>

        <div className="mt-8 flex justify-center space-x-8 md:space-x-12">
          {/* Badge 1 */}
          <motion.div
            onClick={() => setFlipOne(!flipOne)}
            className="w-[120px] md:w-[150px] h-[160px] md:h-[200px] perspective"
          >
            <motion.div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                cursor: "pointer",
              }}
              animate={{ rotateY: flipOne ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Front Side */}
              <motion.div
                className="w-full h-full rounded-lg"
                style={{ backfaceVisibility: "hidden" }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              >
                <Image
                  src={badgeone}
                  alt="Badge One"
                  layout="fill" // Ensure it fills the parent
                  objectFit="cover" // Cover the entire area
                  className="rounded-lg"
                />
              </motion.div>
              {/* Back Side */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#FFD700]"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h2 className="text-white text-xl">Bonus XP!</h2>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            onClick={() => setFlipTwo(!flipTwo)}
            className="w-[120px] md:w-[150px] h-[160px] md:h-[200px] perspective"
          >
            <motion.div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                cursor: "pointer",
              }}
              animate={{ rotateY: flipTwo ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Front Side */}
              <motion.div
                className="w-full h-full rounded-lg"
                style={{ backfaceVisibility: "hidden" }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              >
                <Image
                  src={badgetwo}
                  alt="Badge Two"
                  layout="fill" // Ensure it fills the parent
                  objectFit="cover" // Cover the entire area
                  className="rounded-lg"
                />
              </motion.div>
              {/* Back Side */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#FFD700]"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h2 className="text-white text-xl">Special Reward!</h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Rewards;
