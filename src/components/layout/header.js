import Link from "next/link"

export default function Header(){
    return(
        <header className="flex items-center justify-between">
        
        <nav className="flex gap-4 text-gray-500">
        <Link className="text-primary font-mono text-2xl " href={'/'}>
          Snack Time
          </Link>
          <Link href={'/home'}>Home</Link>
          <Link href={'/'}>Menu</Link>
          <Link href={'/'}>About </Link>
          <Link href={'/'}>Contact</Link>
          </nav>
          <nav className="flex items-center gap-4 text-gray-500 font-semibold">

          <Link href={'/login'} className="bg-primary rounded-full mt-0 ">Login</Link>
          <Link href={'/register'} className=" text-gray px-4 py-2 my-3 rounded-full mt-0 ">Register</Link>
          </nav>
         
        </header>
    );
}