import  {configureStore, Store} from '@reduxjs/toolkit'
import reservationReducers from '../features/ReservationSlice'
import costumerReducers from '../features/CustumerSlice'
export const store= configureStore({
  reducer: {
    reservations: reservationReducers,
    costumers: costumerReducers
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch