import { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { BsFiletypeBmp } from 'react-icons/bs';
import { FileIcon, defaultStyles } from "react-file-icon";

type TEntry = {
    name: string,
    ext: keyof typeof defaultStyles,
    children?: TEntry[]
}




function FolderViewer({ entry, depth }: { entry: TEntry, depth: number }) {
    const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({});
    const [openedFiles, setopenedFiles] = useState<{  [key: string]: boolean }>({ });

    const openFiles = (e: React.MouseEvent, entryname : string): void => {
        console.log(e.currentTarget.id)
        // // let doc = document.getElementById(`${e.currentTarget.id}`)
        // // doc?.classList.add("opened")
        // setopenedFiles({ depth: depth, filename: entry.name });
        setopenedFiles(prevState => ({
            [entryname]: !prevState[entryname]
        }));

        console.log(openedFiles)
    }

    const toggleFolder = (entryName: string) => {
        setOpenFolders(prevState => ({
            ...prevState,
            [entryName]: !prevState[entryName]
        }));
    };

    const isOpen = openFolders[entry.name + depth] || false;
    const isFileopen = openedFiles[entry.name + depth] || false;

    return (
        <div className="entry text-white">
            {entry.children ? (
                <details className=" ">
                    <summary
                        className="list-none flex gap-1  items-center hover:cursor-pointer"
                        key={entry.name + depth}
                        onClick={() => toggleFolder(entry.name + depth)}
                    >
                        {isOpen ? <FaFolderOpen /> : <FaFolder />}
                        {entry.name}
                    </summary>
                    {isOpen && entry.children && (
                        <div className={`ml-1 pl-1 border-slate-500  border-l-[1px]  border-spacing-10 `}>
                            {entry.children.map(value => (
                                <FolderViewer entry={value} depth={depth + 1} key={value.name} />
                            ))}
                        </div>
                    )}
                </details>
            ) : (
                <div
                    className={`flex gap-1 items-center px-2 justify-start text-green-300 hover:cursor-pointer ${isFileopen ? "opened" : ""} `}
                    onClick={e => openFiles(e, entry.name + depth)}
                    key={entry.name + "$" + depth + "." + entry.ext}
                    id={entry.name + "$" + depth + "." + entry.ext}
                >
                    <div className='w-3'>
                        <FileIcon extension={entry.ext} {...defaultStyles[entry.ext]} />
                    </div>
                    {entry.name + "." + entry.ext}
                </div>
            )}
        </div>
    );
}

export default FolderViewer;
