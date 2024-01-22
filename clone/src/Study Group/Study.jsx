import React from "react";

const Study = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
      <div className="md:col-span-2 lg:col-span-2">
        <img src="study.svg" alt="" className="w-full max-w-md mx-auto" />
      </div>
      <div className="md:col-span-1 lg:col-span-1 my-5">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
          Create an invite-only place where you belong
        </h2>

        <p className="text-base lg:text-lg my-5 max-w-lg mx-auto lg:mx-0">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </div>
  );
};

export default Study;
