import Link from 'next/link'
import Socials from '../components/Socials'

const menuItems = [
  {
    link: "/",
    text: "Whitepaper",
  },
  {
    link: "/",
    text: "Docs",
  },
  {
    link: "/",
    text: "Github",
  },
  {
    link: "/",
    text: "Audit",
  },
  {
    link: "/",
    text: "Coverage",
  },
]

const mainText = "Frax is the world’s first "
const hilight = "fractional-algorithmic stablecoin"
const moreText = "The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically."

export default function Home() {
  return (
    <main className="text-center px-6 lg:px-16 flex flex-col justify-between relative min-h-screen bg-black -z-1">
      <video autoPlay muted loop className="h-full w-full object-cover fixed top-0 left-0 -z-1">
        <source src="/bg-vid.mp4" />
      </video>
      <div className="md:flex flex-wrap ">

        <div className="w-full flex justify-center md:w-16 mt-10 md:mt-8">
          <img src="/logo.png" alt="/logo.png" className="h-16" />
        </div>

        <div className="flex flex-wrap font-bold md:text-lg md:w-550 justify-center items-center ml-auto md:mt-8 bg-transparent-bg leading-loose py-4 md:py-0 rounded-md">
          {menuItems.map(({text, link}) => <MenuItem key={text} text={text} link={link} />)}
        </div>

        <div className="bg-transparent-bg rounded-b-md p-3 px-3 md:px-16 md:py-6 md:rounded-md md:text-left lg:w-full lg:mt-20">
          <h1 className="text-white text-3xl leading-tight md:leading-none md:text-6xl md:w-500 lg:w-full lg:leading-tight">
            {mainText}<span className="font-extrabold">{hilight}</span>
          </h1>

          <p className="text-white text-lg mt-6 md:text-3xl md:w-600 lg:w-full">{moreText}</p>

          <button className="h-3.5 w-56 border-white outline-none border-2 rounded-md text-white h6 mt-8 font-medium">
            Trading App
          </button>
        </div>

      </div>

      <Socials className="flex justify-end py-5 bottom-0 right-0" />
    </main>
  )
}

function MenuItem({text, link}){
  return (
    <Link href={link} >
      <a className="text-grayish px-4">{text}</a>
    </Link>
  )
}
