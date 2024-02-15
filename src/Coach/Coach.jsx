import React from "react";

const Coach = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 my-5">
      <div className="md:col-span-1">
        <img src="coach.svg" alt="" className="w-full max-w-md mx-auto" />
      </div>
      <div className="md:col-span-1">
        <h1 className="text-2xl md:text-4xl font-bold line-relaxed md:w-2/5">
          From few to a fandom
        </h1>
        <p className="text-base md:text-lg line-relaxed md:w-2/4 my-3">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and more.
        </p>
      </div>
    </div>
  );
};

export default Coach;
