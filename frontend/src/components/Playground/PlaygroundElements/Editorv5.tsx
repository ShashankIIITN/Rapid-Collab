import React, { useRef, useEffect, useState } from 'react'


type propsType = {
    Code: string,
    onChange: any,
    mode: string
}

function Editor({ Code, onChange, mode }: propsType) {
    const editor = useRef(null)

    return <div ref={editor} className='code_editor resize-none bg-transparent outline-cyan-500  p-2 shadow-[inset_0_0_20px] shadow-black w-full h-full overflow-auto' ></div>

}

export default Editor