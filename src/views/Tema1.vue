<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Accionamiento del eje de levas

    .row.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 90px").m-auto
      .col
        p.mb-0 A pesar de que puede variar de acuerdo al diseño del constructor y de la ubicación del eje o de los de levas en el motor, entre los movimientos más utilizados se encuentran: a través de piñones en toma constante, de piñones con cadenas metálicas, de dientes rectos y de bandas dentadas.


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Accionamiento del eje de levas por piñones

    .row
      .col-lg-7
        .row.justify-content-center.bg-t1-1.align-items-center.p-4(data-aos="fade-right")
          .col-auto
            figure
              img(src="@/assets/curso/tema1/img2.png" style="width: 120px;").m-auto
          .col-lg-9
            p.mb-0 Cuando el eje de levas con el cigüeñal está cerca, se dice que se utiliza engranajes o piñones en toma constante. Para evitar ruido en la trasmisión del movimiento se suele acudir a piñones de dientes inclinados, piñones de fibras o de tejido duro.
        
        p.mt-4 El piñón del cigüeñal engrana con el del eje de levas, teniendo este último el doble del número de dientes que el piñón del cigüeñal, para que la relación 2:1 se mantenga, a pesar de que se podría tener un piñón intermedio, cuando los dos ejes están más alejados entre sí.

      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 480px").m-auto

    .row.mt-4.justify-content-center(data-aos="fade-right")
      .col-3.col-md-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img4.png', alt='', style="height: 460px").m-auto
      .col-lg-5.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1
          span Accionamiento del eje de levas por piñones  
        figure
          img(src='@/assets/curso/tema1/img5.png', alt='La imagen muestra un diagrama técnico del sistema de distribución de un motor de combustión interna, ilustrando la conexión entre el cigüeñal y el árbol de levas mediante un conjunto de engranajes.', style="width: 500px").m-auto
          figcaption.mt-2 Nota. Tomado y adaptado de https://www.ro-des.com/mecanica/averias-en-el-arbol-de-levas/

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Accionamiento del eje levas por cadena metálica

    .row.justify-content-center.bg-t1-2
      .col-12
        .p-4
          .row
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.h-100
                p El sistema de mando con cadena metálica se utiliza con frecuencia cuando las distancias entre los dos ejes es mayor, a pesar de que el eje de levas está en el bloque de cilindros o en la culata. Para garantizar que la cadena esté permanente templada, se diseña un templador y unas pistas de deslizamiento de la cadena, que actúan como guía, así se evita el ‘chasquido’ producido con la transmisión del movimiento.
            .col-md-6.col-lg-4.mt-4.d-none.d-lg-block(data-aos="fade-left")
              .p-4.bg-t1-3.h-100
                figure.mb-3(style="visibility: hidden;") 
                  img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 120px;").target-with
            .col-md-6.col-lg-4.mb-4.mb-lg-0.mt-4(data-aos="fade-right")
              .p-4.bg-t1-4.h-100
                figure
                  img(src='@/assets/curso/tema1/img7.png', alt='', style="width: 140px")
                p Ahora, el sistema de cadena tiene la desventaja de contar entre sus partes móviles con mucha masa o peso, lo que reduce de alguna forma la potencia del motor donde se encuentra instalado.

          .row.justify-content-center.p-4.mt-4
            .col-lg-10.col-md-12
              .row.bg-t1-5.p-4.justify-content-center
                p(data-aos="fade-down") Esta clase de sistema está exento de mantenimiento durante la vida útil del motor y es bastante confiable, por eso los fabricantes suele utilizarlo seguido para sus motores.
                .row.justify-content-center
                  .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 480px").m-auto
                  .col-lg-6.col-md-12(data-aos="fade-left")
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 2
                      span Accionamiento del eje levas por cadena metálica
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='La imagen muestra un esquema del sistema de distribución de un motor de combustión interna, resaltando los componentes clave del mecanismo de válvulas. Se observa la cadena de distribución, que transmite el movimiento del piñón del cigüeñal al piñón del árbol de levas, permitiendo la sincronización de las válvulas de admisión y escape. También se identifican elementos como el taqué, la varilla empujadora, el balancín y el muelle de cierre, los cuales controlan la apertura y cierre de las válvulas en el ciclo del motor.', style="width: 480px").m-auto

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Accionamiento del eje de levas por banda dentada
    
    .row
      .col-12
        .p-2
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-7(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-t1-6
                .col-lg-4.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema1/img10.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px;")
                
                .col-xl.d-flex
                  .p-4.w-100.d-flex.align-items-center
                    p.mb-0 Para compensar este defecto del posible ruido que produce la cadena durante la transmisión y a reducir el peso de este elemento transmisor, se han diseñado sistemas de transmisión por banda dentada, banda construida de fibras especiales y de goma, cuyas fibras longitudinales evitan su variación o rotura.
            .col-lg-5.mt-4.d-lg-block.d-none(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img11.png', alt='', style="width: 480px").m-auto

    .row.align-items-center(data-aos="fade-right")
      .col-md-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img12.png", alt="", style="width: 90px").m-auto
      .col
        p.mb-0 Esta banda es movida desde el cigüeñal por un piñón de dientes planos, los cuales no permiten que ‘patine’ el movimiento hasta el piñón del eje de levas. También como en el caso anterior, se requiere de un tensor de la banda, el cual es empujado por un muelle o puede ser presionado hidráulicamente por un pistón tensor o un sistema excéntrico de tensionado de la banda.

    .row.justify-content-center.mt-4
      .col-10
        .row.justify-content-center
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            h5 Figura 3 
            span Motor de cuatro cilindros, cuya distribución es comandada por una banda dentada, que impulsa a dos ejes de levas
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
            figure
            img(src='@/assets/curso/tema1/img13.png', alt='Motor de cuatro cilindros, cuya distribución es comandada por una banda dentada, que impulsa a dos ejes de levas.', style="width: 480px").m-auto
          .col-lg-6(data-aos="fade-left")
            figure
            img(src='@/assets/curso/tema1/img14.png', alt='', style="width: 480px").m-auto

    .row.mt-4
      .row.mb-2.ms-0.mt-4
        .col-auto.bg-subtitulo(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0(style="color:white") Ventajas de la banda dentada frente a otros sistemas

    .row.d-flex.align-items-stretch.bg-t1-7 
      .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block(data-aos="fade-right")
        figure.m-0.p-0.w-100.h-100.d-flex
          img(src='@/assets/curso/tema1/img15.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px;")
      
      .col-lg-7.d-flex(data-aos="fade-left")
        .p-4.w-100.d-flex.align-items-center
          .text-content
            p Este último sistema de banda dentada ha sido adoptado casi por todos los fabricantes. Debido a dos razones: su bajo costo y porque no produce ruido en el motor. Su sistema es silencioso y de fácil reemplazo, el cual debe realizarse, dependiendo de su diseñador entre los 40.000 y 80.000 kilómetros de recorrido, salvo el criterio diferente o el tiempo probado y recomendado por el constructor de cada motor.

            p Con cualquier sistema de sincronización utilizado, el cigüeñal y el eje de levas disponen de unas marcas de referencia, para que los puntos indiquen el punto óptimo de funcionamiento del motor. Cuando se arma un motor o cuando requiere de mantenimiento o reemplazo, se debe seguir estas marcas de referencia, siendo posiblemente distintas en cada motor.

    .row.mt-2
      p.mt-2(data-aos="fade-down") Cuando no se tiene una marca señalada, se deben indicar estos puntos con marcas realizadas por cada técnico, para montar los ejes en la posición correcta.

    .row.mt-4.justify-content-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='', style="width: 480px").m-auto
      .col-lg-5.col-md-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4
          span Muestra de los puntos con marcas realizadas
        figure
          img(src='@/assets/curso/tema1/img17.png', alt='La imagen muestra un sistema de distribución por banda dentada, con dos piñones de sincronización que corresponden al árbol de levas. Se observan señales de alineación, que son marcas de referencia utilizadas para sincronizar correctamente la distribución del motor. Estas marcas garantizan que las válvulas y los pistones trabajen en la secuencia adecuada, evitando problemas en el funcionamiento del motor.', style="width: 480px").m-auto


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
