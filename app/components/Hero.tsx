import React from "react";
import SearchForm from "./SearchForm";

async function Hero({ params }: { params: Promise<{ query?: string }> }) {
  return (
    <section className="flex flex-col items-center justify-center bg-linear-65 from-purple-500 to-pink-500 h-100">
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect with Entrepreneurs
      </h1>
      <h2 className=" lg:text-2xl md:text-xl text-lg text-amber-50 text-shadow-lg font-serif text-center">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </h2>
      <SearchForm params={params} />
    </section>
  );
}

export default Hero;
