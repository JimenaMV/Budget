import React, { useState } from "react";
import Error from "../Error/Error";
import shortid from "shortid";

const Formulario = ({ setExpenses, setCreateExpenses }) => {
  const [expensesname, setExpensessName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  //Cuando el usuario agrega un gasto
  const addExpensess = (e) => {
    e.preventDefault();

    //Validar: si la cantidad es menor a uno, si la cantidad está vacía o si el nombre está vacío, muestra error
    if (quantity < 1 || isNaN(quantity) || expensesname.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //Construir el gasto
    const expenses = {
      expensesname,
      quantity,
      id: shortid.generate(),
    };
    /*  console.log(expenses) */

    //Pasar el gasto al componente principal
    setExpenses(expenses);
    setCreateExpenses(true);

    //Resetear el form

    setExpensessName("");
    setQuantity(0);
  };

  return (
    <form onSubmit={addExpensess}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto' />
      ) : null}
      <div className='campo'>
        <label>Nombre del gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          value={expensesname}
          onChange={(e) => setExpensessName(e.target.value)}
        />
      </div>

      <div className='campo'>
        <label>Cantidad Gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type='submit'
        value='Agregar Gasto'
        className='button-primary u-full-width'
      />
    </form>
  );
};

export default Formulario;
