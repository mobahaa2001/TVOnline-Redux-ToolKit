import { configureStore } from '@reduxjs/toolkit'
import { MovieReducer } from '../reducer/movieReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: MovieReducer,
  middleware: [thunk],
  devTools: composeWithDevTools(),
})
