import FolderViwer from "./FolderViwer"
import { defaultStyles } from "react-file-icon"

type TEntry = {
  name: string,
  ext: keyof typeof defaultStyles,
  children?: TEntry[]
}

const TData = {
  Children: [
    {
      name: "node_modules",
      ext: "folder",
      children: [
        {
          name: "asd",
          ext: "pdf"
        }
      ]
    },
    {
      name: "node_modules",
      ext: "folder",
      children: [
        {
          name: "asd",
          ext: "js",
          children: [
            {
              name: "asd",
              ext: "js"
            }
          ]
        },
        {
          name: "asd",
          ext: "pdf",
          children: [
            {
              name: "asd",
              ext: "js",
              children: [
                {
                  name: "asd",
                  ext: "js",
                  children: [
                    {
                      name: "asd",
                      ext: "js"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  ]
}
function LeftPanel() {
  return (
    <div className='Left_Panel w-1/5 bg-transparent '>
      <div className='Left_Panel_bar w-full h-10 bg-slate-800'></div>

      <div className="Folder_Structure h-[80%]">
        {TData.Children.map(el => {
          return <div className="px-2 pt-2">
            <FolderViwer entry={el as TEntry} depth={0} />
          </div>
        })}
      </div>
    </div>
  )
}

export default LeftPanel