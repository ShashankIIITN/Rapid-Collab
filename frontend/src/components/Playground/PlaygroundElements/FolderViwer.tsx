import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { FaFolder, FaFolderOpen, FaEdit  } from 'react-icons/fa';
import { BsFiletypeBmp } from 'react-icons/bs';
import { MdDelete, MdAdd } from "react-icons/md";
import { FileIcon, defaultStyles } from "react-file-icon";
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenedFile } from '../../../redux/features/leftPanel/openedFileSlice';   

type TEntry = {
    name: string,
    ext: keyof typeof defaultStyles,
    children?: TEntry[]
}

function FolderViewer({ entry, depth}: { entry: TEntry, depth: number}) {
    const openedFile = useSelector((state:any) => state.openedFile);
    const dispatch = useDispatch();
    // const [openedFile, setOpenedFile] = useState<string | null>(null);
    const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({});

    useEffect(()=>{
        console.log(openedFile);
    }, [openedFile])

    const handleFileManupulation = (action:string) =>{
        switch(action) {
            case "add":
                alert("add Not implemented yet");

              break;
            case "edit":
              break;
            case "delete":
              break;
            default:
              alert("Not implemented yet");
          }
    }

    const toggleFolder = (entryName: string) => {
        setOpenFolders(prevState => ({
            ...prevState,
            [entryName]: !prevState[entryName]
        }));
    };

    const openFiles = (e: React.MouseEvent, entryName: string): void => {
        dispatch(changeOpenedFile({name:entryName, value:"youe sad asdw ..."}));
        console.log("sada")
    }

    const isOpen = openFolders[entry.name + depth] || false;
    const isFileOpen = openedFile.name === `${depth}$${entry.name + '.' + entry.ext}` || false

    return (
        <div className="entry text-white">
            {entry.children ? (
                <details className=" " >
                    <summary
                        className="list-none relative flex  justify-between group items-center "
                        key={entry.name + depth}
                        onClick={() => toggleFolder(entry.name + depth)}
                        
                    >
                        <div className=" flex items-center gap-1 nsection hover:cursor-pointer">

                            {isOpen ? <FaFolderOpen /> : <FaFolder />}
                            {entry.name}
                        </div>
                        <div className="icongrp z-10 hidden  bg-slate-800 p-1 absolute gap-2  end-0 group-hover:flex" onClick={e=>{e.stopPropagation();  e.preventDefault();}}>
                            <MdAdd className='hover:cursor-pointer hover:text-cyan-500 text-lg' onClick={()=>handleFileManupulation("add")} />
                            <FaEdit className='hover:cursor-pointer hover:text-cyan-500'  onClick={()=>handleFileManupulation("edit")} />
                            <MdDelete className='hover:cursor-pointer hover:text-cyan-500'  onClick={()=>handleFileManupulation("delete")} />
                        </div>
                    </summary>
                    {isOpen && entry.children && (
                        <div className={`ml-1 pl-1 border-slate-500  border-l-[1px]  border-spacing-10 `}>
                            {entry.children.map(value => (
                                <FolderViewer entry={value} depth={depth + 1}  key={value.name} />
                            ))}
                        </div>
                    )}
                </details>
            ) : (
                <div
                    className={`flex gap-1 items-center px-2 justify-start text-green-300 hover:cursor-pointer ${isFileOpen ? "opened" : ""} `}
                    onClick={e => openFiles(e, depth + '$' + entry.name + "." + entry.ext)}
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
