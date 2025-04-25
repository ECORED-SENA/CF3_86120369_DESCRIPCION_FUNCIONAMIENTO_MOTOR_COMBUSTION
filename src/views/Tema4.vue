<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Sistema moderno de propulsión de válvulas
    
    .row.bg-t4-1
      .col-12
        .px-5
          .row.align-items-center.justify-content-center.mt-2
            .col-lg-7(data-aos="fade-right")
              .row
                .col-12.align-items-center.h-100
                  .p-4.bg-t4-2
                    .row.align-items-center.mb-3
                      .col-md-12
                        figure
                          img(src='@/assets/curso/tema4/img1.svg', alt='', style="width: 87px")
                        p.mt-2 Cada fabricante y diseñador de motores utilizará al sistema más moderno de propulsión y distribución de válvulas más apropiado, de acuerdo al diseño de todas y cada una de las partes de su motor. Buscará con todas estas nuevas tecnologías diseñar un motor con el mejor torque en todos los rangos de aceleración, una mayor potencia con el menor consumo de combustible, y sobre todo un motor que sea amigable con la Naturaleza, generando con estos atributos la menor cantidad de emisiones contaminantes.

            .col-lg-5.mb-lg-0.mt-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img2.png', alt='', style="width: 480px").m-auto

          .row.justify-content-center.p-4.mt-4
            .col-lg-10.col-md-12
              .row.bg-t1-5.p-4
                .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                  .row.bg-t3-8.p-4.p-lg-5
                    figure
                      img(src='@/assets/curso/tema4/img3.png', alt='', style="width: 280px").m-auto

                .col-lg(data-aos="fade-left")
                  p Los fabricantes y diseñadores utilizan los sistemas de propulsión y distribución, según varias necesidades.
                  figure
                    img(src='@/assets/curso/tema4/img4.png', alt='', style="width: 480px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
