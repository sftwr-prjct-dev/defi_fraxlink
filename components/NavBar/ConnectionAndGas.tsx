import { ETHIcon, GasIcon } from "../svgIcons"

export const ConnectionAndGas = () => {
    return (
        <div className="flex text-red-600 text-xs h-5 bg-black">
            <div className="flex w-10/12 h-full justify-center items-center">
                <ETHIcon /> Not Connected
            </div>
            <div className="h-full border-l border-gray-500 flex justify-center items-center w-2/12">
                <GasIcon />
            </div>
        </div>
    )
}