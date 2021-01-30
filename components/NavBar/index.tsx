import Link from "next/link"
import { useState } from "react"
import Menu from "../Menu"
import Socials from "../Socials"
import { Certik, Cover, MenuIcon } from "../svgIcons"
import { AllowanceText } from "./AllowanceText"
import { Certs } from "./Certs"
import { ConnectionAndGas } from "./ConnectionAndGas"
import { MetamaskBtn, MetamaskBtnContainer } from "./MetamaskBtnContainer"
import { TokenBalance } from "./TokenBalance"

export default function NavBar() {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className="md:overflow-y-scroll md:h-screen md:w-48 md:absolute">
            <div className="fixed md:absolute left-0 top-0 z-2 flex justify-center items-center w-full h-10 px-3 bg-black border-b border-gray-600 md:w-full">
                <MenuIcon onClick={() => setIsOpened(!isOpened)} className="text-white absolute left-0 ml-2 cursor-pointer md:hidden" />
                <Link href="/">
                    <a className=" h-8 flex justify-between items-center">
                        <img className="h-full" src="/logo.png" />
                        <span className="text-white text-sm ml-2 font-medium">Frax Finance</span>
                    </a>
                </Link>
            </div>
            <SideBar isOpened={isOpened} />
        </div>

    )
}

const SideBar = ({isOpened}) => {
    return (
        <div className={`${isOpened ? "block" : "hidden"} fixed overflow-y-scroll md:static md:block pt-10 md:pt-10 mt-0 md:mt-0 h-full md:h-screen w-10/12 bg-menuBg border-t-2 border-r-2 border-gray-600 left-0 top-0 z-1 md:w-full`}>
            <ConnectionAndGas />
            <TokenBalance tokenName="FRAX" src="/logo.png" balance="-" />
            <TokenBalance tokenName="FXS" src="/dollar.png" balance="-" />
            <MetamaskBtnContainer>
                <MetamaskBtn />
            </MetamaskBtnContainer>
            <MetamaskBtnContainer>
                <AllowanceText text="MAX SLIPPAGE" />
                <div className="w-full flex justify-center items-center"><div className="absolute left-auto w-1/2 h-1 bg-white -z-1"></div><input type="range" min="1" max="100" className=" bg-white opacity-100 border-2 w-1/2 border-white text-white h-5" id="myRange" /></div>
            </MetamaskBtnContainer>
            <MetamaskBtnContainer>
                <AllowanceText text="ALLOWANCE" />
                <form className="w-full text-xs">
                    <div className="w-20 mx-auto">
                        <input className="mr-3" type="radio" id="min" name="min" value="min" />
                        <label htmlFor="min">Min (5%)</label>
                    </div>
                    <div className="w-20 mx-auto mt-1">
                        <input  className="mr-3" type="radio" id="max" name="min" value="max" />
                        <label htmlFor="max">Max</label>
                    </div>
                    
                </form>
            </MetamaskBtnContainer>
            <Menu />
            <Certs text="Coverage Available" Icon={Cover} />
            <Certs text="Audited by" Icon={Certik} />
            <Socials className="flex w-full justify-between px-8 md:px-2 py-5 border-t border-borderCol" />
        </div>
    )
}
