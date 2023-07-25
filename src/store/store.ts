import { configureStore } from '@reduxjs/toolkit'
import serviceSlice from './slices/serviceSlice'

const store = configureStore({
  reducer: {
    service: serviceSlice
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
