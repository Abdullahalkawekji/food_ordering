import Image from "next/image";
export default function MenuItem (){
    return(

        <div className="bg-gray-200 p-4  rounded-lg text-center
       group  hover:bg-red-500 hover:shadow-blue-700/25 transition-all">
        <div className="text-center">
        <img src="/pizza.png" className="max-h-25 max-h-25 block mx-auto"
        alt="pizza"/>
        </div>
        <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
            beschreibung des Pizza</p>
<button className="bg-primary text-white px-4 py-2 my-3 rounded-full ">add to 12

</button>
<div>
</div>
            </div>
            
    );
}