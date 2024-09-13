"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles = "", btnStyles = "", iconStyles = "" }) => {
    const swiper = useSwiper();

    return (
        <div className={`${containerStyles} flex justify-center items-center`}>
            <button
                className={`${btnStyles} rounded-full flex justify-center items-center`}
                onClick={() => swiper.slidePrev()}
                aria-label="Previous slide"
            >
                <PiCaretLeftBold className={`${iconStyles} text-[16px] md:text-[20px]`} />
            </button>
            <button
                className={`${btnStyles} rounded-full flex justify-center items-center`}
                onClick={() => swiper.slideNext()}
                aria-label="Next slide"
            >
                <PiCaretRightBold className={`${iconStyles} text-[16px] md:text-[20px]`} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;
