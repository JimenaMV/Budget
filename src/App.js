import React, { useState, useEffect } from "react";
import Question from "./components/Question/Question";
import Formulario from "./components/Formulario/Formulario";
import Listado from "./components/Listado/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto/ControlPresupuesto";

function App() {
  //Crear dos estados uno para el presupuesto, otro para el restante, se definen aqui en app porque este statue va a fluir al menos en dos componentes

  //Definir el state presupuesto, guardar presupuesto; restante, guarsdar restante

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  //Inicia como true porqure al abrir, queremos que se muestre
  const [showquestion, setShowQuestion] = useState(true);
  const [allexpenses, setAllExpenses] = useState([]);
  const [expenses, setExpenses] = useState({});
  const [createexpenses, setCreateExpenses] = useState(false);

  //Use effect que actualiza el restante
  useEffect(() => {
    if (createexpenses) {
      //Agrega el nuevo presupuesto
      setAllExpenses([...allexpenses, expenses]);
    }

    //Resta del presupuesto actual
    const bugdetRemaining = remaining - expenses.quantity;
    setRemaining(bugdetRemaining);

    //Resetear a false
    setCreateExpenses(false);
  }, [expenses]);

  //Función que se ejecuta cuando agregamos un gasto
  /*   const addNewExpenses = (expenses) => {
    setAllExpenses([...allexpenses, expenses]);
  }; */

  return (
    <div className='container'>
      <header>
        <h1>Gasto semanal</h1>
        <div className='contenido-principal contenido'>
          {showquestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario
                  setExpenses={setExpenses}
                  setCreateExpenses={setCreateExpenses}
                />
              </div>
              <div className='one-half column'>
                <Listado allexpenses={allexpenses} />
                <ControlPresupuesto budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
