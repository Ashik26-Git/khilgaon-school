

const Result = () => {
    return (
        <div className="container mx-auto">
            <div className="mx-10 md:mx-24 lg:mx-32 mt-20 mb-20 ">
                <div className="hero w-full h-[250px] md:h-[300px] lg:h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/Tc1yssX/slider1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-base md:text-2xl lg:text-5xl font-bold text-white">সকল শ্রেণির ফলাফল প্রকাশ করা হয়েছে</h1>
                            {/* <button className="btn btn-primary"></button> */}
                            <button className="btn btn-xs bg-[#646CFF] text-white outline-none border-none sm:btn-sm md:btn-md lg:btn-lg">ফলাফল দেখুন</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;