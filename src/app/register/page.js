"use client";
import { useState } from "react";

 
export default function RegisterPage (){
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')
    return(
     <section className="mt-8">
      <h1 className="text-center text-primary text-2xl
      mb-4">
        Register
</h1>
  <form className="block max-w-xs mx-auto mt-4">

    <input type="email" placeholder="email" />
    <input type="passowrd" placeholder="passowrd"/>
    <button type="submit" >Register</button>
    <div className="my-4 text-center text-red -500 ">
     or login mit provider
    </div>
    <button className="flex gap-4 justify-center">
      <img src ={'/google.png'} alt={''} width={30} heigt={20} />
      Login with google 
      </button> 
  </form>
     </section>
    );
}