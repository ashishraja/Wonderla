'use client'
import { useState, useRef, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function GroupBooking() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        { id: 1, title: 'Corporate', description: "Bangalore", subd: "Special rates for corporate events and school trips"},
        { id: 2, title: 'Corporate', description: "Chennai", subd: "Special rates for corporate events and school trips"},
        { id: 3, title: 'Corporate', description: "Goa", subd: "Special rates for corporate events and school trips"},
        { id: 4, title: 'Corporate', description: "Gujarat", subd: "Special rates for corporate events and school trips"},
    ];

    const handleScroll = () => {
        const slideWidth = sliderRef.current.clientWidth / 2;
        const newSlideIndex = Math.round(sliderRef.current.scrollLeft / slideWidth);
        setCurrentSlide(newSlideIndex);
    };

    useEffect(() => {
        sliderRef.current.addEventListener('scroll', handleScroll);
        return () => {
            sliderRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto pt-8 pl-6">
            <h1 className="text-3xl font-bold my-4 mb-2 tracking-wide">Group Bookings</h1>
            <div
                ref={sliderRef}
                className="relative flex space-x-3 overflow-x-auto scroll-smooth no-scrollbar pt-4"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="overflow-auto relative h-[220px] w-[95%] flex-shrink-0 border-2 border-solid bg-gray-200 border-black rounded-lg"
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        <div className="h-full px-5 flex flex-col gap-1 justify-center">
                            <p className="text-sm">{slide.description}</p>
                            <h1 className="text-2xl font-bold">{slide.title}</h1>      
                            <h2 className="w-[70%] text-sm">{slide.subd}</h2>                            
                        </div>
                        <div className="absolute right-4 bottom-4 bg-black p-4 py-2 rounded-full">
                            <button className="text-white ">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
