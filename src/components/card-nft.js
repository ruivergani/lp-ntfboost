import Image from 'next/image';

import IconHeart from '@/assets/icon-heart.svg'
import IconVerify from '@/assets/verify.svg'
import IconEtherum from '@/assets/icon-eth.svg'
import IconClock from '@/assets/icon-clock.svg'

export default function CardNFT({thumbnail,name, value, value_BRL}) {
  return (
    <div className='w-full max-w-card-ntf overflow-hidden rounded-2xl border border-green-border-card bg-background-card'>
      <div className='w-full h-image-area-nft overflow-hidden relative'>
        <Image
          src={thumbnail}
          alt='Nft 01'
          className='w-full h-full object-cover'
        >
        </Image>
        <div className='absolute top-2 right-2 bg-background-card rounded-full z-10 flex items-center gap-2 py-3 px-6 border-2 border-gray-area-favorite'>
          <Image src={IconHeart} alt='icon heart'></Image>
          <small>0</small>
        </div>
      </div>
      <div className='w-full p-4'>
        <h4 className='flex items-center gap-1 text-xs mb-1'>
          Cartoon Collection
          <Image src={IconVerify} alt='icon verify'></Image>
        </h4>
        <h3 className='text-lg/none font-semibold mb-4'>{name}</h3>
        <div className='flex justify-between items-end'>
          <div>
            <span className='text-xs text-white opacity-70'>Actual Price</span>
            <h3 className='flex items-center justify-center gap-1 font-semibold mt-1'><Image src={IconEtherum} alt='icon verify'></Image>{value} BTC</h3>
          </div>
          <h5 className='text-xs relative bottom-1'>R$ {value_BRL}</h5>
        </div>
      </div>
      <button className='w-full max-w-[248px] leading-[48px] mx-auto flex items-center justify-center px-20 bg-background-button-nft rounded-[122px] mb-4 hover:brightness-75 transition ease-linear'>Buy Now</button>
      <div className='mt-4 space-x-2 flex flex-row ml-4 items-center justify-start mb-4'>
        <Image src={IconClock} alt='icon clock'></Image>
        <p className='text-xs text-white opacity-80'>End in 4h 8m 22s</p>
      </div>
    </div>
  )
}