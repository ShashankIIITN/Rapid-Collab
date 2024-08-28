import { configureStore } from '@reduxjs/toolkit'
import opnedFileReducer from "./features/leftPanel/openedFileSlice"
import treeDataReducer from "./features/leftPanel/panelDataSlice"

export default configureStore({
  reducer: {
    openedFile: opnedFileReducer,
    TData: treeDataReducer,

  }
})