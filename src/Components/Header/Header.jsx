

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex py-3 px-5 justify-end mr-32">
        <div className="flex pt-4">
            <div className='flex gap-3 text-xs mr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <p className='text-[#03071299] font-bold'>09934304</p>
            </div>
            <div className='flex gap-3 text-xs mr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <p className='text-[#03071299] font-bold'>nfo@kghs.com</p>
            </div>
        </div>
        <button className="btn btn-primary text-white w-24 h-10">Login</button>        
      </div>
      
      <div className="mt-2 bg-[#C3BDFF]">
        <div  className="flex pt-4 justify-center gap-2">
            <div className="w-24 h-24">
                <img src="../../assets/images/schoollogo.jpg" alt="logo" />
            </div>
            <div className="space-y-3">
              <h1 className="text-[#3C3C43] font-semibold text-4xl">Khilgaon Govt. High School</h1>
              <h2 className="text-[#646CFF] font-semibold text-3xl">EIIN 108376</h2>
            </div>
        </div>  
      </div>
        <div className="bg-[#646CFF]">
        <marquee  direction="left" className="py-4 text-white font-bold italic text-base">২০২৪-২৫ শিক্ষাবর্ষে আবেদন ও ভর্তির তারিখ সংক্রান্ত বিজ্ঞপ্তি*  * *ইউআইডি ফরম* *  *শৃঙ্খলা কমিটির সভার কার্যবিবরণী২০২৩ সালের এসএসসি পরীক্ষার ফল প্রকাশ প্রসঙ্গে</marquee>
      </div>
      <nav className="mt-5">
          <ul className="flex justify-center gap-7">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#academic">Academic</a></li>
            <li><a href="#notices">Notices</a></li>
            <li><a href="#admission">Online Admission</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#magazine">Magazine</a></li>
            <li><a href="#payment">Online Payment</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
