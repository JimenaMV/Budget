import React from "react";
import { revisarPresupuesto } from "../Helpers/Helpers";
//

const ControlPresupuesto = ({ budget, remaining }) => {
  return (
    <>
      <div className='alert alert-primary'>Presupuesto: ${budget}</div>
      <div className={revisarPresupuesto(budget, remaining)}>
        Restante: ${remaining}
      </div>
    </>
  );
};

export default ControlPresupuesto;
