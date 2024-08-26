'use client'
import { useState, useRef, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function OffersCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        { id: 1, title: 'Monsoon Mania', description: "Bangalore", subd: "Enjoy Wonderla Bhubaneshwar Monsoon Mania with unlimited rides and lush monsoon thrills!", offer: " BUY 2,  GET 1 FREE" },
        { id: 2, title: 'Monsoon Mania', description: "Chennai", subd: "Enjoy Wonderla Bhubaneshwar Monsoon Mania with unlimited rides and lush monsoon thrills!", offer: "BUY 2,  GET 1 FREE" },
        { id: 3, title: 'Monsoon Mania', description: "Goa", subd: "Enjoy Wonderla Bhubaneshwar Monsoon Mania with unlimited rides and lush monsoon thrills!", offer: "BUY 2,  GET 1 FREE" },
        { id: 4, title: 'Monsoon Mania', description: "Gujarat", subd: "Enjoy Wonderla Bhubaneshwar Monsoon Mania with unlimited rides and lush monsoon thrills!", offer: "BUY 2,  GET 1 FREE" },
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
        <div className="container mx-auto pt-8 ">
            <h1 className="text-3xl font-bold my-4 mb-2 tracking-wide">Offers</h1>
            <div
                ref={sliderRef}
                className="relative flex space-x-3 overflow-x-auto scroll-smooth no-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="overflow-auto relative h-[220px] w-[94%] flex-shrink-0 border-2 border-solid border-black rounded-lg"
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        <div className="h-full px-5 flex flex-col gap-1 justify-center">
                            <p className="text-sm">{slide.description}</p>
                            <h1 className="text-2xl font-bold">{slide.title}</h1>      
                            <p className="text-md font-bold">{slide.offer}</p>
                            <h2 className="w-[80%] text-sm">{slide.subd}</h2>                            
                        </div>
                        <div className="absolute right-0 bottom-0 bg-black p-4">
                            <FaArrowRight color="white"/>
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
