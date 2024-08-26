export default function VideoTestimonials() {
    return (
        <div className="p-6 pr-0 pt-2">
            <h1 className="text-3xl font-bold ">Video Testimonials</h1>
            {/* <div className="mt-6 overflow-auto relative h-[300px] w-[55%] flex-shrink-0 border-2 border-solid border-black rounded-lg" style={{ scrollSnapAlign: 'center' }}>
                <div className="mt-6 overflow-auto relative h-[300px] w-[55%] flex-shrink-0 border-2 border-solid border-black rounded-lg" style={{ scrollSnapAlign: 'center' }}>

                </div>
                <div className="mt-6 overflow-auto relative h-[300px] w-[55%] flex-shrink-0 border-2 border-solid border-black rounded-lg" style={{ scrollSnapAlign: 'center' }}>

                </div>
                <div className="mt-6 overflow-auto relative h-[300px] w-[55%] flex-shrink-0 border-2 border-solid border-black rounded-lg" style={{ scrollSnapAlign: 'center' }}>

                </div>
            </div> */}

            <div
                className="pt-4 relative max-w-full flex space-x-3 overflow-x-auto scroll-smooth no-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                <div className="h-[300px] w-[500px] bg-gray-400 rounded-lg"></div>
                <div className="h-[300px] w-[500px] bg-gray-400 rounded-lg"></div>
                <div className="h-[300px] w-[500px] bg-gray-400 rounded-lg"></div>
                <div className="h-[300px] w-[500px] bg-gray-400 rounded-lg"></div>
            </div>

        </div>
    )
}