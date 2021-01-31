import { useState, Dispatch, SetStateAction } from 'react'
import { HelpLogo, USDCLogo } from '../svgIcons'
const header = [
  {
    name: 'FRAX PRICE',
    value: '$0.990'
  },
  {
    name: 'COLLATERAL RATIO',
    value: '85.75%'
  },
  {
    name: 'POOL BALANCE / CEILING',
    value: '72.919M / 8M'
  },
  {
    name: 'AVAILABLE TO MINT',
    value: '8.081M'
  }
]


const chooseMint =({ e, setMintMethod }) => {
  setMintMethod(e.target.value)
}

const showOptions = (id: string, setOpendropdown: Dispatch<SetStateAction<boolean>>, openDropdown: boolean) => {
  // setSelected(id)
  setOpendropdown(!openDropdown)
  console.log(id)
}


export default function Mint() {
  const [mintMethod, setMintMethod] = useState('normal')
  const [openDropdown, setOpendropdown] = useState(false)

  // console.log(mintMethod)
  return(
      <div className="font-poppins mint-screen text-white">
        <div className="md:flex">
          <div>
            <p className="text-center md:p-2 text-white font-sans md:text-3xl bg-black">MINT FRAX</p>
          </div>
          <div className="flex">
            {
              header.map(head => {
                return (
                  <div key={head.name} className="flex-auto text-center">
                    <p className="dash-header-top font-poppins antialiased tracking-tight text-sm py-2">{head.name}</p>
                    <p className="dash-header-bottom font-poppins antialiased tracking-tight text-sm py-1 text-white border-gray-500">{head.value}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="md:flex md:justify-between md:item-center md:mb-40">
          <div className="md:flex-1 mt-10 md:mt-20 px-3">
            <p className="title text-center">MINT METHOD</p>
            <p>Choose normal if you already have USD and FXS. Choose ETH if you want a <a href="https://etherscan.io" target="_blank">utility contract </a> to mint FRAX with ETH via Uniswap.</p>
            <div className="flex justify-center text-sm py-2">
              <div className="flex mr-3">
                <input onChange={(e) => chooseMint({ e, setMintMethod })} className="mr-1 mt-1" type="radio" id="normal" name="mint" value="normal" />
                <label htmlFor="normal">Normal</label>
              </div>
              <div className="flex">
                <input onChange={(e) => chooseMint({ e, setMintMethod })} className="mr-1 mt-1 text-2xl" type="radio" id="eth" name="mint" value="eth" />
                <label htmlFor="eth">ETH</label>
                <div className="mt-1 ml-2">
                  <a href="https://etherscan.io" target="_blank">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#C0C0C0" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-b-4 border-gray-600">
              { mintMethod === 'normal' ?
                <div className="flex justify-center">
                {
                  <div className="w-3/5 mt-2 relative">
                    <p className="font-poppins antialiased tracking-tight text-center title">COLLATERAL POOL</p>
                    <div className="flex">
                      <div className="md:mt-3 mt-2 mr-2">
                        <USDCLogo />
                      </div>
                      <div onClick={() => showOptions('USDC', setOpendropdown, openDropdown)} className="mr-3 hover:border-white hover:border-2 my-2 py-1 w-11/12 rounded bg-black">
                        <div className="flex justify-between px-2 dropdown rounded hover:shadow-outline">
                          <p className="text-xs text-white md:py-1">USDC</p>
                          <div className="md:pt-1">
                            <svg fill="#FFF" height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-8 w-10/12 absolute rounded z-10">
                    {
                      openDropdown && <div className="overflow-y-auto rounded-sm bg-black text-white py-1 dropdown-menu">
                        <p className="text-xs pl-3 hover:bg-blue-700 hover:text-white">USDC</p>
                      </div>
                    }
                    </div>
                    <div className="text-center">
                      <p className="text-sm semibold title">AMOUNT</p>
                      <input type="number" placeholder="Amount" className="p-1 rounded border-2 border-gray-300 w-8/12 text-xs"/>
                      <p className="text-xs p-2 mb-2">0 Available</p>
                    </div>
                  </div>
                }
              </div> : <p className="text-yellow-400 text-left">
                WARNING: Due to market fluctuations and multiple inline transactions, a higher slippage (≥ 5%) and a 1000 FRAX minimum order size are recommended. Any unused USDC, FXS, and ETH will be refunded.
                </p> 
              } 
            </div>
              <div className="text-center">
                <p className="antialiased tracking-tight text-sm py-2 text-center title">{mintMethod === 'normal' ? 'FXS' : 'DESIRED FRAX' }</p>
                <input type="number" placeholder="Amount" className="p-1 w-1/6 rounded border-2 border-gray-300 text-xs"/>
                <p className="text-xs p-2 mb-2 text-center">{mintMethod === 'normal' ? '0 Available' : '0 ETH Available' }</p>
              </div>
          </div>
          <div className="flex justify-center md:flex-1 content-center flex-wrap">
            <div className="text-sm text-center">
            <p className="title">EXCHANGE RATES</p>
            <p>USDC: <span className="font-semibold">$1.000</span></p>
            <p>FXS: <span className="font-semibold">$5.380</span></p>
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="29">
                  <path d="m0,0h80v29H0" fill="#FFF" fillOpacity="0"/>
                  <path d="m61,15H11v-1h49m0-2 9,2.5-9,2.5" fill="#4BC0C0"/>
                  </svg>
            </div>
                  <p className="flex justify-center">0.4500% MINTING FEE</p>
                  <p>(0.00000 FRAX)</p>
                  <p className="className=">
                    <a href="#">Pool 🌊: <span className="title">0x123...456</span></a> 
                  </p>
            </div>

          </div>
          <div className="flex justify-center md:flex-1 content-center flex-wrap">
            <img src="/logo.png" className="mt-5 pt-3" width="25" height="3"/>
            <div className="text-center pt-3">
              <p className="text-sm semibold title">YOU RECEIVE</p>
              <input type="number" placeholder="-" className="rounded border-2 border-gray-300 text-center text-sm"/>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center border-t-2 mt-2 py-1">
            <button disabled className="my-2 py-2 px-5 border-2 rounded text-sm bg-gray-300 text-gray-600">CONNECT WALLET</button>
          <div className="flex absolute right-0">
            <p className="text-sm mt-1">Help</p>
            <span className="mr-4">
              <HelpLogo />    

            </span>
          </div>
        </div>
      </div>
      
  )
}

