import Layout from "../components/Layout";
import dynamic from 'next/dynamic'
const NewSelect = dynamic(() => import("../components/Select"), { ssr: false });
import {Arror, QuestionIcon, USDCLogo} from "../components/svgIcons/index"
export default function Half({headerText, headerType, poolCurerencies}){
    return (
        <Layout>
            <div>
            <BuyBackHead headerText={"BUYBACK"} headerType={"COLATERAL RATIO"} poolCurerencies={"POOL"} />
            <BuyBackBody />
            </div>
            <div>
            <BuyBackHead headerText={"RECOLLATERALIZE"} headerType={"BONUS RATE"} poolCurerencies={"POOL"} />
            <BuyBackBody />
            </div>
            
        </Layout>
    ) 
}

function BuyBackHead({ headerText, headerType, poolCurerencies }) {
    return (
        <div className="w-full bg-brownBg md:h-3.5 relative flex flex-wrap">
            <div className="h-full md:absolute w-full left-0 top-0 md:w-300 text-white bg-black border border-headBorderCol flex justify-center items-center text-2xl">
                {headerText}
            </div>
            
            <div className="flex flex-wrap w-full md:h-3.5 md:pl-300 ">
                <div className="h-3.5 w-full text-white flex text-xs md:w-1/2">
                    <div className="w-1/4 flex flex-row justify-center items-center">
                        {poolCurerencies}
                    </div>
                    <div className='w-3/4 flex flex-row justify-center items-center px-4'>
                        <USDCLogo />
                        <select className="w-full ml-2 bg-black h-8 rounded-md" name="" id="">
                            <option value="USDC">USDC</option>
                        </select>
                    </div>
                </div>
                <div className="text-white w-full flex flex-col justify-center items-center md:w-1/2">
                    <div className="text-littlebluetxt h-1/2 bg-balNameColBg w-full flex flex-col justify-center items-center"> 
                        {headerType}
                    </div>
                    <div className='text-white h-1/2 w-full flex flex-col justify-center items-center text-xs"'>
                        0.8%
                    </div>
                </div>
            </div>
        </div>
    )
}

function BuyBackBody(){
    return (
        <div className="flex flex-wrap text-light text-sm text-center w-full md:h-1/2 py-1 justify-center items-center">
            <div className="md:w-1/3">
                <h1 className="text-littlebluetxt mt-4 text-base">FXS</h1>
                <input className="w-32 h-8 bg-light text-headBorderCol pl-2 rounded-md" type="number" placeholder="Amount"/>
                <div className="mt-2">0.001 <span>FXS Balance</span></div>
                <div className="mt-2"><span>17.2</span> USDC Available for Buyback (<span>3.76</span> FXS)</div>
            </div>
            <div className="mt-6 md:w-1/3 text-center">
                <div className="text-littlebluetxt">EXCHANGE RATES</div>
                <div>USDC: $1.000</div>
                <div>FXS: $4.570</div>
                <div className="my-4 flex-center-content">
                <Arror />
                </div>
                <div>0.4500% SWAP FEE</div>
                <div className="text-yellowish">(0.00000 USDC)</div>
                <div className="mt-2">Pool 🌊 : 0x1864 ... 1c0d</div>
            </div>
            <div className="flex-center-content items-center mt-2 md:w-1/3 ">
                <div className="text-littlebluetxt text-base mt-6 w-full mb-2">You Receive</div>
                <USDCLogo />
                <div className="bg-borderCol ml-2 rounded-md w-40 h-6 flex justify-center items-center">-</div>
            </div>
            <div className="flex-center-content w-full mt-8 py-4">
                <button className="bg-light h-8 rounded-md w-48">CONNECT WALLET</button>
                <div className="absolute right-0 flex-center-content"><span className="mr-2">HELP</span> <QuestionIcon /></div>
            </div>
        </div>
    )
}