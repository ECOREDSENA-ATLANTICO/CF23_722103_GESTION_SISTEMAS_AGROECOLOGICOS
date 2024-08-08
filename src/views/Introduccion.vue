<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.fondo.mb-3
      .col-lg-12(data-aos="fade-right")
        p.mb-3 En el desarrollo de este componente formativo, se permite reconocer el adecuado diligenciamiento de documentación y formatos a lo largo de todas las actividades que se realicen en la propagación vegetal, lo que permite llevar un registro y analizar los inconvenientes que se presentan para así aplicar acciones de mejora a través de mecanismos como por ejemplo el marco de evaluación de sustentabilidad y la evaluación de sustentabilidad. A continuación, se puede ampliar dicha información: 
      figure.mb-5(data-aos="fade-right")
        .video
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Vm0MjwG7WYw?si=EmsUfD5RLRDgFyUa" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
