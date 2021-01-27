export const MetamaskBtnContainer = ({children}) => {
    return (
        <div className="flex flex-wrap items-center justify-center text-white border border-borderCol py-3">
           {children}
        </div>
    )
}

export const MetamaskBtn = () => <button className="text-white bg-borderCol text-xs font-thin h-6 px-3">Add tokens to Metamask</button>