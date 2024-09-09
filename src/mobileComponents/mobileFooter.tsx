"use client";

import Link from "next/link";
import email_logo from "../../public/email_logo.svg";
import insta_logo from "../../public/insta_logo.svg";
import github_logo from "../../public/github_logo.svg";
import kakaoTalk_logo from "../../public/kakaoTalk_logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-start w-full h-[294px] relative gap-6 px-7 py-16 bg-[#06132d]">
      <p className="flex-grow-0 flex-shrink-0 w-32 text-[28px] font-bold text-center text-white">
        B-CUBE
      </p>
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-base text-center">
          <span className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#518cff]">
            B
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-base text-center text-white">
            road{" "}
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#518cff]">
            B
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-base text-center text-white">
            usiness{" "}
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#518cff]">
            B
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-base text-center text-white">
            uilder
          </span>
        </p>
        <p className="font-light text-[16px]  text-white">
          B-CUBE (비큐브, 아주대학교 경영대학 소학회)
        </p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
        <Link href="#">
          <Image src={email_logo} alt="email_logo" width={40} height={40} />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image src={insta_logo} alt="insta_logo" width={40} height={40} />
        </Link>
        <Link href="#">
          <Image
            src={kakaoTalk_logo}
            alt="kakaoTalk_logo"
            width={40}
            height={40}
          />
        </Link>
        <Link
          href="https://github.com/B-cube-website/b-cube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={github_logo} alt="github_logo" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
}
