export const Certs = ({text, Icon}) => {
    return (
        <div className="w-full h-5 flex flex-wrap items-center  my-2">
            <div className="w-48 pl-6 text-center text-white text-xs font-hairline">{text}</div>
            <div><Icon/></div>
        </div>
    )
}