import React from 'react';
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

const TareasItem = ({ tarea, completado }) => {
  return (
    <li className="flex items-center justify-between gap-2 rounded-md bg-slate-100 p-5">
      {/* Mostrar si esta completado o no */}
      <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-slate-300 bg-white">
        {completado ? <AiOutlineCheck size={18} color={'#06D6A0'} /> : ''}
      </span>
      <p className={completado ? `tarea completed` : `tarea`}>{tarea}</p>
      <span className="cursor-pointer">
        <AiOutlineDelete size={18} color={'#EF476F'} />
      </span>
    </li>
  );
};

export { TareasItem };
