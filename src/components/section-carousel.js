'use client'

import ContainerGrid from "@/components/container"
import TitleSection from "@/components/title-section"
import CarrouselCards from "@/components/carrousel-cards"

export default function SectionCarousel({title, subtitle, data}) {
  return (
    <section className="py-10 @desktop:py-28">
      <ContainerGrid className='px-0 @desktop:px-3'>
        <TitleSection
          title={title}
          subtitle={subtitle}
        />
        <CarrouselCards data={data} />
      </ContainerGrid>
    </section>
  )
}