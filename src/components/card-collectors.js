import Image from 'next/image'
import IconVerify from '@/assets/verify.svg'
import IconEtherum from '@/assets/icon-eth.svg'

export default function CardCollectors({thumbnail, name, value}) {
  return (
    <div className='w-full max-w-card-collectors rounded-[100px] flex items-center justify-between bg-gray-card-collectors border border-gray-border-card-collectors py-4 px-6'>
      <div className='flex items-center gap-6'>
        <strong className='font-semibold'>1</strong>
        <div className='flex items-center gap-4'>
          <div className='relative w-10 h-10'>
            <div className='w-full h-full rounded-full overflow-hidden flex items-center justify-center'>
              <Image
                src={thumbnail}
                alt='image nft'
                className='object-cover w-full h-full'
              />
            </div>
            <Image
              src={IconVerify}
              alt='icon verify'
              className='absolute -bottom-1 -right-1 z-10'
            />
          </div>
          <div>
            <h4 className='text-base text-white font-semibold'>{name}</h4>
            <p className='text-sm text-white opacity-70 flex items-center'>
              Minimum price
              <span className='font-semibold space-x-2 text-white flex items-center gap-1 ml-1'>
                <Image
                  src={IconEtherum}
                  alt='icon etherum'
                  height={13}
                  width={8}
                />
                {value} BTC
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <h5 className='text-sm text-green-primary font-bold'>+20%</h5>
        <p className='flex items-center gap-1 font-semibold mt-1'>
          <Image
            src={IconEtherum}
            alt='icon etherum'
          />
          {value} BTC
        </p>
      </div>
    </div>
  )
}