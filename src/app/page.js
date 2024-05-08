import ContainerGrid from "@/components/container";
import TitleSection from "@/components/title-section";
import CardCollectors from '@/components/card-collectors'
import CardNFT from "@/components/card-nft";
import SectionHero from "@/components/section-hero";
import SectionCarousel from "@/components/section-carousel";

import Thumb01 from '@/assets/img-neft/01.jpg'
import Thumb02 from '@/assets/img-neft/02.jpg'
import Thumb03 from '@/assets/img-neft/03.jpg'
import Thumb04 from '@/assets/img-neft/04.jpg'
import Thumb05 from '@/assets/img-neft/05.jpg'
import Thumb06 from '@/assets/img-neft/06.jpg'
import Thumb07 from '@/assets/img-neft/07.jpg'
import Thumb08 from '@/assets/img-neft/08.jpg'
import Thumb09 from '@/assets/img-neft/09.jpg'
import Thumb10 from '@/assets/img-neft/10.jpg'
import SectionCollectors from "@/components/section-collectors";
import SectionBanner from "@/components/section-banner";

const featuredCollections = [
  {
    name : 'Cat #221',
    thumbnail: Thumb01,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Snike #2331',
    thumbnail: Thumb02,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Skull Hatter #2311',
    thumbnail: Thumb03,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Nox #2611',
    thumbnail: Thumb04,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Nox #2611',
    thumbnail: Thumb04,
    value: '0.0721',
    value_BRL: '602,02',
  },
]
const highlightCollections = [
  {
    name : 'Crazy Monkey #131',
    thumbnail: Thumb06,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Alien Shooter #2211',
    thumbnail: Thumb07,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Yordlee #1221',
    thumbnail: Thumb08,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Dragon Cannon #4401',
    thumbnail: Thumb09,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Nox #2611',
    thumbnail: Thumb10,
    value: '0.0721',
    value_BRL: '602,02',
  },
]
const tendencyCollections = [
  {
    name : 'Borex #171',
    thumbnail: Thumb03,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Durtre #2391',
    thumbnail: Thumb04,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Hatter #321',
    thumbnail: Thumb06,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Sailor Skull #4431',
    thumbnail: Thumb10,
    value: '0.0721',
    value_BRL: '602,02',
  },
  {
    name : 'Nox #2611',
    thumbnail: Thumb01,
    value: '0.0721',
    value_BRL: '602,02',
  },
]
export default function Home() {
  return (
    <main>
      <SectionHero/>
      <SectionCarousel
        title='Featured in Collections'
        subtitle='Notable collections'
        data={featuredCollections}
      />
      <hr className="w-full max-w-grid border border-t border-white border-opacity-5 mx-auto"/>
      <SectionCarousel
        title='Highlight of the Month'
        subtitle='Monthly Selection'
        data={highlightCollections}
      />
      <hr className="w-full max-w-grid border border-t border-white border-opacity-5 mx-auto"/>
      <SectionCollectors />
      <hr className="w-full max-w-grid border border-t border-white border-opacity-5 mx-auto"/>
      <SectionCarousel
        title='In Trend'
        subtitle='Tendencies'
        data={tendencyCollections}
      />
      <SectionBanner/>
    </main>
  );
}