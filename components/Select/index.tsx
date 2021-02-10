import Select from 'react-select'

export default function NewSelect(){
    return (
        <Select
        className="bg-black"
        defaultValue={{value: "Uniswap FRAX/USDC", label: <span className="flex w-full"><img className="mr-2 h-5" src="/uniswap.png" /><div>Uniswap</div></span>, src:"/uniswap.png", id:"1"}}
        options={[
            {value: "Uniswap FRAX/USDC0", label: <span className="h-5  w-full bg-black flex"><img className="h-5 mr-2 " src="/uniswap.png" /><div>Uniswap0</div></span>, src:"/uniswap.png", id:"1"},
            {value: "Uniswap FRAX/USDC1", label: <span className="h-5 flex"><img className="h-5 mr-2 " src="/uniswap.png" /><div>Uniswap1</div></span>, src:"/uniswap.png", id:"1"}
            ]}
        />
    )
}
