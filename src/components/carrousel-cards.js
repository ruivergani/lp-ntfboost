import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import CardNFT from "@/components/card-nft"
import Arrow from '@/assets/arrow.svg'
import Image from 'next/image'

export default function CarrouselCards({data}) {
  const swiperRef = useRef(); // referenciar o slide
  return (
    <div className='w-full relative'>
      <button className='hidden @desktop:flex w-12 h-12 rounded-full bg-blue-primary hover:bg-gray-hover-btn-slide border border-white border-opacity-5 flex items-center justify-center z-10 absolute top-1/2 -mt-6 -left-6'
        onClick={() => {
          swiperRef.current?.slidePrev(); // render null first than after create the swiper (that's why need ?)
        }}
      >
        <Image
          src={Arrow}
          alt='Arrow Previous'
        />
      </button>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={33}
        speed={800}
        loop={true} // sempre vai pra frente e volta pro primeiro slide
        onBeforeInit={(swiper) => { // Antes de iniciar o slide (recebe todas funcionalidades do swiper)
          swiperRef.current = swiper;
        }}
        breakpoints={
          {
            320: {
              slidesPerView: 1.3,
              spaceBetween: 24,
            },
            450: {
              slidesPerView: 1.5,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.3,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }
        }
        className='!px-3'
      >
        {
          data.map(({name, thumbnail, value, value_BRL}, index) => (
            <SwiperSlide key={index}>
              <CardNFT
                name={name}
                thumbnail={thumbnail}
                value={value}
                value_BRL={value_BRL}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <button className='hidden @desktop:flex rotate-180 w-12 h-12 rounded-full bg-blue-primary hover:bg-gray-hover-btn-slide flex items-center justify-center z-10 absolute top-1/2 -mt-6 -right-6 transition ease-linear border border-white border-opacity-5'
      onClick={() => {
        swiperRef.current?.slideNext();
      }}>
        <Image
          src={Arrow}
          alt='Arrow Next'
        />
      </button>
    </div>
  )
}