import React, { useState } from "react"
import Error from "../Error/Error"

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  //Definir el state de cantidad setQuantity es guardar cantidad
  const [quantity, setQuantity] = useState(0)

  //Error
  const [error, setError] = useState(false)

  //Función que lee el presupuesto defineBudget = definir presupuesto, se le pone la e del evento para acceder a los valores
  const defineBudget = (e) => {
    /* console.log(parseInt(e.target.value)) */
    setQuantity(parseInt(e.target.value, 10))
  }

  //Sumbit para definir el presupuesto
  const addBudget = (e) => {
    e.preventDefault()

    //Validar
    if (quantity < 1 || isNaN(quantity)) {
      setError(true)
      return
    }

    //Qué se hace si pasa la validación
    setError(false)
    setBudget(quantity)
    setRemaining(quantity)
    setShowQuestion(false)
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje='El Presupuesto es incorrecto' /> : null}

      <form onSubmit={addBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={defineBudget}
          /* Tambien se puede pasar directamente aqui la funcion
          onChange={e=>setQuantity(parseInt(e.target.value, 10))} */
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir presupuesto'
        />
      </form>
    </>
  )
}

export default Question
