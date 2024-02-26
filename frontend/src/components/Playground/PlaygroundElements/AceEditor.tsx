import React, { useRef, useEffect, useState } from 'react'
import "ace-builds"
import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";

// import "ace-builds/webpack-resolver"
import ace2 from "react-ace/src/ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
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
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-ambiance";
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

config.set(
    "basePath",
    "https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict/"
);
config.setModuleUrl(
    "ace/mode/javascript_worker",
    "https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict/worker-json.js"
);


type propsType = {
    Code: string,
    onChange: any,
    mode: string
}

function Editor({ Code, onChange, mode }: propsType) {
    const editor = useRef(null)
    const [annnotations, setannnotations] = useState([])

    const handleAnnotation = (e: any) => {

        // console.log("gay")

        // let asd = annnotations;

        // asd = { row: 2, col: 4, text: "asd", type: "error" }

        // setannnotations(prev => { return [...prev, asd] })


    }

    return (
        <div className="editor_space h-full w-full bg-slate-950 shadow-inner  flex items-center justify-center">
            <AceEditor
                mode={"javascript"}
                theme="ambiance"
                height='100%'
                width='100%'
                placeholder="your code goes here..."
                fontSize={"1.1rem"}

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
                onChange={onChange}
                value={Code}
                name="bound"
                editorProps={{ $blockScrolling: true, $enableBlockSelect: true, $onSelectionChange: () => { alert("awd") } }}
            />
        </div>
    )

}

export default Editor