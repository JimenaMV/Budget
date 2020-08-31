import React from "react"
import Expenses from "../Expenses/Expenses"

const Listado = ({ allexpenses }) => (
  <div className='gastos-realizados'>
    <h2>Listado</h2>
    {allexpenses.map((expenses) => (
      <Expenses key={expenses.id} expenses={expenses} />
    ))}
  </div>
)

export default Listado
