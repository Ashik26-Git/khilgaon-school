

const Notice = () => {
    return (
        <div>
            <div className="mt-16 mb-16">
                <p className="text-[#646CFF] text-3xl font-bold">সর্বশেষ বিজ্ঞপ্তি</p>
            </div>
            <div className="bg-[#646CFF] mx-32 rounded-lg">
                <div className="collapse collapse-arrow text-left">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-white">
                    তৃতীয় সপ্তাহের অ্যাসাইনমেন্ট সম্পূর্ণ।
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;