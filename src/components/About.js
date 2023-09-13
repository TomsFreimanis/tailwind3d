import React from 'react';
import Spline from "@splinetool/react-spline";

const About = () => {
return (
<section className="about h-full flex flex-col justify-center items-center bg-black">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

<div className="grid grid-cols-1 md:grid-cols-2  gap-8">
{/* Left side */}
<div className="bg-black border-teal-700 transform hover:scale-105 transition duration-300 overflow-hidden  border self-center p-6 rounded-lg shadow-lg text-white  ">
<p className="text-xl leading-relaxed  ">
  I’m now looking for a junior dev position to finally kick start my career and learn among professionals. I design and code beautifull and simple things. I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try make a homepage for a friend.
</p>
</div>

      {/* Right side */}
      <div className="mt-8 mx-auto">
        <Spline scene="https://prod.spline.design/twOMpL-ohMi2TNB7/scene.splinecode" />
      </div>
    
      {/* Left side (lower) */}
  
    </div>
  </div>
</section>
);
}

export default About;