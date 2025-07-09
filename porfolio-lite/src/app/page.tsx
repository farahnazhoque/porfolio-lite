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
    step: 1,
    scramble: 5,
    seed: 0,
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: 'url(/background.gif)' }} />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-10 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-apple-garamond text-white mb-0 text-center sm:text-left">
          <ScrambleText text="hi, this is farahnaz hoque!" onComplete={handleScrambleComplete} />
        </h1>
        <p className={`text-gray-200 text-md font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 mt-0 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          fhoque1515@gmail.com
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
        <p className={`text-gray-200 text-md font-[family-name:var(--font-geist-mono)] font-semibold transition-all duration-1000 ease-out delay-200 mt-0 mb-2 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ScrambleText text="who am i?" onHover />
          <br />
          <p className="text-gray-200 text-sm font-normal font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 mt-0 mb-2">the future does not need more “human-like” machines, it needs more humane tools. i am not interested in replacing empathy and creativity with algorithms; instead, my mission lies in redesigning the systems that have quietly harmed us, so they can finally serve us.</p>
          <p className="text-gray-200 text-sm font-normal font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 mt-0 mb-2">i build systems and software that uplift human dignity, not mimic it, at the edges where automation helps, not replaces. i am an advocate for ethical tech with experience across higher education, research, and industry. with a background in b.s. in computer science and a minor in health informatics from the university of california, irvine, as a recent graduate, i am in a journey to fuse engineering with accountability and charity.</p>
        </p>
        <p className={`text-gray-200 text-md font-[family-name:var(--font-geist-mono)] font-semibold transition-all duration-1000 ease-out delay-200 mt-0 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ScrambleText text="currently: " onHover />
        </p>
        
        <ol className={`list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <li className="mb-2 tracking-[-.01em]">
            developing an intelligent tool for{" "}
            <a
              href="https://conicgroup.com/" // <-- replace with the actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center underline underline-offset-4 decoration-white hover:opacity-80 font-[family-name:var(--font-geist-mono)] text-white font-semibold"
            >
              <ScrambleText text="conic" onHover />
              <span className="ml-1">↗</span>
            </a>
            , which can be utilized by founders and Civic Leaders to make curated decisions based on their unique goals and resources.
          </li>
          <li className="tracking-[-.01em]">
            musing about creating a new fascility that refines and researches procedures for Intelligent Systems to work for humanity, not against it.
          </li>
        </ol>

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
