import Editor from "./PlaygroundElements/Editor"
import LeftPanel from "./PlaygroundElements/LeftPanel"
import RightPanel from "./PlaygroundElements/RightPanel"
import TopBar from "./PlaygroundElements/TopBar"

function Playground() {
  return (
    <div className="Main_Playground flex flex-col w-full h-full bg-gradient-to-br from-[#2B4162] to-[#12100E]">
      <TopBar />
      <div className="Play_Body h-full flex justify-between ">
        <LeftPanel />
        <Editor/>
        <RightPanel />
      </div>
    </div>
  )
}

export default Playground