<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ajustes y graduación
    
    p Estudiemos ahora el tema correspondiente a ajustes y graduación.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Juego y calibración de válvulas

    .row.bg-t5-1.ajuste-espacio
      .col-12
        .p-5
          .row.justify-content-center
            .row
              .col-lg-4.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/img1.png', alt='', style="width: 480px").m-auto

              .col-lg-8
                .row.bg-t3-8.p-4
                  .col-md-auto.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema5/img2.png", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 Como el motor de combustión interna adquiere un incremento de temperatura durante su trabajo, debido a la misma combustión de la mezcla, todas sus partes están expuestas a dilatación; una de las que más, es la válvula, ya que su cabeza está en contacto directo con la combustión.

                .row.mt-4
                  p De manera que la válvula de admisión, debido al ingreso de la mezcla o aire fresco, se mantiene a menor temperatura; mientras que la de escape, se calienta mucho más. Así, la primera tenderá a dilatarse menos y la segunda, más. Lo que en consecuencia significa, la holgura en las válvulas de admisión será menor y la holgura de las válvulas de escape será mayor.

                .row.bg-t1-5.p-2
                  .row.justify-content-center.align-items-center
                    .col-lg-2
                      .row
                        figure
                          img(src='@/assets/curso/tema5/img3.png', alt='', style="width: 140px").m-auto

                    .col-lg-10
                      p Esta dilatación longitudinal de la válvula debe compensarse de alguna manera, y para ello se debe dejar una holgura de compensación de esta dilatación. A esta holgura se la llama ‘calibración de válvula’, que cumple adicionalmente otra importante función, que es la de permitir que se mantenga un ángulo definido de trabajo de la leva, que tiene un ángulo formado en su perfil.

          p.mt-4 Este ángulo mantiene un cierto tiempo abierta a la válvula, que es el ángulo que permite utilizar las mejores condiciones de funcionamiento y brindar con ello la mayor potencia del motor, ya que del llenado de la mezcla en el cilindro y de la cantidad mayor de los gases quemados salientes, depende directamente la potencia entregada por él.

          .row.d-flex.align-items-stretch.bg-t1-7
            .col-xl-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
              figure.m-0.p-0.w-100.h-100.d-flex
                img(src='@/assets/curso/tema5/img4.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px;")
            
            .col-xl-7.d-flex
              .p-4.w-100.d-flex.align-items-center
                .text-content
                  p Cuando se ha calibrado una válvula con una holgura menor a la recomendada por el fabricante, al dilatarse la válvula aumentará en longitud, pero al no tener espacio suficiente, topa contra el eje de levas y la válvula no cierra en su asiento. Al no asentar no podrá transmitir su alta temperatura al asiento, pudiéndose quemar la cabeza de la válvula, dañándose y perdiendo compresión el cilindro correspondiente, produciéndose un desequilibrio del motor por excesivo ángulo de funcionamiento.


          .row.mt-5
            .col-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema5/img5.png", alt="", style="width: 90px").m-auto
            .col-11
              p.mb-0 Cuando la calibración es mayor a la solicitada, el ángulo de funcionamiento de esta válvula será menor, con menor llenado del cilindro y menor desalojo de los gases quemados, produciéndose adicionalmente ruido o golpeteo por el excesivo juego.


          .row.justify-content-center.mt-5
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img6.png', alt='', style="width: 400px")
            .col-lg-5
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 13
                span Calibración de válvula mayor a la solicitada
              figure
                img(src='@/assets/curso/tema5/img7.png', alt='', style="width: 480px").d-block.d-lg-inline.mx-auto.mx-lg-0

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Formas calibración de las válvulas

    .row.bg-t5-2
      .col-12
        .p-5
          p.ajuste-espacio La calibración de las válvulas puede realizarse de dos formas:

          .row
            .row.mb-2.ms-0.mt-4
              .col-auto.bg-subtitulo(data-aos="fade-left")
                .row.align-items-center
                  .col-auto.px-0
                    figure
                      img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                  .col
                    h3.mb-0(style="color:white") Mecánica

          p.mt-4 Se puede hacer utilizando un tornillo y una contratuerca de ajuste, también puede ser con una excéntrica, un perno hexágono en el interior del propulsor, una ‘pastilla o lámina calibrada’ o un tornillo de ajuste cónico en el propulsor, entre las formas más comunes que se han diseñado en los motores de combustión.

          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center.mt-4.bg-t1-5.p-4
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 14
                    span Calibración mecánica con tornillo
                  figure
                    img(src='@/assets/curso/tema5/img8.png', alt='', style="width: 400px").d-block.d-lg-inline.mx-auto.mx-lg-0
                .col-lg-6.mt-4
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 15
                    span Calibración mecánica con perno de regulación
                  figure
                    img(src='@/assets/curso/tema5/img9.png', alt='', style="width: 400px").d-block.d-lg-inline.mx-auto.mx-lg-0

          .row
            .row.mb-2.ms-0.mt-4
              .col-auto.bg-subtitulo(data-aos="fade-left")
                .row.align-items-center
                  .col-auto.px-0
                    figure
                      img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                  .col
                    h3.mb-0(style="color:white") Automática

          p.mt-4 Basado en la utilización de propulsores o tanques hidráulicos, que son formados con dos pistones uno dentro del otro, los cuales, al llenarse con aceite de la misma lubricación, forman una almohadilla que permite mantener la holgura exacta. Este sistema de calibración o auto ajuste tiene la ventaja de que el propulsor hidráulico se va ajustando automáticamente con el desgaste o asentamiento de los elementos, tales como las válvulas, los asientos, los ejes, balancines, levas, etc.

          .row.justify-content-center.mt-4
            .col-lg-5
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 16
                span  Calibración automática
              figure
                img(src='@/assets/curso/tema5/img10.png', alt='', style="width: 400px").d-block.d-lg-inline.mx-auto.mx-lg-0
            .col-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img11.png', alt='', style="width: 400px")

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Calibración de las válvulas con tornillo y tuerca

    .row.justify-content-center.bg-t5-3
      .col-12
        .p-5.ajuste-espacio
          .row.align-items-center
            .col-lg-7
              .row
                .col-md-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema5/img12.png", alt="", style="width: 90px").m-auto
                .col
                  p.mb-0 Este sistema de calibración tal vez es el más común de todos los sistemas utilizados de calibración manual, y fue instalado desde los primeros motores. Estos sistemas, que hasta el día de hoy se han utilizado, han sido reemplazados ahora por los sistemas automáticos o propulsores auto ajustables hidráulicos.
              .row.bg-t1-7.p-4.mt-4
                p El tornillo del balancín sirve además de apoyo para la varilla, la misma que al recibir el impulso del propulsor, obliga a pivotear al balancín. Este tornillo se puede ajustar o desajustar para obtener la holgura o calibración recomendada por el fabricante y luego de tener esta medida, se ajusta la contra tuerca para fijarlo.
              
            .col-lg-5.mt-4
              figure
                img(src='@/assets/curso/tema5/img13.png', alt='', style="width: 480px").m-auto

            p.mt-4 Partes de este sistema de propulsión, uno de ellos desde el eje de levas en la parte baja del bloque de cilindros y otro gráfico con el eje de levas en la culata, pero con balancines. La holgura se mide con un calibrador de láminas.

            .row.justify-content-center.mt-4
              .col-lg-5
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 17
                  span Calibración de válvulas con tornillo y tuerca
                figure
                  img(src='@/assets/curso/tema5/img14.png', alt='', style="width: 380px").d-block.d-lg-inline.mx-auto.mx-lg-0
              .col-4.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/img15.png', alt='', style="width: 300px")

    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Calibración de las válvulas con excéntrica

    .row.bg-t5-4
      .col-12
        .p-5.ajuste-espacio
          .row.justify-content-center.align-items-center
            .col-lg-8
              p Después de ver el diseño anterior, es posible comparar entre el de balancines que reciben el impulso desde una varilla propulsora con este sistema en el cual el eje de levas, al estar instalado en la culata, impulsa directamente al balancín desde abajo y este último que se encarga, al pivotear en su eje, de impulsar a la válvula del motor.

              .row.justify-content-center.align-items-center.bg-t5-7.p-3
                .col-auto
                  figure
                    img(src="@/assets/curso/tema5/img17.png", alt="", style="width: 87px").m-auto
                .col
                  p Este balancín no dispone del tornillo y la contratuerca, han sido reemplazados por un rodillo excéntrico en este extremo.

              p.mt-3 Cuando el rodillo excéntrico gira, su borde de ataque se puede acercar o alejar del vástago de la válvula, reduciéndose o aumentándose su holgura o calibración.


            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img16.png', alt='', style="width: 400px").m-auto



        .row.justify-content-center
          .row
            .col-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img18.png', alt='', style="width: 480px").m-auto

            .col-lg-8
              .row.bg-t2-2.p-4
                .row
                  .col-md-auto.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/tema5/img19.png", alt="", style="width: 90px").m-auto
                  .col
                    p.mb-0 El técnico entonces, deberá girar la tuerca de la excéntrica para obtener la holgura recomendada por el fabricante del motor, en ocasiones podrá recomendar tomar la holgura entre el eje de levas y el balancín; es decir, en el otro extremo de la medición.

                .row.justify-content-center.mt-4
                  .col-lg-5
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 18
                      span Calibración de las válvulas con excéntrica
                    figure
                      img(src='@/assets/curso/tema5/img20.png', alt='', style="width: 380px").d-block.d-lg-inline.mx-auto.mx-lg-0
              

    separador
    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5 Calibración de las válvulas con apoyo regulable

    .row.align-items-center.justify-content-center.mt-2(data-aos="fade-down")
      .col-lg-7(data-aos="fade-left")
        .row
          .col-12.align-items-center.h-100
            .p-4.bg-intro2
              .row.align-items-center.mb-3
                .col-md-12
                  figure
                    img(src='@/assets/curso/tema5/img21.png', alt='', style="width: 100px")
                  p Otro diseño interesante que se puede encontrar en los motores, es cuando el eje de levas, al estar instalado en la parte superior de las válvulas, una palanca basculante es la encargada de recibir este impulso y se encarga de empujar a la válvula. En este sistema se utiliza un perno de apoyo y de pivoteo de la palanca basculante, pero este apoyo es regulable, ya que está roscado en la culata.

      .col-lg-5.mb-4.mb-lg-0.mt-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img22.png', alt='', style="width: 480px").m-auto


    .row.bg-t5-6
      .col-12
        .p-5.ajuste-espacio
          .row.justify-content-center
            .col-lg-10
              .p-4
                .row.justify-content-center.mt-4.bg-t1-5.p-4
                  .col-6.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema5/img23.png', alt='', style="width: 400px")
                  .col-lg-6
                    p Para obtener la calibración recomendada por el fabricante, se debe desatornillar o atornillar este perno de apoyo, para que la palanca basculante suba o baje respectivamente, y de esta manera esta palanca se acerque o se aleje de la leva y con ello se reduzca o aumente esta holgura.

                    p En algunos motores últimos, este apoyo se ha reemplazado por un sistema de propulsión hidráulico, para que la distancia u holgura que regulábamos de manualmente se realice de forma automática.
                    
                    .row.bg-t5-5.p-4
                      p Algunos motores con cilindros en ‘V’ generalmente, tienen al único eje de levas alojado en la parte central de los cilindros; es decir, entre las dos líneas de cilindros, ya que el cigüeñal se conecta con este eje por medio de piñones o una cadena corta.


              p.mt-4 Por esta razón, los propulsores mecánicos que se apoyan sobre las levas, al propulsar a las varillas están empujando a cada balancín y este finalmente a la válvula.

              .row.justify-content-center.mt-4
                .col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 19
                    span  Calibración de las válvulas con apoyo regulable
                  figure
                    img(src='@/assets/curso/tema5/img24.png', alt='', style="width: 400px").d-block.d-lg-inline.mx-auto.mx-lg-0
                .col-5.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema5/img25.png', alt='', style="width: 480px")
                


</template>

<script>
export default {
  name: 'Tema5',
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
