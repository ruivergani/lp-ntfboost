
import ContainerGrid from "@/components/container"
import TitleSection from "@/components/title-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const questions = [
  {
    question: "What are NFTs?",
    response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum beatae nisi possimus praesentium repudiandae voluptate, temporibus tenetur. Dolorem quam excepturi, fugiat nostrum quod aut tenetur consectetur quia nemo maiores.',
  },
  {
    question: "How does purchasing NFTs on your website work?",
    response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum beatae nisi possimus praesentium repudiandae voluptate, temporibus tenetur. Dolorem quam excepturi, fugiat nostrum quod aut tenetur consectetur quia nemo maiores.',
  },
  {
    question: "How can I sell my own NFTs?",
    response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum beatae nisi possimus praesentium repudiandae voluptate, temporibus tenetur. Dolorem quam excepturi, fugiat nostrum quod aut tenetur consectetur quia nemo maiores.',
  },
  {
    question: "Are NFTs safe and authentic?",
    response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum beatae nisi possimus praesentium repudiandae voluptate, temporibus tenetur. Dolorem quam excepturi, fugiat nostrum quod aut tenetur consectetur quia nemo maiores.',
  },
  {
    question: "What are the fees involved in buying and selling NFTs on your website?",
    response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum beatae nisi possimus praesentium repudiandae voluptate, temporibus tenetur. Dolorem quam excepturi, fugiat nostrum quod aut tenetur consectetur quia nemo maiores.',
  }
]

export default function SectionQuestions() {
  return (
    <section className="pt-10 @desktop:pt-28">
      <ContainerGrid>
        <TitleSection
          title="Frequently Asked Questions"
          subtitle="Unraveling the mysteries of NFTs"
        />
        {/* Accordion */}
        <div>
          <Accordion type="single" collapsible className="w-full">
            {
              questions.map(({ question, response }, index) => (
                <AccordionItem value={`question-${index}`} key={index}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    {response}
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>
      </ContainerGrid>
    </section>
  )
}