"use client";

import Image from "next/image";
import { useScramble } from "use-scramble";
import { useState } from "react";

function ScrambleText({ text, onComplete, onHover }: { text: string; onComplete?: () => void; onHover?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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
      setIsHovered(true);
      replay();
    }
  };

  const handleMouseLeave = () => {
    if (onHover) {
      setIsHovered(false);
    }
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
        <div className={`flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-200 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex-1">
            <Image
              src='/image1.jpg'
              alt="Image 1"
              width={400}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <Image
              src='/image2.jpg'
              alt="Image 2"
              width={400}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <Image
              src='/image3.jpg'
              alt="Image 3"
              width={400}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
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
          <ol className={`list-inside list-decimal text-md text-center sm:text-left font-apple-garamond transition-all duration-1000 ease-out delay-200 ${
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
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">data science research intern @ joe c. wen school of population and public health</div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">Conducted research on population health data</li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">program co-director @ soar uci</div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">co-directed a program that taught high schoolers how to code and design.</li>
                <li className="text-gray-300 font-apple-garamond text-sm">taught students how to code and design.</li>
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">full stack developer for stand up to trash</div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">Built full-stack applications for environmental initiatives</li>
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 sm:gap-20 gap-2">
              <div className="col-span-1 text-white font-apple-garamond font-semibold text-md">ml research assistant @ donald bren school of information and computer sciences</div>
              <ul className="col-span-2 list-disc ml-4 space-y-1">
                <li className="text-gray-300 font-apple-garamond text-sm">Assisted with machine learning research projects</li>
              </ul>
            </div>
          </div>
        </div>
        
        

        <div className={`flex gap-4 items-center flex-col sm:flex-row transition-all duration-1000 ease-out delay-400 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
        <footer className={`row-start-3 flex gap-[24px] flex-wrap items-center justify-center relative z-10 transition-all duration-1000 ease-out delay-600 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
