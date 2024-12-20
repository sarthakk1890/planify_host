"use client";

import Image from "next/image";
import NylasLogo from "@/public/nylas-logo.png";
import NextjsLogo from "@/public/nextjs-logo.svg";
import TailwindLogo from "@/public/tailwind.png";
import Github from "@/public/github.png";
import vercelLogo from "@/public/vercel.svg";
import Prisma from "@/public/prisma.svg";
import Marquee from "react-fast-marquee";

export function Logos() {
  return (
    <div className="py-10">
      <h2 className="text-center text-lg font-semibold leading-7 mb-8">
        Trusted by the best companies in the world*
        <br />
        <p className="text-xs italic">(The companies listed are for illustrative purposes only and do not represent real endorsements.)</p>
      </h2>
      <Marquee speed={100} gradient={false}>
        {[
          { src: NylasLogo, alt: "Nylas Logo" },
          { src: TailwindLogo, alt: "Tailwind Logo" },
          { src: NextjsLogo, alt: "Next.js Logo" },
          { src: vercelLogo, alt: "Vercel Logo" },
          { src: Github, alt: "Github Logo" },
          { src: Prisma, alt: "Prisma Logo" },
        ].map((logo, index) => (
          <div
            key={index}
            className="px-8 flex justify-center items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain dark:invert"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
