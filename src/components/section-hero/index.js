import Image from 'next/image';

import ContainerGrid from "../container"
import { CardsHero } from './cards';
import AreaText from '@/components/section-hero/area-text'

export default function SectionHero() {
  return (
    <section className='pt-36 bg-hero-pattern bg-no-repeat overflow-hidden'>
      <ContainerGrid className='flex flex-col items-center'>
        <AreaText/>
        <CardsHero />
        <div className='w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36'>
        </div>
      </ContainerGrid>
    </section>
  )
}