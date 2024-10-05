import { motion } from "framer-motion";
import Image from "next/image";
import background from "../assets/level-up-bg.svg";
import badge from "../assets/level-up-badge.svg";

const NextLevel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen py-10 md:py-6 flex flex-col items-center justify-center"
    >
      {/* Content wrapper */}
      <div className="top-content-wrapper w-full px-4 lg:px-20">
        <div className="relative">
          {/* LEVEL UP text */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              backgroundImage:
                "radial-gradient(47.55% 47.55% at 50% 14.71%, #FFF4C0 0.07%, #FFE02E 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0px 0px 16px 0px rgba(243, 186, 47, 1)",
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center"
          >
            LEVEL UP
          </motion.h1>

          {/* Badge and rank */}
          <motion.div className="badge-container flex flex-col justify-center items-center mt-6 sm:mt-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <Image
                src={badge}
                alt="Badge"
                width={224}
                height={188}
                className="my-5"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#291911] mt-5 "
            >
              Corporal
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="flex w-full md:w-2/3 lg:w-1/2 justify-between font-bold text-white mt-2"
            >
              <p>
                XP: <span className="text-[#F08E3C]">34,500</span>
              </p>
              <p>50,000</p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-full md:w-2/3 lg:w-1/2 ">
              <motion.div className="bg-[#35241C] h-[22px] rounded-[5px] overflow-hidden my-2 mx-auto relative">
                <motion.div
                  initial={{ width: 0 }} // Start from 0%
                  animate={{ width: `69%` }} // Animate to the xp percentage
                  transition={{ duration: 1.5, delay: 1 }} // Match the outer container's duration
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFF00 0%, #FBB03B 22.6%, #F7931E 47.24%, #F37830 64.12%, #F16A3A 76%, #F37433 84.61%, #F79020 99.46%, #F7931E 100.65%)",
                  }}
                  className="h-[60%] absolute left-2 rounded-sm top-1/2 -translate-y-1/2"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Claim Badge Button */}
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#ff8c00",
              boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            className="block mx-auto mt-8 px-6 py-4 text-xl md:text-2xl font-bold text-[#35241C] border border-[#35241C] rounded-md bg-gradient-to-b from-white via-[#F3AC59] to-[#EC6615] hover:scale-105 transition-all"
          >
            Claim NFT Badge
          </motion.button>

          {/* Extra text at the bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-center text-lg md:text-xl font-bold mt-8 text-[#35241C]"
          >
            You’ve leveled up and earned a new badge!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-center text-base md:text-lg text-[#DCC794] mt-2"
          >
            Claim your <span className="font-bold">NFT badge</span> now, or
            retrieve it later from your Inventory.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-center text-sm md:text-base text-[#DCC794] mt-7 mx-auto w-full md:w-3/4"
          >
            To claim your new badge, you&apos;ll need to transfer your previous
            badge from your wallet for it to be burned in exchange for the new
            one. If there&apos;s insufficient gas in your wallet, the
            transaction will be canceled. You can always visit your Inventory
            and claim your badge at any time.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default NextLevel;
