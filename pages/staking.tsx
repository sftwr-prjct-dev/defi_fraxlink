import Layout from "../components/Layout";
import { useState } from 'react';
import Dashboard from "../components/Dashboard";

export default function Staking() {
    const [input, setInput] = useState({
        status: "locked",
        amount: "",
        days: 7
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    };

    let daysValue = input.days;
    const rangeStatus = input.status === "unlocked" ? true : false;
    
    return (
        <Layout>
            <div>
                <div className="text-center pr-4 text-teal-300 p-2 bg-black text-opacity-100">
                    <h2>DEPOSIT</h2>
                </div>
                <div className="text-white text-center">
                    <p>
                        Staking: <a href="https://etherscan.io/0xa29367a3f057F3191b62bd405584a33411892b6" className="text-blue text-opacity-50">
                        0xa29367a3f057F3191b62bd405584a33411892b6</a>
                    </p>
                </div>
                <div className=" border-gray-700 justify-evenly text-center">
                    <div className="text-opacity-50 text-blue border-gray-200 border-solid">
                        <p>
                            <span className="mx-8">UNLOCKED</span>
                            <span className="mx-8">LOCKED</span>
                        </p>
                        <p className="text-white justify-evenly">
                            <span className="mx-10">0</span>
                            <span className="-mx-35">0</span>
                        </p>
                    </div>                                        
            </div>
            <div>
                <form>
                    <div className="py-10 m-y300 justify-evenly flex-row">
                        <div className="inputNum mx-40">
                            <p><input type="number" placeholder="Amount" name="amount" className="amount" onChange={handleChange} size={4} disabled  /></p>
                            <p> {handleChange} available</p>
                        </div>
                        <div className="border-solid border-gray-600 text-blue">
                            <input type="radio" name="status" value="unlocked" checked={input.status === "unlocked"} onChange={handleChange} /> Unlocked <br />
                            <input type="radio"  name="status" value="locked" onChange={handleChange} checked={input.status === "locked"} /> Locked
                        </div>
                        </div>
                        <div className="text-white text-center">
                        <p> 
                            If you choose to lock your stake, the longer you do so, the more boost
                            it will have when calculating rewards. Staking unlocked LP tokens doesn't
                            earn a boost but can be withdrawn at anytime. All stakers regardless of 
                            lockups earn an additional boost the more FRAX becomes algorithmic.
                        </p>
                        <h3 className="text-center">DAYS</h3>
                        <input type="range" name="days"  id="range" disabled={rangeStatus} onChange={handleChange} min="7" max="1025" />
                        <input type="number" className="rangeText" size={3} disabled value={daysValue} />
                        <br/>
                        1.013x (time) x 1.135x (CR) <br/> <strong>= 1.150x (total)</strong>
                        <br/>
                        <button type="submit"> CONNECT WALLET </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}