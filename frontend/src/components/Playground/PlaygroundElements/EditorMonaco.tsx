import React, { useRef, useEffect, useState } from 'react'
import { EditorProps, Editor as Monaco } from '@monaco-editor/react';
import dracula from 'monaco-themes/themes/Dracula.json';


type propsType = {
  Code: string,
  onChange: any,
  mode: string
}


function Editor({ Code, onChange, mode }: propsType) {
  const editorRef = useRef(null);

  function handleEditorChange(value, event) {
    onChange(value)
  }
  function handleEditorDidMount(editor, monaco) {
    
    editorRef.current = editor;
  }
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    syntaxError:true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
    snippetSuggestions : "top",
    
  };

  return (
    <Monaco
      height="90vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={Code}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      options={options as EditorProps}
    />
  );
}

export default Editor