
const MainSection = () => {
    return (
        <div className="relative container mx-auto my-auto">
            <div className="carousel w-full mt-4 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Tc1yssX/slider1.jpg" className="w-full h-2/3 lg:h-[620px] from-black" />
                    <div className="absolute flex justify-between transform -translate-y-1/2  left-5 right-5 top-1/3 lg:top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/7zH8qz3/slider2.jpg" className="w-full h-2/3 lg:h-[620px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 lg:top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wY6XfTf/slider3.jpg" className="w-full h-2/3 lg:h-[620px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 lg:top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/K0tM73C/slider4.jpg" className="w-full h-2/3 lg:h-[620px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 lg:top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="absolute top-24 left-20 md:top-40 md:left-52  lg:top-1/2 lg:left-1/3 md:space-y-7 lg:space-y-10">
                <h1 className="text-white text-base md:text-3xl lg:text-5xl  font-normal text-center text-l">খিলগাঁও সরকারি উচ্চ বিদ্যালয়</h1>
                <button className=" p-1 outline-none rounded bg-blue-700 btn-primary text-white text-sm md:text-base lg:text-xl font-normal  w-[90px] h-[24px] md:w-[120px] md:h-[36px] lg:w-[150px] lg:h-[44px]">আরও জানুন</button>
            </div>
        </div>
    );
};

export default MainSection;