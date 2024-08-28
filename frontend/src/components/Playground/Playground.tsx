import { useState } from "react"
// import Editor from "./PlaygroundElements/Editor"
import LeftPanel from "./PlaygroundElements/LeftPanel"
import RightPanel from "./PlaygroundElements/RightPanel"
import TopBar from "./PlaygroundElements/TopBar"
// import Editor from "./PlaygroundElements/EditorMonaco"
// import Editor from "./PlaygroundElements/Editorv5"
import Editor from "./PlaygroundElements/AceEditor"

function Playground() {

  const [Code, setCode] = useState("");
  const [mode, setmode] = useState("c_cpp");

  return (
    <div className="Main_Playground flex flex-col w-full h-full bg-gradient-to-br from-[#2B4162] to-[#12100E]">
      <TopBar />
      <div className="Play_Body h-full flex justify-between overflow-hidden">
        <LeftPanel />
        <Editor mode={mode}/>
        {/* <Editor Code={Code}  onChange={setCode} mode="C++"/> */}
        <RightPanel />
      </div>
    </div>
  )
}

export default Playground