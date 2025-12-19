import Image from "next/image";
import ShinyUnderline from "./ShinyUnderline";
import DraggableStickyNote from "./DraggableStickyNote";

const DiagonalArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="text-gray-400 flex-shrink-0"
  >
    <path
      d="M2 12L12 2M12 2H4M12 2V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

import LeafLens from "./LeafLens";

export default function Hero() {
  return (
    <section className="grid-section relative">
      <LeafLens />
      <div className="p-6 md:p-12">
        <div className="w-full">
          <p className="hero-name text-xl md:text-2xl mb-4 tracking-tight font-semibold">
            Ryan Ning
          </p>
          <h1 className="tracking-tighter text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Made commerce better at{" "}
            <span className="inline-flex items-center justify-center h-[2.5rem] md:h-[3.5rem] lg:h-[4rem] w-[6.5rem] md:w-[8.5rem] lg:w-[10rem] rounded-full bg-white overflow-hidden mx-2 align-middle border border-gray-200">
              <Image
                src="/logos/shopify-logo.png"
                alt="Shopify"
                width={140}
                height={40}
                className="h-[50%] w-auto object-contain"
              />
            </span>{" "}
            Researched AI at{" "}
            <span className="inline-flex items-center justify-center h-[2.5rem] md:h-[3.5rem] lg:h-[4rem] w-[6.5rem] md:w-[8.5rem] lg:w-[10rem] rounded-full bg-black overflow-hidden mx-2 align-middle">
              <div className="flex items-center justify-center h-full w-full">
                <Image
                  src="/logos/university-of-toronto-logo.jpg"
                  alt="University of Toronto"
                  width={140}
                  height={50}
                  className="h-[180%] w-auto object-contain object-center"
                />
              </div>
            </span>{" "}
            Reimagining the way people move at{" "}
            <span className="inline-flex items-center justify-center h-[2.5rem] md:h-[3.5rem] lg:h-[4rem] w-[6.5rem] md:w-[8.5rem] lg:w-[10rem] rounded-full bg-black overflow-hidden mx-2 align-middle">
              <div className="flex items-center justify-center h-full w-full">
                <Image
                  src="/logos/uber-icon.png"
                  alt="Uber"
                  width={140}
                  height={50}
                  className="h-[150%] w-auto object-contain object-center"
                />
              </div>
            </span>{" "}
            next summer
          </h1>
          <div className="mt-8">
            <DraggableStickyNote>
              <p className="label-text mb-4 text-gray-500">RECENT PROJECTS</p>
              <ul className="space-y-2 text-base md:text-lg text-gray-700">
                <li className="flex items-center gap-3">
                  <DiagonalArrow />
                  <a
                    href="https://trygitwrap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:text-gray-900 transition-colors"
                  >
                    Github Wrapped -{" "}
                    <ShinyUnderline
                      text="15k users"
                      delay={0}
                      className="text-gray-900"
                    />
                    , 42k page views
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <DiagonalArrow />
                  <a
                    href="https://devpost.com/software/token-turrets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:text-gray-900 transition-colors"
                  >
                    Token Turrets -{" "}
                    <ShinyUnderline
                      text="Hack the North"
                      delay={2}
                      className="text-gray-900"
                    />{" "}
                    Winner (2025)
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <DiagonalArrow />
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7399484044687761408/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:text-gray-900 transition-colors"
                  >
                    Scholarly -{" "}
                    <ShinyUnderline
                      text="Anthropic AI"
                      delay={4}
                      className="text-gray-900"
                    />{" "}
                    Hackathon Winner (2025)
                  </a>
                </li>
              </ul>
            </DraggableStickyNote>
          </div>
        </div>
      </div>
    </section>
  );
}
