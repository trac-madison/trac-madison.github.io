import { TitanOne } from "./fonts"

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-emerald-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-gray-50 mb-4 md:mb-0">
          <img className="w-10 h-10 rounded-full" src="/icon.png"/>
          <span className="ml-3 text-xl">TRAC Madison</span>
        </a>
        <nav className="text-gray-100 md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/">Home</a>
          <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/about">About</a>
          <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/join">Get Involved</a>
          <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/resources">Resources</a>
        </nav>
      </div>
    </header>
  );
}