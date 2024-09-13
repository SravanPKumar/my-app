"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Stairs from "./Stairs";

// Define fade animation for the overlay
const fadeAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0 },
};

const StairTransition = () => {
    const pathname = usePathname();
    
    return (
        <AnimatePresence mode="wait">
            {/* Unique key based on pathname to trigger animation on route change */}
            <motion.div key={pathname} className="h-screen w-screen fixed top-0 right-0 pointer-events-none z-40">
                {/* Stairs animation */}
                <Stairs />

                {/* Fading out overlay */}
                <motion.div
                    className="h-screen w-screen fixed top-0 right-0 pointer-events-none"
                    variants={fadeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"  // Ensure exit is handled for a smooth fade-out
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default StairTransition;
