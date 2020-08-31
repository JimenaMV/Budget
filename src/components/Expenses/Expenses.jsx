import React from "react"

const Expenses = ({ expenses }) => (
  <li className='gastos'>
    <p>
      {expenses.expensesname}
      <span className='gasto'>${expenses.quantity}</span>
    </p>
  </li>
)

export default Expenses
