'use client'
import { useEffect, useRef } from 'react'
import ContainerGrid from "@/components/container"
import TitleSection from "@/components/title-section"
import CardCollectors from "./card-collectors"

import Thumb01 from '@/assets/img-neft/01.jpg'
import Thumb02 from '@/assets/img-neft/02.jpg'
import Thumb03 from '@/assets/img-neft/03.jpg'
import Thumb04 from '@/assets/img-neft/04.jpg'
import Thumb05 from '@/assets/img-neft/05.jpg'
import Thumb06 from '@/assets/img-neft/06.jpg'
import Thumb07 from '@/assets/img-neft/07.jpg'
import Thumb08 from '@/assets/img-neft/08.jpg'

// Import GSAP library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cardCollectors = [
  {
    thumb: Thumb01,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb02,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb03,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb04,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb05,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb06,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb07,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
  {
    thumb: Thumb08,
    name: 'Lorem Ipsum',
    value: '0.721 BTC',
  },
]

export default function SectionCollectors() {
  const areaCollectors = useRef(null)

  useEffect(() => {
    const areaCollector = areaCollectors.current;
    gsap.fromTo(areaCollector, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      ease: 'power3.out',
      duration: 2,
      scrollTrigger: {
        trigger: areaCollector,
        start: "top-=400 center",
      }
    })
  }, [])
  return (
    <section className="py-10 @desktop:py-28">
      <ContainerGrid>
        <TitleSection
          title="Principal Collectors"
          subtitle="Collectors in Focus"
        />
        <div className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4" ref={areaCollectors}>
          {
            cardCollectors.map(({thumb, name, value}, index) => (
              <CardCollectors key={index}
                thumbnail={thumb}
                name={name}
                value={value}
                counter={index + 1}
              />
            ))
          }
        </div>
      </ContainerGrid>
    </section>
  )
}