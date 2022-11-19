import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCostumer } from '../features/CustumerSlice';
interface CostumerTypeCard {
  id: string;
  name: string;
  food: string[]
}

function CostumerCard({id,name,food}: CostumerTypeCard) {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch()
  return (
          <div className="card-container">
            <p  className="nomeCostumer">{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food"> {food.map(food=>{
                return <div className="food">
                        <p >{food}</p>
                  </div>
              })}</div>
              <div className="input-costumer">
                <input       
                    value={customerFoodInput}
                    onChange={(e) => setCustomerFoodInput(e.target.value)}
                    className='inputCadastroCostumer'
                />
                <button    onClick={() => {
                          dispatch(
                            addFoodToCostumer({
                              id,
                              food: customerFoodInput,
                            })
                          );
                  }}
                  className='button2'  
                >Add</button>
              </div>
            </div>
          </div>

  )
}

export default CostumerCard
