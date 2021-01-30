export const TokenBalance = ({tokenName, src, balance}) => {
    return (
        <div className="flex relative items-center text-balNameCol border border-borderCol md:border-l-0 h-5">
            <span className="w-12 absolute bg-balNameColBg text-center text-xs border border-borderCol md:border-l-0">{tokenName}</span>
            <div className="flex items-center bg-brownBg h-full justify-center w-full pl-12">
                <img className="h-3" src={src} alt={tokenName}/>
                <span className="text-white">{balance}</span>
            </div>
            
        </div>
    )
}