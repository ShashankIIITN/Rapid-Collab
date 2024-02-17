import Modal from "../../Modal"
import { ReactEventHandler, useState } from "react"

import Navbar from "../../Navbar"
import { useNavigate } from "react-router-dom"


const demoData = [
  {
    name: "My Room",
    img: "Content Img"
  },
  {
    name: "My Room",
    img: "Content Img"
  },
  {
    name: "My Room",
    img: "Content Img"
  },
  {
    name: "My Room",
    img: "Content Img"
  },
  {
    name: "My Room",
    img: "Content Img"
  }
]

function Room() {

  const [open, setopen] = useState(false)
  const [type, settype] = useState(1)
  const navigator = useNavigate();
  const onClose = (): void => {
    setopen(!open)
  }

  const onOpen = (e: React.MouseEvent<HTMLButtonElement>): void => {

    settype(e.currentTarget.name === "create" ? 1 : 0);
    setopen(!open);
  }
  return (
    <>
      <Navbar name="Rapid Collab" />
      <div className="Main_Room pt-[2.9rem] flex flex-col overflow-auto overflow-x-hidden items-start justify-start bg-gradient-to-br from-[#2B4162] to-[#12100E] h-full w-full ">
        <div className="your_rooms mx-auto mt-10 p-5 pb-10 sm:px-10 sm:pb-5 w-[95%] border-[2px]  border-[#1252b2] border-x-cyan-500 border-t-cyan-500 rounded-lg shadow-inner shadow-[aqua] space-y-5 ">
          <h1 className="text-white inline whitespace-nowrap font-extrabold font-serif text-3xl w-full text-center sm:text-start">Your Rooms : </h1><button type="button" name="create" onClick={onOpen} className="border mx-auto w-fit h-fit p-2 text-cyan-100"><span className="hidden sm:block">Create New Room</span><span className="sm:hidden">Create</span></button>
          <div className="card_holder w-full h-full flex flex-wrap gap-5 pb-10 sm:pb-0 items-start justify-center sm:justify-start ">
            {demoData.map((el, ind) => {
              return <div className="card_item flex flex-col items-center border-2 border-black text-lime-100">
                <h1 className="w-28 h-28 bg-white text-center p-[20%] text-black">{el.img}</h1>
                <h2>{el.name + " " + ind}</h2>
              </div>
            })}
          </div>
        </div>
        <div className="joined_rooms mx-auto my-5 p-5 pb-10 sm:px-10 sm:pb-5 w-[95%]  border-[2px] border-[#1252b2] border-x-cyan-500 rounded-lg border-t-cyan-500 shadow-inner shadow-cyan-500 space-y-5">
          <h1 className="text-white inline whitespace-nowrap font-extrabold font-serif text-3xl w-full text-center sm:text-start">Joined Rooms : </h1><button type="button" name="join" onClick={onOpen} className="border p-2 text-cyan-100"><span className="hidden sm:block">Join a Room</span><span className="sm:hidden">Join</span></button>
          <div className="card_holder w-full h-full flex flex-wrap gap-5 pb-10 sm:pb-0 items-start justify-center sm:justify-start ">
            {demoData.map((el, ind) => {
              return <div className="card_item flex flex-col items-center border-2 border-black text-lime-100">
                <h1 className="w-28 h-28 bg-white text-center p-[20%] text-black">{el.img}</h1>
                <h2>{el.name + " " + ind}</h2>
              </div>
            })}
          </div>
        </div>
        {/* <div className="room_btn-grp flex gap-5 w-[95%] border mx-auto p-5 sm:p-10 flex-wrap">
          <button type="button" className="border p-2 text-cyan-100">Join a Room</button>
          <button type="button" className="border p-2 text-cyan-100">Create a Room</button>
        </div> */}
      </div>
      <Modal Heading="Create New Room" open={open} onClose={onClose}  >
        {type == 1 ? <div className="flex flex-col items-center gap-5 ">
          <h1>Create New Room</h1>
          <div className="form">
            <label htmlFor="Rname">Room Name : <br /></label>
            <input type="text" name="Rname" id="Rname" className="bg-slate-400 outline-none border text-black" />
          </div>
          <button type="button" className="border w-full py-1" onClick={()=>navigator("/playground")}>Create</button>
        </div> : <div className="flex flex-col items-center gap-5 ">
          <h1>Create New Room</h1>
          <div className="form">
            <label htmlFor="Rname">Room Id : <br /></label>
            <input type="text" name="Rid" id="Rid" className="bg-slate-400 outline-none border text-black" />
          </div>
          <button type="button" className="border w-full py-1" onClick={()=>navigator("/playground")}>Join</button>
        </div>}
      </Modal>
    </>
  )
}

export default Room