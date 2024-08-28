import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name : "Untitled$0.js",
    value : "you code goes hereas.."
}

export const openedFileSlice = createSlice({
  name: 'openedFile',
  initialState,
  reducers: {
    changeOpenedFile : (state, actions)=>{
        state.name = actions.payload.name
        state.value = actions.payload.value
        console.log(actions)
    }, 
    changeFileData : (state, actions) =>{
      state.value = actions.payload
      console.log(actions.payload)
    }
  }
})


export const { changeOpenedFile, changeFileData } = openedFileSlice.actions

export default openedFileSlice.reducer