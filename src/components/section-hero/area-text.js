'use client'

import Image from 'next/image';
import IconBoost from '@/assets/icon-boost.svg'
import SmallNFT01 from '@/assets/nft-small.png'
import SmallNFT02 from '@/assets/double-nft.png'
import AppleLogo from '@/assets/apple.svg'
import GoogleLogo from '@/assets/google.svg'
import { useEffect, useRef } from "react"

// Import GSAP library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AreaText() {
  // Mapear as areas que tem animacoes
  const areaTextRef = useRef(null)
  const appleLogo = useRef(null)
  const googleLogo = useRef(null)
  const iconImageHero = useRef(null)

  useEffect(() => {
    const areaText = areaTextRef.current; // current => ref (returns an object)
    const google = googleLogo.current;
    const apple = appleLogo.current;
    const imageHero = iconImageHero.current;
    const timeline = gsap.timeline();

    timeline.fromTo(areaText, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2
    })
      .fromTo(google, {
        opacity: 0,
        x: 30,
      }, {
          opacity: 1,
          x: 0,
          duration: 1.2
      }, ">-0.5") // animation happens 0.5 seconds before the last one finishes
      .fromTo(apple, {
        opacity: 0,
        x: -30,
      }, {
        opacity: 1,
        x: 0,
        duration: 1.2
      }, "<") // happens together with the last animation
      .fromTo(imageHero, {
        opacity: 0,
        xPercent: 95,
      }, {
        opacity: 1,
        xPercent: 0,
        duration: 1
      }, "0.2")

  }, []);

  return (
    <>
      <div className='flex items-center flex-col opacity-0' ref={areaTextRef}>
        <h3 className='flex items-center gap-2 text-sm mb-3 @tablet:text-base @desktop:text-xl'>
          <Image
            src={IconBoost}
            alt="IconBoost"
          />
          <span>Enter a realm of infinite possibilities</span>
        </h3>
        <h1 className='text-5xl/normal text-center font-poppins mb-4 @desktop:text-7xl/normal'>
          Explore the Universe
          <div className='inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32'>
            <Image
              src={SmallNFT01}
              alt='Small NFT Image'
              className='w-11 @desktop:w-14'
              ref={iconImageHero}
            />
          </div>
          Digital of
          <Image
            src={SmallNFT02}
            alt='Small NFT Image'
            className='inline-block w-16 mx-2 @desktop:w-20'
          />
          Unique Collectibles!
        </h1>
        <p className='w-full text-center text-sm opacity-80 mb-6 @tablet:text-base @tablet:max-w-[600px] @desktop:text-xl @desktop:max-w-[658px] @desktop:mb-9'>Enter a realm of infinite possibilities and dive into NFT collections, where art, culture and innovation come together to create truly exclusive experiences.</p>
      </div>
      <div className='flex flex-col items-center gap-4 @tablet:flex-row'>
        <Image
          src={AppleLogo}
          alt='Apple Logo'
          ref={appleLogo}
          className='opacity-0'
        />
        <Image
          src={GoogleLogo}
          alt='Google Logo'
          ref={googleLogo}
          className='opacity-0'
          />
      </div>
    </>
  )
}