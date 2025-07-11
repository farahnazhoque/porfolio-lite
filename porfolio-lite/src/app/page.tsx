"use client";

import Image from "next/image";
import { useScramble } from "use-scramble";
import { useState } from "react";

function ScrambleText({ text, onComplete, onHover }: { text: string; onComplete?: () => void; onHover?: boolean }) {

  const { ref, replay } = useScramble({
    text,
    speed: 0.5,
    tick: 1,
    step: 3,
    scramble: 5,
    seed: 2,
    range: [65, 125],
    onAnimationEnd: onComplete,
    playOnMount: !onHover, // Only play on mount if not hover-triggered
  });

  const handleMouseEnter = () => {
    if (onHover) {
      replay();
    }
  };

  const handleMouseLeave = () => {
    // No action needed on mouse leave
  };

  return (
    <span 
      ref={ref} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={onHover ? "cursor-pointer" : ""}
    />
  );
}

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleScrambleComplete = () => {
    setShowContent(true);
  };

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
        <div className="bg absolute inset-0 -z-10" />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-10 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-apple-garamond text-white mb-0 text-center sm:text-left">
          <ScrambleText text="hi, this is farahnaz hoque!" onComplete={handleScrambleComplete} />
        </h1>
        <p className={`text-gray-200 text-md font-apple-garamond transition-all duration-1000 ease-out delay-200 mt-0 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a href="mailto:fhoque1515@gmail.com" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold">
            <ScrambleText text="fhoque1515@gmail.com" onHover />
          </a>
          <span className="ml-1">↗</span>
        </p> 
        
        {/* Image Gallery */}
        <div className={`flex flex-row gap-4 max-w-4xl mx-auto transition-all duration-1000 delay-200 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex-1">
            <Image
              src='/image1.jpg'
              alt="Image 1"
              width={400}
              height={400}
              className="w-full h-30 sm:h-80 object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-1">
            <Image
              src='/image2.jpg'
              alt="Image 2"
              width={400}
              height={400}
              className="w-full h-30 sm:h-80 object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-1">
            <Image
              src='/image3.jpg'
              alt="Image 3"
              width={400}
              height={400}
              className="w-full h-30 sm:h-80 object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        <p className={`text-gray-200 text-md  font-apple-garamond font-bold transition-all duration-1000 ease-out delay-200 mt-0 mb-2 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ScrambleText text="mission" onHover />
          <br />
          <p className="text-gray-200 text-md font-normal font-apple-garamond transition-all duration-1000 ease-out delay-200 mt-0 mb-2">we do not exist in a void, and neither do our ideas and the software we build. however, with the boom of artificial intelligence, we developers are building tools faster than ever, yet, the depth and the purpose behind them are getting lost in the capatilization of it all. as a result, we now have an influx of tools that are causing more detriment than welfare.</p>
          <p className="text-gray-200 text-md font-normal font-apple-garamond transition-all duration-1000 ease-out delay-200 mt-0 mb-2">as a recent <span className="font-bold">computer science graduate</span> from the <a href="https://uci.edu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold"> <ScrambleText text="university of california, irvine" onHover /> </a> <span className="ml-1">↗</span>, who has been part of development teams within <span className="font-bold">higher education, research, and industry</span> settings, and having closely worked with students, entrepreneurs, teachers, and non-profits, my observations are such that the intelligent systems that have infiltrated our spaces, are attempting to replace people in fields and roles that require empathy, understanding,  and charity, and we programmers know that no line of code can ever mimic those human conditions. 
        </p>
        <p className="text-gray-200 text-md font-normal font-apple-garamond transition-all duration-1000 ease-out delay-200 mt-0 mb-2">so, i am in a pursuit of creating tools and software that take out the tediousness human being are often required to do in order to get to the things they enjoy. that is to say, i wish to ensure that my craft can coexist and aid humans rather them take out of the equation which they are the core principle of.
        </p>
        </p>
        <p className={`text-gray-200 text-md font-apple-garamond transition-all duration-1000 ease-out delay-200 mt-0 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-bold"><ScrambleText text="currently: " onHover /></span>
          <br></br>
          <ol className={`list-inside list-decimal text-md  sm:text-left font-apple-garamond transition-all duration-1000 ease-out delay-200 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <li className="mb-2 tracking-[-.01em]">
            developing an intelligent tool for{" "}
            <a
              href="https://conicgroup.com/" // <-- replace with the actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold"
            >
              <ScrambleText text="conic" onHover />
              
            </a>
            <span className="ml-1">↗</span>, which can be utilized by founders and Civic Leaders to make curated decisions based on their unique goals and resources.
          </li>
          <li className="tracking-[-.01em]">
            musing about creating a new fascility that refines and researches procedures for intelligent systems to work for humanity, not against it.
          </li>
        </ol>
        </p>
        
        {/* Previous Experience Section */}
        <div className={`transition-all duration-1000 ease-out delay-300 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-200 text-md font-apple-garamond transition-all duration-1000 ease-out delay-200 mt-0 mb-4">
            <span className="font-bold"><ScrambleText text="previously" onHover /></span>
          </p>
          
          <div className="flex flex-col gap-6 text-zinc-400 leading-snug">
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">cs @ uci</div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">involved in research, student leadership, and teaching.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">minored in health informatics with a focus on health equity and social justice.</li>
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">website developer and designer @ <a href="https://soar.uci.edu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold"> <ScrambleText text="soar uci" onHover /> </a> <span className="ml-1">↗</span></div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">developed and designed website for soar @ uci 0:1.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">worked with teams of student leaders, developing pages for each team, representing their mission, and highlighting their efforts to uplift marginalized communities at uci.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">resposible for the design and writing of e-newsletters, increasing the reach and number of recipients by 35%</li>
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">data science research intern @ <a href="https://drwulab.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold"> <ScrambleText text=" environmental health lab" onHover /> </a> <span className="ml-1">↗</span></div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">part of the joe c. wen school of population and public health at uci.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">developed a web-crawler to scrape the wildfires website and twitter for evacuation zones and orders across california that were highlighted during wildfires.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">analyzed and programmed an interactive map to visualize decade-long zone data for further research on trends surround air pollution and health.</li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">program co-director @ soar uci</div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">secured additional technological resources, such as 5 (total 12) extra laptops, expanding access to essential services for low-income students, reducing 70% of barriers to their academic and personal success during COVID-19.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">co-led 10 programs and workshops within 2 years in collaborative efforts to create a more inclusive and comprehensive community and solutions for students from diverse backgrounds navigating higher education at uci.</li>
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">full-stack developer for <a href="https://www.standuptotrash.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold"> <ScrambleText text="stand up to trash" onHover /> <span className="ml-1">↗</span></a></div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">built a full-stack volunteer and trash management system 0:1 for all of orange county&apos;s beaches.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">management system contributed to more informed decision-making for waste management and public health initiatives, helping track efforts in removing 8 million tons of plastic from the ocean annually.</li>
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">ml research assistant @ <a href="https://iasl.ics.uci.edu/people/marco-levorato/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold"> <ScrambleText text="intelligent and autonomous systems lab" onHover /> <span className="ml-1">↗</span></a></div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">part of the donald bren school of information and computer sciences at uci.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">assisted professor levorato with research surrounding privacy within internet of things devices.</li>
              </ul>
            </div>
            
          </div>
        </div>
      </main>
        <footer className={`row-start-3 flex gap-[24px] font-apple-garamond text-white font-semibold font-underline flex-wrap items-center justify-center relative z-10 transition-all duration-1000 ease-out delay-600 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <a href="https://www.linkedin.com/in/farahnazhoque/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold">
         
          <ScrambleText text="linkedin" onHover />
          <span className="ml-1">↗</span>
        </a>
       
        <a href="https://github.com/farahnazhoque" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold">
         
          <ScrambleText text="gitrhub" onHover />
          <span className="ml-1">↗</span>
        </a>
       
        <a href="https://farahnazhoque.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold">
         
         <ScrambleText text="main portfolio" onHover />
         <span className="ml-1">↗</span>
       </a>
       <a href="https://docs.google.com/document/d/1H5nMMazM4L4izmWehKXzhhD6GYs8ANdkw3DztmXM9sA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold">
         
         <ScrambleText text="resume" onHover />
         <span className="ml-1">↗</span>
       </a>
       <a href="https://farahnazhoque.substack.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-apple-garamond text-white font-semibold">
         
         <ScrambleText text="substack" onHover />
         <span className="ml-1">↗</span>
       </a>
       <div className="text-gray-400 font-apple-garamond text-sm mt-4">
         © 2025 Farahnaz Hoque. All rights reserved.
       </div>
      </footer>
    </div>
  );
}
