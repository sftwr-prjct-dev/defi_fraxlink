export const Certs = ({text, Icon}) => {
    return (
        <div className="w-full h-5 flex flex-wrap items-center  my-2">
            <div className="w-48 md:w-24 leading-none pl-6 md:pl-2 text-center text-white text-xs font-hairline">{text}</div>
            <div><Icon/></div>
        </div>
    )
}