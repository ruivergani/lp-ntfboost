'use client'

import CardsLeft from '@/assets/cards-left.png'
import CardsRight from '@/assets/cards-right.png'
import Image from 'next/image'

import { useEffect, useRef } from "react"

// Import GSAP library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function CardsHero() {
  // Map all refs
  const cardHero = useRef(null)
  const leftCard = useRef(null)
  const rightCard = useRef(null)

  useEffect(() => {
    const cardLeft = leftCard.current;
    const cardRight = rightCard.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardHero.current, // area que vai fazer o trigger
        markers: false,
        start: "-=50% center",
        //end: "bottom 90%",
        scrub: true, // scroll de acordo com mouse
      }
    });

    timeline.to(cardLeft, {
      left: 0,
    })
      .to(cardRight, {
        right: 0,
    }, "<")

  }, [])

  return (
    <div className='w-[700px] h-[245px] relative mt-12 @desktop:w-full @desktop:h-[426px] @desktop:mt-20' ref={cardHero}>
      <Image
        src={CardsLeft}
        alt='Cards Left'
        className='absolute w-1/2 top-0 left-10 z-10 @desktop:left-[25%]'
        ref={leftCard}
      />
      <Image
        src={CardsRight}
        alt='Cards Right'
        className='absolute w-1/2 top-0 right-8 @desktop:right-[25%]'
        ref={rightCard}
      />
    </div>
  )
}