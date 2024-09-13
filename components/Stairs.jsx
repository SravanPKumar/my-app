import { motion } from "framer-motion";

// Variants for individual stair animations
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%", // Move each stair down 100% of its height
    },
    exit: {
        top: ["100%", "0%"], // Reset to top when exiting
    },
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // Number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <div className="relative h-screen w-screen">
            {/* Render 6 motion divs, each representing a step of the stairs */}
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1, // Stagger the delay for each step
                    }}
                    className="absolute w-full h-1/6 bg-white" // Adjust the size of each step
                    style={{ top: `${index * 16.67}%` }} // Position each stair vertically
                />
            ))}
        </div>
    );
};

export default Stairs;
