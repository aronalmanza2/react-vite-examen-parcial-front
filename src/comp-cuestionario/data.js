export const preguntas = [
  {
    id: 1,
    numeracion: "a",
    titulo:
      "Los componentes clases usan hooks para tener estado tales como el useState.",
    respuestaCorrecta: false,
    justificacion:
      "Falso: Los componentes tipo clase no usan hooks. Manejan el estado mediante la propiedad state y el método setState(). Además, extienden la clase Component de React.",
  },
  {
    id: 2,
    numeracion: "b",
    titulo:
      "La librería react-router-dom permite en su versión 6 o superior permite generar enlaces.",
    respuestaCorrecta: true,
    justificacion:
      "Verdadero: Si permite generar enlaces con la etiqueta <NavLink /> y <Link /> que reemplazan a la etiqueta <a />, usan props para el manejo de estado. Simulando un SPA (Single Page Application).",
  },
  {
    id: 3,
    numeracion: "c",
    titulo:
      "Al iterar arreglo de objetos dentro de un map no es necesario que la etiqueta de mayor jerarquía dentro contenga la propiedad key.",
    respuestaCorrecta: false,
    justificacion:
      "Falso: Es importante y casi obligatorio el uso de key, ya que React lo usa para identificar elementos únicos y renderizar los cambios de manera eficiente. Si se omite el uso de key, nos muestra una advertencia en consola.",
  },
  {
    id: 4,
    numeracion: "d",
    titulo:
      "Axios es una librería que permite consumir un servicio api-server desde react.",
    respuestaCorrecta: true,
    justificacion:
      "Verdadero: La librería Axios es librería que actúa como un intermediario, que nos permite el consumo de API mediante peticiones HTTP (GET, POST, PUT, PATCH, DELETE, ETC) provenientes de un BackEnd.",
  },
  {
    id: 5,
    numeracion: "e",
    titulo:
      "Los componentes función heredan el método componentDidMount() para manejar estado.",
    respuestaCorrecta: false,
    justificacion:
      "Falso: EL método componentDidMount es parte del ciclo de vida de un componente tipo clase, y se ejecuta en el primer renderizado. En los componentes función simula el comportamiento con el hook useEffect().",
  },
  {
    id: 6,
    numeracion: "f",
    titulo: "No es posible instalar json-server dentro del proyecto react.",
    respuestaCorrecta: false,
    justificacion:
      "Falso: Si es posible instalar la librería json-server en el mismo proyecto de react ya que las dependencias se agregan en el package.json, además se crean scripts que simplifican los comandos con un alias, que se puede correr el script en diferentes terminales. json-server se ejecuta en el puerto: 5000. Que simula un BackEnd local.",
  },
];
