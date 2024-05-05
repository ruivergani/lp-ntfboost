import Image from "next/image";
import Link from "next/link";
// Components
import ContainerGrid from "./container";
// Assets
import Logo from '@/assets/logo.svg';
import IconBurguer from '@/assets/icon-hamburger.svg';

const itemsNav = [
  'Download',
  'NFTs',
  'Rank',
  'FAQ',
]

export default function Header() {
  return (
    <header className="py-6 @laptop:py-5 absolute top-0 left-0 w-full">
      <ContainerGrid className='flex items-center justify-between'>
        <Image
          src={Logo}
          alt="Logo NFT Boost"
          className="w-full max-w-[160px]"
        />
        <div className="hidden @laptop:flex flex-1 max-w-nav-header justify-between">
          <nav className="flex items-center gap-12">
            {
              itemsNav.map((item, index) => (
                <Link
                  href="#"
                  key={index}
                  className="font-medium font-inter hover:text-blue-primary transition-colors ease-linear"
                >
                  {item}
                </Link>
              ))
            }
          </nav>
          <button className="flex items-center justify-center bg-blue-primary px-6 py-3 text-white rounded-full hover:brightness-90 transition-all ease-linear font-inter font-medium">
            Connect Wallet
          </button>
        </div>
        <button className="p-2 rounded-[4px] border bg-menu-button-bg border-menu-button-border @laptop:hidden">
          <Image src={IconBurguer} alt="Menu Mobile"/>
        </button>
      </ContainerGrid>
    </header>
  )
}