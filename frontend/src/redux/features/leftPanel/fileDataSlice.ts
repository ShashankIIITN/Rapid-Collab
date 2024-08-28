import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "asd$1.pdf": ["int main(){",
    "int a = 20;",
    "cout << a << endl;",
  "}"],
  "asd$2.js":["const fun = () =>{",
    "var e = 10;",
    "console.log(e);",
  "}"]
    
  }

export const fileDataSlice = createSlice({
  name: 'fileData',
  initialState,
  reducers: {
    changeData : (state, actions)=>{
        state[actions.payload] = actions.payload.split('\n')
        console.log(actions)
    }
  }
})


export const { changeData } = fileDataSlice.actions

export default fileDataSlice.reducer