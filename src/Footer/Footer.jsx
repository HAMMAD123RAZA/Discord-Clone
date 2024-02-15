import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
      <div className="py-5 footer text-white  grid grid-cols-5 gap-5">

        {/* col 1st */}
        <div className="col-span-1 mt-4">

          <div className="drop down">

          </div>

          <div className="flex justify-around items-center">
            <div><TwitterIcon/></div>
            <div><InstagramIcon/></div>
            <div><FacebookIcon/></div>
            <div><YouTubeIcon/></div>
            <div><WhatsAppIcon/></div>
          </div>

        </div>

        {/* col 2nd with increased gap and margin at the top */}
        <div className="col-span-1 gap-10 mt-4 px-5">
          <h1 className="text-lg text-blue-800">Product</h1>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Download
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Nitro
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Status
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            App Directory
          </p>
        </div>

        {/* col 3rd */}
        <div className="col-span-1 mt-4">
          <h1 className="text-lg text-blue-800">Company</h1>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            About
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Jobs
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Newsroom
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Fall Release
          </p>
        </div>

        {/* col 4th */}
        <div className="col-span-1 mt-4">
          <h1 className="text-lg text-blue-800">Resources</h1>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            College
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Support
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Safety
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Blog
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Feedback
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Developers
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            StreamKit
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Creators
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Developers
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Official 3rd Party Merch
          </p>
        </div>

        {/* col 5th */}
        <div className="col-span-1 mt-4">
          <h1 className="text-lg text-blue-800">Policies</h1>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Terms
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Privacy
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Cookie Settings
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Guidelines
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Acknowledgements
          </p>
          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Licenses
          </p>

          <p className="hover:border-b border-black cursor-pointer text-white pt-2">
            Company Information
          </p>
        </div>

      
        <div className="col-span-5 mt-4 flex justify-between">

        <div>
  <img src="logo.svg" alt="" className="cursor-pointer" style={{ filter: 'invert(100%)' }} />
</div>


    <div>
      <button id="sign" className=" text-white h-12 rounded-full px-4">
        Sign In
      </button>
    </div>
  </div>

      </div>
    </>
  );
};

export default Footer;

