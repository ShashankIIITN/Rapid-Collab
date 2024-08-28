import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Children: [
      {
        name: "node_modules",
        ext: "folder",
        children: [
          {
            name: "asd",
            ext: "pdf"
          }
        ]
      },
      {
        name: "node_modules",
        ext: "folder",
        children: [
          {
            name: "asd",
            ext: "js",
            children: [
              {
                name: "asd",
                ext: "js"
              }
            ]
          },
          {
            name: "asd",
            ext: "pdf",
            children: [
              {
                name: "asd",
                ext: "js",
                children: [
                  {
                    name: "asd",
                    ext: "js",
                    children: [
                      {
                        name: "asd",
                        ext: "js"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }

export const treeDataSlice = createSlice({
  name: 'treeData',
  initialState,
  reducers: {
    
  }
})


export const {  } = treeDataSlice.actions

export default treeDataSlice.reducer