import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { addReservation } from './features/ReservationSlice';
import ReservationCard from './components/ReservationCard'
import CostumerCard from './components/CostumerCard'
function App() {
  const reservations = useSelector((state: RootState)=> state.reservations.value)
  const costumers = useSelector((state: RootState)=> state.costumers.value)
  const [reservationNameInput,setReservationNameInput] = useState("")
  const dispatch = useDispatch();
  function handleAddReservation(){
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('')
  }
  return (
    <div className="App">
        <div className="row">
          <div className='esquerda'>
            <h5 className="titulo">Adicione uma reserva</h5>
            <div className=" ">
              <input 
                className='inputCadastro'

                placeholder='Digite o nome do pedido'
                value={reservationNameInput} onChange={(e)=> setReservationNameInput(e.target.value)}
              /><br></br>
              <button className='button1' onClick={handleAddReservation}  >Add</button>
            </div>
            <div className="reservation-cards-container">
              <h1 className="titulo">Lista de nomes:</h1>
              {reservations.map((name,index)=>{
                return <ReservationCard index={index} name={name}/>
              })}
            </div>
          </div>
          <div className="direita">
            <h1 className="titulo">Lista de informações do pedido: </h1>
            {costumers.map(costumer=>{
              return <CostumerCard id={costumer.id} name={costumer.name} food={costumer.food}/>
            })}
          </div>
        </div>  
    </div>
  );
}

export default App;
