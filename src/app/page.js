
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeader";
import Header from "@/components/layout/header";

export default function Home (){
  return (
    <>
    
    <Hero />
    <HomeMenu />
    <section className="text-center my-20">
      <SectionHeaders 
      subHeader={'our sory'}
      mainHeader={'About us'}
      />
      <div className="max-w2x1 mx-w-md text-red-600  mt-5 flex-col gap-7">
      <p>
        About uns beschreibung
      </p>
      <p className=" mi-4">
        About uns beschreibung
      </p>
      </div>      
    </section>
    <section className="text-center my-8">
      <SectionHeaders
      subHeader={'Don \'t hesitate'}
      mainHeader={'Contact us'}

      />
      <div className="mt-8">
<a className="text-4xl underline text-gray-500"
  href="tel: +491749857492">
    +491749857492
  </a>

      </div>
    </section>
    

    </>
  )
}
