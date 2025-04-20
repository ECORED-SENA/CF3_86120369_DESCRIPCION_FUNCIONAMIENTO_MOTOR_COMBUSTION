<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diagrama estándar y mejorado de apertura de las válvulas

    p Conozcamos cada uno de estos diagramas.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Diagrama estándar de apertura de las válvulas
    .row.justify-content-center.bg-t2-1.ajuste-espacio
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-t2-2
                .col-lg-6.d-flex
                  .p-4.w-100.d-flex.align-items-center
                    p.mb-0 El perfil de cada leva, ya sea para la válvula de admisión o para la válvula de escape, se encargará de impulsar a la válvula correspondiente durante un cierto ángulo de giro, en coordinación o de forma sincronizada con el eje cigüeñal, para que podamos obtener los cuatro ciclos del motor.
                .col-lg-6.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema2/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: 10px; width:")
                
            .col-lg-4.p-lg-4.p-md-0.mt-4.mt-lg-0
              p La válvula de admisión se abre aproximadamente entre unos 15° hasta 45° antes de que el pistón llegue al PMS; durante la etapa de escape y se cierra entre 35° hasta 75° después del PMI. Es decir, cuando está subiendo el pistón en la etapa de compresión. Estos dos ángulos, el de anticipo a la apertura y de retraso al cierre, sumados a los 180° entre el PMS y el PMI sumarán en un motor estándar aproximadamente unos 235° hasta 245° de promedio, tiempo suficiente para que el motor pueda aspirar la mezcla aire y combustible en un motor a gasolina.

          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='').m-auto
            .col-lg-8.mt-3.mt-md-2.p-md-0
              p De igual manera, la válvula de escape se abre (en un motor estándar) aproximadamente entre unos 35° hasta 75° antes del PMI, al final de la etapa de trabajo y se cierra entre 15° hasta 45° después del PMS, es decir cuando está bajando el pistón en la etapa de admisión. Estos dos ángulos, el de anticipo a la apertura y de retraso al cierre, sumados a los 180° entre el PMS y el PMI sumarán en un motor estándar, e igual o aproximado al tiempo de apertura de la válvula de admisión, es decir aproximadamente unos 235° hasta 245° de promedio, tiempo suficiente para que el motor pueda expulsar los gases quemados durante la combustión.

          .row.justify-content-center.mt-4
            .col-lg-10
              .row.justify-content-center
                .col-lg-3.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 480px").m-auto
                .col-lg-7.col-md-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 5
                    span Diagrama estándar de apertura de las válvulas
                  figure
                    img(src='@/assets/curso/tema2/img4.png', alt='La imagen muestra un diagrama de distribución de válvulas en un motor de combustión interna, indicando los cuatro tiempos del ciclo del motor: admisión (azul claro), compresión (azul oscuro), expansión (rojo) y escape (rosado). Se marcan los puntos clave como PMS (Punto Muerto Superior) y PMI (Punto Muerto Inferior), junto con los momentos de apertura y cierre de las válvulas, incluyendo adelantos y retardos en la sincronización para optimizar el rendimiento del motor.', style="width: 480px").d-block.d-lg-inline.mx-auto.mx-lg-0

              p.mt-4 A estos ángulos de apertura total de las válvulas se deberán sumar algunos grados más, que son aquellos que el perfil de cada leva no empuja a la válvula y es el espacio u holgura dejada para la calibración de las válvulas; ya que esta holgura compensa la dilatación de cada una de las partes en movimiento, especialmente de las válvulas que trabajan con altas temperaturas.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Diagrama mejorado de apertura de las válvulas

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-7(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t1-7
          .col-lg-3.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema2/img5.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px;")
          
          .col-lg-9.d-flex
            .p-3.w-100.d-flex.align-items-center
              p.mb-0 El eje de levas estándar de un motor de cuatro ciclos permite un buen llenado del cilindro y una suficiente evacuación de los gases combustionados. Pero en motores que necesitan mayor potencia, además de diseñar de mejor manera cada una de sus partes, utilizando materiales y sistemas más modernos y eficientes, se puede instalar en el motor unos ejes de levas que permitan una óptima respiración, diseñando un ángulo mayor de las levas o modificando su perfil de ataque.
      .col-lg-5.mt-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='', style="width: 480px").m-auto

    .row.align-items-center
      .col-md-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img12.png", alt="", style="width: auto").m-auto
      .col.p-md-0
        p.mb-0 En ese sentido, un ángulo mayor de las levas brindará mejor respiración y mayor potencia al motor, pero esta apertura más anticipada y este cierre más retardado de las válvulas produce un desequilibrio y desestabilidad en bajas revoluciones y con ello una falta de torque en esta etapa. Estos inconvenientes pueden o han sido solucionados con sistemas mejorados de inyección y encendido, así como con sistemas de variación en la sincronización de los ejes de levas o en el tiempo y recorrido de las válvulas, que ayudan a tener buena potencia y mejor estabilidad.

    .row.justify-content-center.mt-4
      .col-10
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 6
              span Diagrama de distribución mejorado
            figure
              img(src='@/assets/curso/tema2/img7.png', alt='El diagrama mejorado de apertura de las válvulas muestra la sincronización optimizada en un motor de combustión interna, destacando los cuatro tiempos del ciclo: admisión, compresión, expansión y escape. Se incluyen adelantos y retardos en la apertura y cierre de las válvulas para mejorar la eficiencia y potencia del motor, alineados con los puntos PMS (Punto Muerto Superior) y PMI (Punto Muerto Inferior).', style="width: 480px")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 300px")

        p.mt-4 Si se realiza una optimización de la leva se podrían obtener también otras formas del llenado, incrementando simplemente la altura y perfil de la leva original.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
