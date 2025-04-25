<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-intro1
      .col-12
        .px-5
          .row.align-items-center.justify-content-center(data-aos="fade-down")
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
              .row
                .col-12.align-items-center.h-100
                  .p-4.bg-intro2
                    .row.align-items-center.mb-3
                      .col-md-12
                        figure
                          img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 100px")
                        p El sistema que mediante el accionar de las válvulas regulan la entrada de mezcla y salida de gases quemados del cilindro está compuesto por el árbol de levas, engranaje de mando, válvulas de admisión y escape, elementos de mando, balancines. Sin embargo, es el eje de levas el encargado de sincronizar en el motor perfectamente, la apertura de las válvulas para el buen rendimiento del automóvil.

                        p #[b ¡Muchos éxitos en esta experiencia de aprendizaje!]

            .col-lg-5(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 480px").m-auto

          figure.mt-4.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/intro/img3.png', alt='').m-auto 
                

</template>

<script>
export default {
  name: 'Introduccion',
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
