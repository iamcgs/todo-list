import { CrearTareaBoton } from './components/CrearTareaBoton';
import { TareasBuscador } from './components/TareasBuscador';
import { TareasContador } from './components/TareasContador';
import { TareasItem } from './components/TareasItem';
import { TareasLista } from './components/TareasLista';

const tareas = [
  { text: 'Tarea 1', completado: true },
  { text: 'Tarea 2', completado: false },
  { text: 'Tarea 3', completado: true },
  { text: 'Tarea 4', completado: false },
];

const App = () => {
  return (
    <>
      <h1 className="p-8 text-center text-3xl font-bold text-darkBlue">
        Todo List
      </h1>
      <main className="mx-auto w-3/4 md:w-[600px]">
        <TareasContador />
        <TareasBuscador />
        <TareasLista>
          {tareas.map((tareas) => (
            <TareasItem
              key={tareas.text}
              tarea={tareas.text}
              completado={tareas.completado}
            />
          ))}
        </TareasLista>
        <CrearTareaBoton />
      </main>
    </>
  );
};

export { App };
