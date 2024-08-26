'use client'
import { useState, useRef, useEffect } from 'react';

export default function DotSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        { id: 1, title: 'Ride Name', description: "Bangalore", subd: "India's first-ever reverse-looping roller coaster ", button: "Know more" },
        { id: 2, title: 'Ride Name', description: "Chennai", subd: "India's first-ever reverse-looping roller coaster ", button: "Know more" },
        { id: 3, title: 'Ride Name', description: "Goa", subd: "India's first-ever reverse-looping roller coaster ", button: "Know more" },
        { id: 4, title: 'Ride Name', description: "Gujarat", subd: "India's first-ever reverse-looping roller coaster ", button: "Know more" },
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
        <div className="container mx-auto pt-8">
            <div
                ref={sliderRef}
                className="relative flex gap-[20px] overflow-x-auto scroll-smooth no-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="h-[360px] min-w-[65%] flex-shrink-0 border-2 border-solid border-black rounded-lg"
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        <div className="h-[65%] border-b-2 border-solid border-black min-w-[65%]"></div>
                        <div className="flex flex-col gap-1 min-w-[65%]">
                            <div className=" p-3 px-2 pl-5 flex flex-col min-w-[65%]">
                                <h2 className="text-lg">{slide.title}</h2>
                                <p className="text-sm text-slate-400">{slide.description}</p>
                            </div>
                            {/* <div className="flex items-center">
                                <p className="w-[40%] text-black">{slide.subd}</p>
                                <button className="bg-black text-white p-1 px-4">{slide.button}</button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 space-x-1">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-white border-2 border-solid border-black'
                            }`}
                        onClick={() => {
                            const slideWidth = sliderRef.current.clientWidth / 2;
                            sliderRef.current.scrollTo({
                                left: index * slideWidth,
                                behavior: 'smooth',
                            });
                            setCurrentSlide(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
