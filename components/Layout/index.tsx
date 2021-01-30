import NavBar from "../NavBar"

export default function Layout({children}){
    return (
        <div className="w-full md:flex">
            <NavBar />
            <div className="mt-10 md:mt-0 md:ml-48 md:h-screen bg-menuBg">
                {children}
            </div>
        </div>
    )
}