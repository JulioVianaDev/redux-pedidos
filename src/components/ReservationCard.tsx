import React from 'react'
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/ReservationSlice';
import { addCostumer } from '../features/CustumerSlice';
import {v4 as uuid} from 'uuid'
interface ReservationCardTypes{
  name: string;
  index: number;
}
function ReservationCard({name,index}: ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <div onClick={()=>{
                    dispatch(removeReservation(index))
                    dispatch(addCostumer({
                      id: uuid(),
                      name,
                      food: []
                    }))
                  }}
        className="nomeReserva"
    > {name} </div>
  )
}

export default ReservationCard