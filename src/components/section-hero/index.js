import Image from 'next/image';

import ContainerGrid from "../container"
import { CardsHero } from './cards';
import BackgroundHeroImage from '@/assets/bg-hero.svg'
import IconBoost from '@/assets/icon-boost.svg'
import SmallNFT01 from '@/assets/nft-small.png'
import SmallNFT02 from '@/assets/double-nft.png'
import AppleLogo from '@/assets/apple.svg'
import GoogleLogo from '@/assets/google.svg'

export default function SectionHero() {
  return (
    <section className='pt-36 bg-hero-pattern bg-no-repeat overflow-hidden'>
      <ContainerGrid className='flex flex-col items-center'>
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
        <div className='flex flex-col items-center gap-4 @tablet:flex-row'>
          <Image
            src={AppleLogo}
            alt='Apple Logo'
          />
          <Image
              src={GoogleLogo}
              alt='Google Logo'
            />
        </div>
        <CardsHero />
        <div className='w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36'>
        </div>
      </ContainerGrid>
    </section>
  )
}