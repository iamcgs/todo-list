import React from 'react';

const TareasLista = ({ children }) => {
  return (
    <section>
      <ul className="flex flex-col gap-2">{children} </ul>
    </section>
  );
};

export { TareasLista };
