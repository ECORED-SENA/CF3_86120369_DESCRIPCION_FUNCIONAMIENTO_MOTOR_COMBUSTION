<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el conocimiento adquirido sobre el funcionamiento, ubicación y ajuste de los componentes del sistema de distribución en motores de combustión interna, incluyendo el eje de levas, las válvulas y los diferentes mecanismos de accionamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!...',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del eje de levas en un motor de combustión interna?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enfriar el motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regular la presión del aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la potencia del motor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sincronizar la apertura y cierre de las válvulas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de sistema de accionamiento del eje de levas es más silencioso y económico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Piñones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Banda dentada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cadena metálica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Engranajes helicoidales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes componentes NO forma parte del sistema de distribución del motor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Válvulas de admisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Árbol de levas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cigüeñal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Balancines.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué sistema de distribución no requiere mantenimiento durante la vida útil del motor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Piñones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Banda dentada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cadena metálica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sistema hidráulico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué sucede si la holgura de las válvulas es menor a la recomendada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se puede quemar la cabeza de la válvula.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se incrementa la eficiencia del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuye la temperatura del motor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta el consumo de combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la relación de engranajes entre el cigüeñal y el eje de levas en un motor de cuatro tiempos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1:1',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3:1',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '2:1',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '4:1',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la ventaja de la propulsión directa de las válvulas en comparación con otros sistemas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es más costoso que los demás sistemas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce la cantidad de componentes móviles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Requiere más mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cómo se logra la calibración automática de las válvulas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediante tornillos de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con varillas empujadoras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mediante ajuste manual constante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizando propulsores hidráulicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿En qué parte del motor se encuentran las válvulas en un sistema de propulsión directa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En el cárter.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En el cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el sistema de escape.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En la culata.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de estos factores influye en el rendimiento del motor y la apertura de las válvulas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Altura y perfil de la leva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Temperatura del aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posición del cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de cilindros del motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
