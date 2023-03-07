import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContentLoader from "react-content-loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aia from "../public/aia.png";
import axios from "axios";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(aia.src);
  const [isLoading, setIsloading] = useState(false);
  const [input, setInput] = useState("");

  const submit = async () => {
    setIsloading(true);
    axios
      .post("/api/image-generator", {
        input: prompt,
      })
      .then(function (res) {
        setIsloading(false);
        setImage(res.data.image);
      })
      .catch(function (err) {
        console.log(err);
      });

    // image;
  };

  const loading = (
    <ContentLoader
      speed={1}
      width={256}
      height={256}
      viewBox="0 0 256 256"
      backgroundColor="#171717"
      foregroundColor="#1f1f1f"
      className="loading"
    >
      <rect x="0" y="0" rx="16" ry="16" width="256" height="256" />
    </ContentLoader>
  );

  const imageProp = <Image alt="Github" src={image} />;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Image Generator" />
        <meta
          property="og:description"
          content="Transform words into visuals with AI image generator. Effortlessly create custom images based on your descriptions.
"
        />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/766626153267855361/1082379790234943529/Frame_1052.png?width=1984&height=882"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="header">
              <h1>Image Generator</h1>
              <p>
                Transform words into visuals with AI image generator.
                Effortlessly create custom images based on your descriptions.
              </p>
            </div>
            <div className="inputs">
              <input
                placeholder="Grey Cat with Cyan Eyes"
                type="text"
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                onClick={() => {
                  submit();
                }}
              >
                Generate
              </button>
            </div>
            <div className="image">
              {isLoading ? (
                <>{loading}</>
              ) : (
                <LazyLoadImage
                  height={256}
                  src={image} // use normal <img> attributes as props
                  width={256}
                  effect="blur"
                />
                // <Image alt="Github" src={image} width={256} height={256} />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
