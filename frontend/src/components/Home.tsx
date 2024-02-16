import Navbar from "./Navbar"
import Logo from "../assets/Logo-nobg2.png"

function Home() {
  return (
    <>
      <Navbar name="Rapid Collab" />
      <div className="Main_home overflow-auto w-full h-full pt-[2.9rem]  bg-[url('/src/assets/6985678.jpg')] bg-cover bg-no-repeat bg-center ">
      <img src={Logo} alt="Rapid Collab" className="h-60 mx-auto my-[10rem] custom-shadow bg-slate-950 p-5 border-2 rounded-lg border-[aqua] bg-opacity-30"/>
      </div>
    </>
  )
}

export default Home