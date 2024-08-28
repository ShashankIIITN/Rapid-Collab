import React, { useRef, useEffect, useState } from 'react'
import "ace-builds"
import AceEditor from "react-ace";

// import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-emmet"
import "ace-builds/src-noconflict/ext-error_marker"
// import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/ext-elastic_tabstops_lite"
import "ace-builds/esm-resolver"
// import "ace-builds/src-noconflict/ext-beautify"
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/ext-linking"
import "ace-builds/src-noconflict/ext-simple_tokenizer"
import "ace-builds/src-noconflict/ext-command_bar"
import "ace-builds/src-noconflict/ext-beautify"
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/ext-error_marker"
import "ace-builds/src-noconflict/theme-chaos"
import "ace-builds/src-noconflict/theme-clouds_midnight"
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-gruvbox_dark_hard";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
// import workerjs from "ace-builds/src-noconflict/worker-json";

// // AceEditor.config.setModuleUrl('ace/mode/json_worker', workerjs);
// import workercss from "ace-builds/src-noconflict/worker-css";
// // ace.config.setModuleUrl('ace/mode/css_worker', workercss)
import { config } from 'ace-builds';

import { useDispatch, useSelector } from 'react-redux';
import { changeFileData } from '../../../redux/features/leftPanel/openedFileSlice';

config.set(
    "basePath",
    "https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict/"
);
config.setModuleUrl(
    "ace/mode/c_cpp",
    "https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict/worker-json.js"
);


type propsType = {
    mode: string
}

function Editor({ mode }: propsType) {
    const editor = useRef(null)
    const openedFile = useSelector((state:any)=>state.openedFile)
    const dispatch = useDispatch();
    const [annnotations, setannnotations] = useState([])

    const handleAnnotation = (e: any) => {

        // console.log("gay")

        // let asd = annnotations;

        // asd = { row: 2, col: 4, text: "asd", type: "error" }

        // setannnotations(prev => { return [...prev, asd] })


    }
    const changeHandler = ()=>{
        // dispatch(changeFileData(openedFile.value));
        console.log(editor.current.refEditor.innerText);
    }
    

    return (
        <div className="editor_space h-full w-full bg-slate-950 shadow-inner  flex items-center justify-center">
            <AceEditor
                mode={"c_cpp"}
                theme="clouds_midnight"
                height='100%'
                width='100%'
                placeholder="your code goes here..."
                fontSize={"1.1rem"}
                onChange={changeHandler}
                value={openedFile.value}

                ref={editor}
                setOptions={{
                    // mode: "ace/mode/html",
                    cursorStyle: "wide",
                    useWorker: true,
                    useElasticTabstops: true,
                    useSoftTabs: true,
                    showFoldWidgets: true,
                    showGutter: true,
                    showLineNumbers: true,
                    showPrintMargin: false,
                    highlightActiveLine: true,
                    highlightGutterLine: true,
                    highlightSelectedWord: true,
                    autoScrollEditorIntoView: true,
                    enableLiveAutocompletion: true,
                    enableBasicAutocompletion: false,
                    enableEmmet: true,
                    enableMultiselect: true,
                    enableSnippets: true,
                    behavioursEnabled: true,
                    newLineMode: true,
                    animatedScroll: true,
                    tooltipFollowsMouse: true
                }}
                
                name="bound"
                editorProps={{ $blockScrolling: true, $enableBlockSelect: true, $onSelectionChange: () => { alert("awd") } }}
            />
        </div>
    )

}

export default Editor