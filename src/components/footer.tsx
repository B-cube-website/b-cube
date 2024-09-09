"use client";

import Link from "next/link";
import logo from "../../public/logo.svg";
import BCUBE from "../../public/BCUBE.svg";
import email_logo from "../../public/email_logo.svg";
import insta_logo from "../../public/insta_logo.svg";
import github_logo from "../../public/github_logo.svg";
import kakaoTalk_logo from "../../public/kakaoTalk_logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative z-50 flex flex-col w-full bg-[#06132D]">
      <div className="flex flex-row justify-between items-center p-2 h-[100px]">
        <div className="flex flex-row items-center gap-4">
          <Image src={logo} alt="logo" />
          <Image src={BCUBE} alt="BCUBE" />
        </div>

        <div className="flex justify-start items-center gap-6"></div>

        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <Link href="#">
                <div>
                  <Image src={email_logo} alt="email_logo" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <div>
                  <Image src={insta_logo} alt="insta_logo" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div>
                  <Image src={kakaoTalk_logo} alt="kakaoTalk_logo" />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/B-cube-website/b-cube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <Image src={github_logo} alt="github_logo" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
