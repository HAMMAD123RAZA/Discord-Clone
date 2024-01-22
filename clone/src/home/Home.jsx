import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LanguageIcon from '@mui/icons-material/Language';
const Home = () => {
  return (
    <div className="container  my-5 py-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-8 gap-14">
      {/* left */}
      <div className="col-span-2 mt-14 pe-4" >
        <img src="right.svg" alt="" />
      </div>
      {/* middle */}
      <div className="col-span-4 text-white sm:col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-4">
        <h1 className='text-6xl font-bold py-4 text-center'>IMAGINE A PLACE...</h1>
        <p className='text-xl text-center w-3/2 '>
          ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>
        <div className='flex flex-col justify-center sm:flex-row  mt-5 '>
        <button className='my-2 sm:my-0 bg-white text-black rounded-full h-12 w-52  me-2'> <span><FileDownloadIcon/></span>Download for windows</button>
          <button className='my-2 sm:my-0 text-white bg-black rounded-full h-12 w-52'><span className='mx-2'><LanguageIcon/></span>Open in Browser</button>
        </div>
      </div>
      {/* right */}
      <div className="col-span-2 mt-14 ps-4">
        <img src="left.svg" alt="" className='right' />
      </div>
    </div>
  );
};

export default Home;
