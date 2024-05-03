import ContainerGrid from "@/components/container";
import TitleSection from "@/components/title-section";
import CardNFT from "@/components/card-nft";

import ImageNft01 from '@/assets/img-neft/01.jpg'

export default function Home() {
  return (
    <ContainerGrid className="flex">
      <CardNFT
        thumbnail={ImageNft01}
        value={0.0721}
        value_BRL={602.02}
      >
      </CardNFT>
    </ContainerGrid>
  );
}