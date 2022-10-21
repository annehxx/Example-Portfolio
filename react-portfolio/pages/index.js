import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import girl from "../public/girl.webp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emma Carter Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">emma.codes</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Emma Carter
            </h2>
            <h3 className="text-2xl py-2">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelander providing services for programming and desing content
              needs. Join me down below.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillYoutube></AiFillYoutube>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
            <Image src={girl} layout="fill" objectFit="cover"></Image>
          </div>
        </section>
      </main>
    </div>
  );
}
