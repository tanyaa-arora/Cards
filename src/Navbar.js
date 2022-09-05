import logo from "./logo.png"
export default function Navbar(props){
    return(
        <div className="flex md:pr-20 mt-4 pr-4 justify-between items-center w-[100%] border-b-2">
            <img src={logo} alt="Error" className="md:h-24 md:w-32 h-16 w-24"></img>
            <button className="md:h-12 md:w-32 h-8 w-24 rounded-lg md:text-lg text-md bg-violet-600 hover:border 
            hover:border-solid hover:border-white text-white md:font-semibold transition 
            ease-in-out active:bg-violet-400 duration-300" onClick= { props.handle}>Get Users</button>
        </div>
    )
}