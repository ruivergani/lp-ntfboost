import CardsLeft from '@/assets/cards-left.png'
import CardsRight from '@/assets/cards-right.png'
import Image from 'next/image'

export function CardsHero() {
  return (
    <div className='w-[700px] h-[245px] relative mt-12 @desktop:w-full @desktop:h-[426px] @desktop:mt-20'>
      <Image
        src={CardsLeft}
        alt='Cards Left'
        className='absolute w-1/2 top-0 left-10 z-10'
      />
      <Image
        src={CardsRight}
        alt='Cards Right'
        className='absolute w-1/2 top-0 right-8'
      />
    </div>
  )
}