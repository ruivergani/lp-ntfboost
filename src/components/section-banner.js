
import ContainerGrid from "@/components/container"
import AppleLogo from '@/assets/apple.svg'
import GoogleLogo from '@/assets/google.svg'
import Image from "next/image"

export default function SectionBanner() {
  return (
    <section className="">
      <ContainerGrid>
        <div className="w-full h-auto @laptop:h-[472px] bg-banner bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-center rounded-xl py-10 px-3 @laptop:py-0 @laptop:px-0">
          <h2 className="w-full max-w-[796px] font-poppins text-white font-semibold text-4xl @laptop:text-6xl/snug mb-4 ">Open the Doors to the Next Digital Revolution!</h2>
          <p className="text-white opacity-70 w-full max-w-[638px] text-base @laptop:text-xl">Discover, Acquire and Own the Most Valuable NFTs in the Digital Universe. Your Opportunity, Your Story</p>
          <div className="flex flex-col @laptop:flex-row items-center justify-center gap-2 @laptop:gap-6 mt-6">
            <Image src={GoogleLogo} alt="Google Logo"/>
            <Image src={AppleLogo} alt="Apple Logo"/>
          </div>
        </div>
      </ContainerGrid>
    </section>
  )
}