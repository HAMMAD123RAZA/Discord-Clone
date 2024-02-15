import React from "react";

const Voice = () => {
  return (
    <div className="bg1 grid grid-cols-1 md:grid-cols-2 py-5 my-5">
      <div className="md:col-span-1 md:ms-5">
        <h2 className="text-2xl md:text-4xl font-bold" id="voice">
          Where hanging out is easy
        </h2>
        <p className="text-base md:text-lg my-4 max-w-md md:w-2/4 line-relaxed">
          Grab a seat in a voice channel when you’re free. Friends in your server
          can see you’re around and instantly pop in to talk without having to call.
        </p>
      </div>
      <div className="md:col-span-1 md:me-5">
        <img src="voice.svg" alt="" className="w-full max-w-md mx-auto" />
      </div>
    </div>
  );
};

export default Voice;
