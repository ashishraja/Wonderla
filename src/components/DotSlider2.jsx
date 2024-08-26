'use client'
import { useState, useRef, useEffect } from 'react';

export default function DotSlider2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        { id: 1, title: 'Elite Package', description: "Regular Ticket + Food + Costume + Locker", price: "1199", comparatePrice: "1499", discount: "Save 20%" },
        { id: 2, title: 'Elite Package', description: "Regular Ticket + Food + Costume + Locker", price: "1199", comparatePrice: "1499", discount: "Save 20%" },
        { id: 3, title: 'Elite Package', description: "Regular Ticket + Food + Costume + Locker", price: "1199", comparatePrice: "1499", discount: "Save 20%" },
        { id: 4, title: 'Elite Package', description: "Regular Ticket + Food + Costume + Locker", price: "1199", comparatePrice: "1499", discount: "Save 20%" },
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
        <div className="container mx-auto pt-4">
            <div
                ref={sliderRef}
                className="flex gap-[20px] overflow-x-auto scroll-smooth no-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="h-[500px] p-2 border-2 border-black border-solid min-w-[87%] flex flex-col justify-between rounded-xl"
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        <div className="h-[80%] bg-gray-400 rounded-lg"></div>
                        <div className="flex gap-1 justify-center ">
                            <div className="p-2 pr-0 flex flex-col w-[65%] justify-center">
                                <h2 className="text-lg font-bold">{slide.title}</h2>
                                <p className="text-sm w-[70%] text-slate-400">{slide.description}</p>
                            </div>
                            <div className="p-2 pl-0 gap-2 flex flex-col items-center justify-center">
                                <div className="flex gap-3">
                                    <p className="text-black text-xl">{slide.price}</p>
                                    <p className="text-black text-gray-300 line-through">{slide.comparatePrice}</p>
                                </div>
                                <button className="bg-black text-white rounded-full text-xs p-1 px-5">{slide.discount}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}
