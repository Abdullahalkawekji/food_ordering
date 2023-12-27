import Image from "next/image";
import Right from "../icons/right";
export default function Hero(){
return (
    
    <section className="hero mt-8"> 
        <div className="py-8">
            <h1 className="text-4xl font-semibold leading-relaxed ">
                Everything is better <br />with a 
                <span className="text-primary"> Pizza
                </span>
        </h1>
        <p className="my-4 text-gray-500">
        pizza is the missing 
    </p>
    <div className="flex gap-10">
        <button className="bg-primary uppercase flex items-center gap-2
            text-white px-4 py-2 rounded-full font-semibold text-sm"> 
            jetzt bestellen
            <Right/>
            </button>
        <button className="flex gap-2 py-2 text-gray-500 font-semibold "> 
            Learn more
            <Right />
            </button>
    </div>
    </div>
    <div className="w-30 h-30 relative  ">
    <Image src="/pizza.png" layout={'fill'} objectFit={'contain'} alt={'pizza'} class="pizzabild"/>





</div>
    </section>
    
);
}