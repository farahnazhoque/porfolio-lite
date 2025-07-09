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
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-10">
        <h1 className="text-4xl font-bold font-apple-garamond text-white mb-0">
          <ScrambleText text="Hi, this is Farahnaz Hoque!" onComplete={handleScrambleComplete} />
        </h1>
        <p className={`text-gray-200 text-md font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 mt-0 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          fhoque1515@gmail.com
        </p>
        
        {/* Image Gallery */}
        <div className={`flex flex-col sm:flex-row gap-6 w-full max-w-4xl transition-all duration-1000 delay-200 ease-out ${
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
        <p className={`text-gray-200 text-md font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 mt-0 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ScrambleText text="Currently: " onHover />
        </p>
        
        <ol className={`list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] transition-all duration-1000 ease-out delay-200 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
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
