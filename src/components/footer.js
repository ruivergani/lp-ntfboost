import Image from "next/image";
import Link from "next/link";
// Components
import ContainerGrid from "./container";
// Assets
import Logo from '@/assets/logo.svg';

const footerNav = [
  {
    titleMenu: 'NFT Boost®',
    items: ['Download','NFTs','Rank', 'FAQ']
  },
  {
    titleMenu: 'Useful Links',
    items: ['About us','Questions','Press', 'Contact us', 'Legal']
  },
]

export default function Footer() {
  return (
    <footer className="py-10 @laptop:pt-32 @laptop:pb-14">
      <ContainerGrid className='flex flex-col justify-between items-center @laptop:flex-row @laptop:items-start'>
        <div className="w-full @laptop:max-w-[324px] flex flex-col items-center justify-center mb-12 text-center @laptop:items-start @laptop:mb-0 @laptop:text-left">
          <Image
            src={Logo}
            alt="Logo NFT Boost"
            className="mb-4"
          />
          <p className="mb-6 opacity-70 font-inter text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <button className="flex items-center justify-center bg-blue-primary px-6 py-3 text-white rounded-full hover:brightness-90 transition-all ease-linear font-inter font-medium w-full @tablet:w-auto">
            Connect Wallet
          </button>
        </div>
        <div className="flex flex-1 max-w-[380px] gap-[30px] flex-col items-center justify-center text-center @laptop:flex-row @laptop:text-left @laptop:gap-[88px] @laptop:items-start">
          {
            footerNav.map(({titleMenu, items}) => (
              <div key={`Menu-${titleMenu}`} className="flex flex-col gap-4 w-full">
                <strong className="font-inter font-bold text-[22px]">{titleMenu}</strong>
                <ul className="flex flex-col gap-4">
                  {
                    items.map((itemLink) => (
                      <li key={`Menu-Link-${itemLink}`}>
                        <Link
                          href="#"
                          className="font-inter text-lg text-white opacity-70 hover:opacity-100 transition-all ease-linear hover:underline"
                        >
                          {itemLink}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </ContainerGrid>
    </footer>
  )
}