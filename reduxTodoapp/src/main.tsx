import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.tsx'
import {configureStore,} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import TodoReducer from './features/todoSlice.ts'
const store=configureStore({
  reducer:{
    todo:TodoReducer
  }
})
export type RootState=ReturnType<typeof store.getState>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Provider store={store}>
      <App />

</Provider>
  </StrictMode>,
)
