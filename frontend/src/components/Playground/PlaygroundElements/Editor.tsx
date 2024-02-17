import React from 'react'

function Editor() {
  return (
    <div className='Editor w-full bg-[#1111116c] text-white '>
        <textarea name="IN_Code" id="In_Code" className='code_editor resize-none bg-transparent outline-cyan-500  p-2 shadow-[inset_0_0_20px] shadow-black w-full h-full'></textarea>
    </div>
  )
}

export default Editor