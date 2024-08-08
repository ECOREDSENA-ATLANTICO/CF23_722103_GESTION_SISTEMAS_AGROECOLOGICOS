<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 En este componente se consolida el material de estudio para que el aprendiz identifique las bases técnicas y prácticas necesarias para ejercer un adecuado monitoreo a las actividades de propagación vegetal, que pueden ser evidenciadas en un huerto básico, viveros y/o proyectos de investigación donde sea llevada a cabo la reproducción asexual de las plantas para diferentes usos. así mismo, se hace énfasis en la importancia que tiene en esta actividad el cumplimiento a la normatividad vigente en Colombia por parte de las autoridades competentes como el Instituto Colombiano Agroecológico (ICA) quien es el encargado de supervisar el cumplimiento de los parámetros establecidos en la Resolución 0780006 del 25/11/2020.
    p.mb-3 Dado a lo anterior, las buenas prácticas agrícolas (BPA), permiten que estos requerimientos sean cumplidos y además los procesos de propagación sean de alta calidad tanto para la planta como para los aspectos económicos, sociales y de seguridad alimentaria. Cada una de las debilidades y desventajas que se evidencian en el monitoreo podrán ser mejoradas de acuerdo con los diferentes marcos de evaluación que permitan evidenciar una sustentabilidad para el producto, ambiente y sociedad.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá apreciar en el siguiente mapa conceptual.


    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
