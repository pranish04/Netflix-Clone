import '../app/css/style.css'
import Heading from '@components/heading.js'
import Page from '@components/page.js'
import FAQ from '@components/faq.js'
import Bottom from '@/components/bottom'

export default function Home(){
    return (
     <div>
      <Heading></Heading>
      <Page></Page>
      <FAQ></FAQ>
      <Bottom></Bottom>
      </div>
    )
}
