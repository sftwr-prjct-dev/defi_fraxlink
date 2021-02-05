import Layout from "../components/Layout";
import dynamic from 'next/dynamic'
import { QuestionIcon } from '../components/svgIcons'
const NewSelect = dynamic(() => import("../components/Select"), { ssr: false });


const text = "If you choose to lock your stake, the longer you do so, the more boost it will have when calculating rewards. Staking unlocked LP tokens doesn’t earn a boost but can be withdrawn at any time. All stakers regardless of lockups earn an additional boost the more FRAX becomes algorithmic."
export default function Dash() {
    return (
        <Layout>
            <div className="w-full h-full border md:flex md:flex-wrap border-grayish text-light md:overflow-y-scroll">
                <StakeHeader headerText="STAKING" />
                <Deposit />
                <div className="md:w-8/12 flex-center-content">
                    <div className="w-full md:w-9/12 h-370 bg-red-300">
                        CHART here
                    </div>

                    <div className="flex-center-content md:w-3/12 border  bg-brownBg w-full py-2 md:h-370">
                        {rewardValues.map(({ reward, value }) => <RewardValue key={reward} reward={reward} value={value} />)}
                    </div>

                    <div className="flex-center-content w-full bg-brownBg">
                        <div className="black-header py-1 text-greenish">UNLOCKED STAKES</div>
                        <div className="flex-center-content w-1/2  my-4">
                            <input className="text-grayish bg-light w-3/4 px-2 py-1 rounded-md" placeholder="Amount" />
                            <div className="text-sm w-full text-center mt-2">0 Available</div>
                        </div>
                        <div className="w-1/2">
                            <button className="py-1 bg-light rounded-md text-headBorderCol px-2">Connect Wallet</button>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="black-header py-1 text-greenish">LOCKED STAKES</div>
                        <div className="w-full h-56 md:h-32">loading ...</div>
                    </div>
                </div>
                


                <div className="w-full bg-brownBg text-center pb-4 text-2xl">
                    <div className="black-header py-1 text-greenish text-base">COLLECT FXS REWARDS</div>
                    <div className="flex-center-content justify-around py-4">
                        <button className="11/12 text-bg-brownBg text-base text-headBorderCol bg-white px-2 rounded-md py-2">CONNECT WALLET</button>
                        <button className="11/12 text-bg-brownBg text-base text-headBorderCol bg-white px-2 rounded-md py-2">CONNECT WALLET</button>
                    </div>

                    <div>
                        🌾
                        <span className="w-full inline-block text-green2">0</span>
                        <span className="w-full inline-block text-light ">FXS Available</span>
                        <span className="w-full inline-block text-green3">[$0 USD]</span>
                        🌾
                        </div>
                </div>


            </div>
        </Layout>
    )
}

const Btn = ({ text, className = "" }) => <button className={`bg-bluish  rounded-md py-1 px-2 ${className}`}>{text}</button>


const RewardValue = ({ reward, value }) => {
    return (
        <div className="text-xs w-1/2 md:w-full pl-3 py-1 ">
            <div className="text-littlebluetxt flex items-center"><span className="mr-1">{reward}</span> <QuestionIcon /></div>
            <div className="text-light">{value}</div>
        </div>
    )
}

const rewardValues = [
    { reward: "APY (Normal / Max)", value: "30.18% / 90.55%" },
    { reward: "TVL", value: "$97.669M" },
    { reward: "LP Supply", value: "46.66" },
    { reward: "LP Staked", value: "46.66" },
    { reward: "LP Staked + Boost", value: "46.66" },
    { reward: "LP Price", value: "$2,093,321.68" },
    { reward: "Reward Period (sec)", value: "604.8K" },
    { reward: "Est. Reward Per Period", value: "$663.164K" },
]


function StakeHeader({ headerText }) {
    return (
        <div className="w-full md:h-3.5 relative flex flex-wrap">
            <div className="h-full w-full md:absolute left-0 top-0 md:w-9rem text-white bg-black border border-headBorderCol flex justify-center items-center text-2xl">
                {headerText}
            </div>
            <div className="flex-center-content w-full md:pl-9 justify-around md:pr-300 bg-brownBg py-4 md:py-0">
                <div className="w-full md:w-6/12 px-2">
                    <NewSelect />
                </div>
                <div className="w-full md:w-5/12 flex-center-content justify-around mt-4 md:mt-0 text-sm">
                    <Btn text="INFO" />
                    <Btn text="+/- LIQUIDITY" />
                    <Btn text="TRADE" />
                </div>
            </div>

            <div className="flex-center-content w-full md:w-300 text-center md:absolute right-0 top-0 bg-brownBg md:border border-headBorderCol">
                <div className="w-full h-1/2 bg-balNameColBg text-littlebluetxt flex justify-center items-center py-2 md:py-1 border md:border-none border-headBorderCol">APY (Normal / Max)</div>
                <div className="flex-center-content w-full h-1/2 text-greenish text-xs">34.51% / 103.54%</div>
            </div>
        </div>
    )
}

function Deposit() {
    return (
        <div className="flex-center-content md:w-4/12 md:border border-grayish">
            <div className="w-full bg-brownBg">
                <div className="flex-center-content bg-black text-center py-1 text-greenish">DEPOSIT</div>
                <div className="flex-center-content w-full text-sm py-4 broder-2 border-littlebluetxt ">Staking 🧑‍🌾 :<span className="text-littlebluetxt ml-2">0xa2936...92b6</span> </div>
            </div>

            <div className="flex-center-content w-full bg-brownBg border-t border-littlebluetxt">
                <div className="flex-center-content w-full">
                    <div className="w-1/2 flex-center-content bg-balNameColBg items-center text-littlebluetxt">UNLOCKED</div>
                    <div className="w-1/2 flex-center-content bg-balNameColBg items-center text-littlebluetxt">LOCKED</div></div>
                <div className="flex-center-content w-full">
                    <div className="w-1/2 text-center">0</div>
                    <div className="w-1/2 text-center">0</div>
                </div>
            </div>
            <div className="flex-center-content text-light bg-brownBg pt-4 w-full">
                    <div className="w-1/2 flex-center-content">
                        <input className="h-8 w-3/4 bg-white text-black" placeholder="Amount" />
                        <div className=" text-sm">0 Available</div>
                    </div>

                    <form className="flex-center-content w-1/2 p-0 m-0 ">
                        <div className="w-full">
                            <input className="mr-2" type="radio" id="Unlocked" name="Unlocked" value="Unlocked" />
                            <label htmlFor="Unlocked">Unlocked</label>
                        </div>
                        <div className="w-full">
                            <input className="mr-2" type="radio" id="locked" name="locked" value="Locked" />
                            <label htmlFor="locked">locked</label>
                        </div>
                    </form>

                    <p className="text-xs px-5 pt-4">{text}</p>

                    <div className="flex-center-content w-full">
                        <div className="w-full mt-2 text-center">Days</div>
                        <input className="mt-2 w-11/12 px-2" type="range" />
                        <div className="text-sm w-full text-center">1.000x (time) x 1.137x (CR)</div>
                        <div className="text-xl">= 1.137x (total)</div>
                    </div>
                    <div className="flex-center-content w-full py-2 border  mt-2">
                        <button className="bg-light text-brownBg p-1 px-2 rounded">Connect Wallet</button>
                    </div>
                </div>
        </div>
    )
}
