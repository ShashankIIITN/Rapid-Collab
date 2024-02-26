import React, { useRef, useEffect, useState } from 'react'

import { basicSetup } from "codemirror";
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { keymap } from '@codemirror/view'
import { autoCloseTags, javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { tags } from "@lezer/highlight"
import { cpp} from '@codemirror/lang-cpp'
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language"

type propsType = {
  Code: string,
  onChange: any,
  mode: string
}

function Editor({ Code, onChange, mode }: propsType) {
  const editor = useRef<HTMLInputElement>(null)

  const onUpdate = EditorView.updateListener.of((v) => {
    onChange(v.state.doc.toString())
  })
  const myHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: "#fc6" },
    { tag: tags.comment, color: "#f5d", fontStyle: "italic" }
  ])

  const fixedHeightEditor = EditorView.theme({
    "&": { height: "100%" },
    ".cm-scroller": { overflow: "auto" },
    ".cm-line": { fontSize: "1.1rem" }
  })
  useEffect(() => {

    const state = EditorState.create({
      doc: "your code goes here",
      extensions: [
        // cobalt,
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab]),
        oneDark,
        cpp(),
        onUpdate,
        autoCloseTags,
        fixedHeightEditor,
        syntaxHighlighting(myHighlightStyle)
      ],
    })

    const view = new EditorView({ state, parent: editor.current! })

    return () => {
      view.destroy()
    }
  }, [])

  return <div ref={editor} className='code_editor resize-none bg-transparent outline-cyan-500  p-2 shadow-[inset_0_0_20px] shadow-black w-full h-full overflow-auto' ></div>

}

export default Editor