<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ubicación de las válvulas y el eje de levas
    
    p A continuación, conoceremos la ubicación de las válvulas y el eje de levas.
    
    separador
    #t_3_1.titulo-segundo.color-primario
      h2 3.1 Válvulas y eje de levas en el bloque de cilindros

    .row.justify-content-center
      .row
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema3/img0.png', alt='', style="width: 480px").m-auto

        .col-lg-8
          .row.bg-t2-2.p-4
            p Cuando el motor tiene las válvulas alojadas en el bloque de cilindros, su comando tiene la misma dirección que el movimiento del pistón; característica por la cual este sistema se considera fuera de uso, debido al mal diseño de la cámara de combustión.
          
          .row.mt-4
            .col-md-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img1.png", alt="", style="width: 90px").m-auto
            .col
              p.mb-0 En estos motores estaba alojado el eje de lavas en la parte baja del bloque, para que un sistema de piñones en toma constante impulse al eje o a los ejes de levas. Sobre cada leva, ya sea de admisión o de escape, se instalaba un propulsor, que se deslizaba sobre un pequeño orificio cilíndrico trabajado en el mismo bloque.

    .row.justify-content-center.mt-4
      .col-lg-10
        p Cada propulsor disponía de un sistema de regulación con perno y tuerca de ajuste, para que se pueda ajustar la distancia del propulsor con respecto al vástago de la válvula.

    .row.justify-content-center.mt-4.bg-t3-1
      .col-10
        .row.justify-content-center
          .col-lg-5
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 7
              span  Válvulas y eje de levas en el bloque de cilindros
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='La imagen muestra un esquema del proceso de admisión en un motor de combustión interna, destacando el flujo de aire y combustible hacia la cámara de combustión.', style="width: 300px").m-auto
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 480px").m-auto


            
      separador
    #t_3_2.titulo-segundo.color-primario
      h2 3.2 Válvulas en la culata y eje de levas en el bloque de cilindros

    .row.justify-content-center
      .row
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 480px").m-auto

        .col-lg-7
          .row
            .col-md-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img5.png", alt="", style="width: 100px").m-auto
            .col
              p.mb-0.mt-4 El sistema de válvulas en el bloque de cilindros no permitía un buen desempeño del motor, debido al diseño mismo de la cámara de combustión, y además porque se requería de un bloque más ancho para alojar al eje de levas y los mecanismos de empuje de válvulas.

          .row.bg-t3-2.mt-2.p-4
            p Cuando las válvulas están alojadas en la culata, la forma de transmitir este movimiento a ellas puede diferir, ya que pueden existir ejes de levas alojados en el mismo bloque de cilindros o instalados en la misma culata.

      p.mt-4 Si el eje de levas está alojado en el bloque, para transmitir hasta las válvulas este movimiento, se requiere de propulsores (taqués), varillas empujadoras y balancines. Los balancines finalmente empujan a la válvula, girando en un eje o pivote. Si el balancín tiene los dos brazos del mismo tamaño o lo que es lo mismo, su punto de apoyo está en el medio, el empuje máximo de la leva será el mismo recorrido de la válvula.

    .row.justify-content-center.mt-4.bg-t3-4
      .col-10
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 8
              span  En caso contrario, si las palancas de empuje (balancines) tienen diferentes longitudes de palanca, este desplazamiento de la leva se puede aumentar o disminuir, dependiendo de las necesidades y del diseño del motor
            figure
              img(src='@/assets/curso/tema3/img6.png', alt='La imagen presenta cómo en caso contrario, si las palancas de empuje (balancines) tienen diferentes longitudes de palanca, este desplazamiento de la leva se puede aumentar o disminuir, dependiendo de las necesidades y del diseño del motor', style="width: 480px").m-auto
          .col-md-12.col-lg-6.mb-lg-0.mt-4(data-aos="fade-down")
            .p-4.bg-t3-3
              figure
                img(src='@/assets/curso/tema3/img7.png', alt='', style="width: 140px")
              p Por lo que sigue, este sistema de válvulas en culata, con el eje instalado en bloque de cilindros resulta inapropiado. Porque en motores con cilindros en ‘V’ por ejemplo, se requerirán de muchos propulsores y varillas para impulsar a las válvulas de cada lado de cilindros.

            p.mt-3 En estos mismos casos de ejes de levas en el bloque, al disponer el motor de doble fila de cilindros, como en motores en ‘V’ o con cilindros opuestos ‘Boxer’, el eje de levas requerirá de una mayor cantidad de levas, que le servirán para impulsar a las válvulas de cada lado, aunque en algunos casos estas levas puedan, especialmente en motores boxer, servir para impulsar a las válvulas de ambos lados, pero de todas maneras esto lo vuelve complejo e ineficiente.

      .row.mt-4.justify-content-center.p-5
        .col-lg-1
          figure
            img(src="@/assets/curso/tema3/img8.png", alt="", style="width: 150px").m-auto
        .col-lg-11
          p Este sistema de ejes de levas en el bloque de cilindros ha sido desplazado casi completamente al instalar al eje de levas en la misma culata, reduciéndose de esta forma, una serie de mecanismos de transmisión; los cuales restan potencia al motor, vuelven más complejo al comando de válvulas, con los consabidos factores negativos de aumento del peso total y de la reducción de la potencia efectiva, como se presenta en la siguiente figura.     

      .row.justify-content-center
        .col-lg-6.col-md-10.p-lg-0.p-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9
            span  En caso contrario, si las palancas de empuje (balancines) tienen diferentes longitudes de palanca, este desplazamiento de la leva se puede aumentar o disminuir, dependiendo de las necesidades y del diseño del motor
          figure
            img(src='@/assets/curso/tema3/img9.png', alt='La imagen presenta cómo el sistema de ejes de levas en el bloque de cilindros ha sido desplazado casi completamente al instalar al eje de levas en la misma culata.', style="width: 480px").m-auto 
    

    separador
    #t_3_3.titulo-segundo.color-primario
      h2 3.3 Válvulas en la culata y eje de levas sobre palanca basculante

    .row.justify-content-center.bg-t3-5
      .col-12
        .p-5
          .row
            .col-lg-7
              .row
                .col-md-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema3/img10.png", alt="", style="width: 90px").m-auto
                .col
                  p.mb-0 En los motores modernos no solamente se puede disponer de un solo eje de levas, sino que se puede instalar dos en cada culata, es decir un eje para las válvulas de admisión y otro eje para las válvulas de escape.
              .row.bg-t2-2.p-4.mt-4
                p Por ejemplo, un motor moderno de seis cilindros en ‘V’, al tener dos culatas, una para cada lado de cilindros, puede disponer de un eje de levas de admisión y otro de escape en cada culata; es decir, tendrá cuatro ejes de levas en el motor. Cuando el eje de levas está alojado en el mismo cabezote o culata, la forma de empujar a las válvulas puede diferir, de acuerdo al sistema utilizado y al diseño particular del motor. Por ejemplo, las válvulas pueden ser empujadas a través de palancas basculantes, las cuales tienen un apoyo fijo o calibrable, en el cual “pivotean”, presionando la leva en la parte media de la palanca. El otro extremo de esta palanca presiona a la válvula.
              
            .col-lg-5.mt-4
              figure
                img(src='@/assets/curso/tema3/img11.png', alt='', style="width: 480px").m-auto

            p.mt-4 La longitud de la palanca basculante y la posición del eje de levas con respecto a esta palanca influyen en el recorrido de las válvulas, además, por supuesto, de la altura total de la leva.

            .row.justify-content-center
              .col-lg-5.col-md-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 10
                  span   Eje de levas sobre palanca basculante
                figure
                  img(src='@/assets/curso/tema3/img12.png', alt='Imagen que presenta el eje de levas sobre la palanca basculante.', style="width: 400px")
              .col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 480px")

      separador
    #t_3_4.titulo-segundo.color-primario
      h2 3.4 Válvulas en la culata y eje de levas debajo del balancín

    .row.justify-content-center
      .col-12
        .p-4
          .row.justify-content-center.align-items-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-t3-9
                .col-lg-8.p-5
                  p Otro sistema que es utilizado y bastante común en los motores modernos, es cuando el eje de levas transmite su movimiento hasta las válvulas por medio de balancines, similares a los balancines que se utilizaban con motores cuyo eje de levas estaba instalado en el bloque de cilindros.
                  .row.align-items-center.justify-content-center
                    .col-2
                      figure
                        img(src="@/assets/curso/tema3/img15.png", alt="", style="width: 87px")
                    .col-10
                      p Así, la leva empuja a uno de los extremos del balancín, el mismo que pivotea en su eje y el otro extremo se encarga de empujar a la válvula.

                    
                    
                .col-lg-4.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema3/img14.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: 10px; width:")
                
              
    .row.justify-content-center
      .row
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img16.png', alt='', style="width: 480px").m-auto

        .col-lg-8
          .row
            .col-md-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img17.png", alt="", style="width: 90px").m-auto
            .col
              p.mb-0.mt-4 Tanto en este caso, como en el anterior de palancas basculantes, se tiene un tornillo de calibración o una excéntrica, que permiten la calibración de válvulas, compensando de esta manera el desgaste del sistema, el asentamiento mismo de las válvulas y las dilataciones producidas de cada parte.
              
          .row.justify-content-center.align-items-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-t1-6
                .col-xl.d-flex
                  .p-4.w-100.d-flex.align-items-center
                    p.mb-0 Cuando el sistema dispone de este tipo de balancines también la longitud de la palanca y la posición del eje de levas influyen en el recorrido de las válvulas.
          
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema3/img18.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-right: -10px;")

    .row.bg-t3-6
      .col-12
        .p-5
          p El balancín también es considerado como una palanca de dos brazos, el cual gira en un punto de apoyo en el medio de ellos.

          .row.justify-content-center.mt-4
            .col-lg-5.col-md-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 11
                span Eje de levas debajo del balancín
              figure
                img(src='@/assets/curso/tema3/img19.png', alt='Imagen que presenta el eje de levas debajo del balancín.', style="width: 400px").m-auto
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img20.png', alt='', style="width: 480px")
                
      separador
    #t_3_5.titulo-segundo.color-primario
      h2 3.5 Válvulas en la culata y propulsión directa

    .row.bg-t3-7
      .col-12
        .p-5
          .row.align-items-center.justify-content-center(data-aos="fade-down")
            .col-lg-7(data-aos="fade-left")
              .row
                .col-12.align-items-center.h-100
                  .p-4.bg-t3-10
                    .row.align-items-center.mb-3
                      .col-md-12
                        figure
                          img(src='@/assets/curso/tema3/img21.png', alt='', style="width: 87px")
                        p.mt-2 Para transmitir el movimiento de válvulas en los sistemas anteriormente explicados, se han necesitado de varios elementos, como propulsores, varillas empujadoras, ejes de balancines, balancines y otros, elementos que tienen cierto peso o masa, con lo cual se producen fuerzas de inercia durante la apertura y el cierre de válvulas, movimientos muy rápidos, en especial con altas revoluciones del motor.

            .col-lg-5.mb-4.mb-lg-0.mt-2.mt-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img22.png', alt='', style="width: 480px").m-auto

          
          .row.justify-content-center.p-4.mt-4
            .col-lg-10.col-md-12
              .row.bg-t1-5.p-4.justify-content-center
                p Este ‘desgaste de energía’ para mover estas partes, disminuye un cierto porcentaje la potencia efectiva del motor, por lo que se han buscado sistemas de transmisión que reduzcan o eviten la utilización de estas partes móviles de transmisión del empuje de las levas, hacia las válvulas.
                .row.justify-content-center
                  .col-lg-6.col-md-12
                    .row.bg-t3-8.p-lg-5.p-2
                      p Se han diseñado sistemas de empuje directamente desde el eje de levas hasta las válvulas, utilizando solamente propulsores. Con ello, el movimiento es directo y las fuerzas de inercia disminuyen, además de que no se requieren partes adicionales para ello.
                  .col-lg-6.mt-4
                    figure
                      img(src='@/assets/curso/tema3/img23.png', alt='', style="width: 480px").m-auto

              p.mt-4 Un ejemplo de lo referido es un sistema de propulsión directa de las levas, por medio de un propulsor hasta los vástagos de las válvulas.

              .row.justify-content-center.mt-4
                .col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema3/img24.png', alt='', style="width: 480px")
                .col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 12
                    span Propulsión directa
                  figure
                    img(src='@/assets/curso/tema3/img25.png', alt='Imagen que presenta un sistema de propulsión directa de las levas, por medio de un propulsor hasta los vástagos de las válvulas.', style="width: 400px")




</template>

<script>
export default {
  name: 'Tema3',
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
