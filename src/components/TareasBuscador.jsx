import React from 'react';

const TareasBuscador = () => {
  return (
    <>
      <div className="text-center">
        <input
          type="search"
          placeholder="Buscar tarea"
          className="my-4 w-full rounded-md border-2 p-2 focus:outline-yellow"
        />
      </div>
    </>
  );
};

export { TareasBuscador };
