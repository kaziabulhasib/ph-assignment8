import heroimg from "../../../public/Heroimg.png";
const Banner = () => {
  return (
    <div className='hero py-20 px-28 bg-base-200 mt-14 rounded-3xl'>
      <div className='hero-content flex-col lg:flex-row-reverse lg:gap-20'>
        <img src={heroimg} className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-6xl leading-normal font-bold'>
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className=' nav-font  px-7 py-4 bg-[#23BE0A] text-white font-semibold text-[18px] mr-4 rounded-lg mt-16'>
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
