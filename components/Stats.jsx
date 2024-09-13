"use client";

import CountUp from "react-countup";

const stats = [
    { num: 12, text: "Years of Experience" },
    { num: 2, text: "Projects Completed" },
    { num: 3, text: "Technologies Mastered" },
    { num: 2, text: "Code Commits" },
];

const Stats = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                {/* Grid setup: 2x2 on mobile, 1x4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center lg:items-center justify-center lg:flex-row gap-4 text-center"
                        >
                            {/* CountUp Animation */}
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={index * 0.5} // Staggering animations
                                className="text-4xl xl:text-6xl font-extrabold text-accent"
                            />
                            {/* Accompanying Text */}
                            <p className="text-lg xl:text-xl font-medium text-white/80">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
