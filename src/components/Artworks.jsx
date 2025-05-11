import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  "Welcome to U.ART Gallery!",
  "Log in to get started.", 
  "Start saving your favorite pieces.",
  "Create your own gallery and favorites list.",
  "Experience art like never before!"
];

export default function GalleryGuide() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prevIndex) => (prevIndex + 1) % steps.length); // Loop infinitely
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-6">
      <motion.div
        key={stepIndex}
        className="text-center"
        initial={{ opacity: 0, y:50 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-2xl md:text-3xl font-thin font-lato">{steps[stepIndex]}</h1>
      </motion.div>
    </div>
  );
}


