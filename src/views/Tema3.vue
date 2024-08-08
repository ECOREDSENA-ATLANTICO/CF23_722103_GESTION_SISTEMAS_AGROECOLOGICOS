<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 3
          h1 Acciones de mejora para el monitoreo de la propagación vegetal
        
        .row.align-items-center.mb-4
          .col-lg-8(data-aos="fade-left")
            p Las acciones de mejora son establecidas, de acuerdo con las acciones correctivas o preventivas, identificadas a través de inconformidades o áreas potenciales de una actividad; que llevan a fortalecer las áreas de oportunidad para brindar un mejor producto.
            .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
              p.m-0 En las actividades de monitoreo se hace necesario identificar, analizar y generar acciones de mejora, que le permitan avanzar en cada uno de los procesos donde se evidencian debilidades. Teniendo por ejemplo que algunos de los métodos para evaluar los niveles de sustentabilidad en las actividades de propagación del material vegetal son el marco de evaluación de sustentabilidad con su respectivo monitoreo y evaluación de la sustentabilidad.
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema3/img_1.png', alt='')

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_2.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                span.text-bold Marco de evaluación de sustentabilidad <br>
                p.mb-0 El Marco para la Evaluación de Sistemas de Manejo incorporando Indicadores de Sustentabilidad (MESMIS), constituye a una herramienta innovadora para encarar varios de los interrogantes planteados en el área de evaluaciones de sustentabilidad, el cual presenta una estructura flexible para adaptarse a diferentes niveles de información y capacidades técnicas disponibles localmente, e implica un proceso de evaluación participativa por medio de dinámicas grupales o individuales, con una constante retroalimentación.
      
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .tarjeta-avatar-b.mb-3.align-items-center
                .tarjeta-avatar-b__img
                  img.img-t.m-auto.mt-3(src='@/assets/curso/images/tema3/img_3.svg', alt='', width="150px", height="150px")
                .tarjeta.color-secundario.shadow-sm
                  p.p-3.p-sm-4.p-md-5 Ahora bien, los sistemas de manejo sustentables son aquellos que permanecen cambiando, los cuales deben tener la capacidad de ser productivos, de autorregularse y de transformarse, sin perder su funcionalidad; a su vez estas capacidades podrán ser analizadas mediante los atributos o propiedades sistémicas fundamentales que son productividad, resiliencia, confiabilidad, estabilidad, autogestión, equidad y adaptabilidad. (Astier, M., Masera, O. R., & Galván-Miyoshi, Y. 2008. p17-18).
          
        .row.justify-content-center.align-items-center.mb-5
          p.mb-4 Es así como este análisis constante aporta a la evaluación de sustentabilidad, la cual permite que, por medio de la identificación de fortalezas y debilidades, que permite realizar un análisis de los factores que pueden llegar a incidir en la adecuada sustentabilidad de los procesos de propagación. 

          .col-lg-2.mb-4
            figure
              img.img-t.m-auto.w-50(src='@/assets/curso/images/tema3/img_4.svg', alt='')
          .col-lg-8.mb-4
            p.m-0.mb-3 Algunas de las preguntas clave que permiten un diagnóstico son: 
            ol.lista-ol
              li 
                span.text-bold 1. 
                |	¿En qué áreas la propagación presenta deficiencia en su desarrollo y crecimiento?
              li 
                span.text-bold 2. 
                |	¿En qué etapa de propagación la planta alcanza su mayor éxito de desarrollo?
          
          p.mb-4 O por medio de la selección de indicadores que sean particulares a los procesos de los que forman parte, ya que existe indicadores apropiados para ciertos sistemas pueden ser inapropiados para otros, lo que genera que no exista o se cuente con una lista de indicadores universales (Bakkes et al.,1994). 

          .tarjeta.tarjeta--blanca.p-4.col-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4 
              span  Ejemplo de selección de indicadores
  
          .tabla-b.col-10
            table
              caption Nota. Sena (2022).
              thead
                tr
                  th.text-center.jumbotron-14 Problemática
                  th.text-center.jumbotron-14 Indicador
              tbody
                tr
                  td Aumento de los hongos en las plantas de propagación. 
                  td Seguimiento al riego suministrado a las plantas que presentan hongo
                tr
                  td Vencimiento de productos fertilizantes
                  td Cantidad necesaria de fertilizantes x mes

        .row.justify-content-center.align-items-center.mb-5
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_5.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Teniendo que los indicadores serán definidos de acuerdo a las necesidades y debilidades identificadas por los actores de los procesos económicos, ambientales y sociales; y, el proceso de medición y monitoreo es definido de acuerdo a las variables más adaptables para cada actividad teniendo en cuenta factores como tiempo, análisis de información y/o aplicación de ciertas variables que permita generar un avance direccionado a la sustentabilidad. Para ello observe el siguiente ejemplo de evaluación de sustentabilidad a un vivero de plantas ornamentales de tipo comercial, observe el siguiente ejemplo de evaluación de sustentabilidad a un vivero de plantas ornamentales de tipo comercial.

        .row.justify-content-center.align-items-center.mb-5
          .tarjeta.tarjeta--blanca.p-4.col-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 5 
              span  Ejemplo de evaluación de sustentabilidad a un vivero de plantas
  
          .tabla-b.col-10
            table.text-center
              caption Nota. Sena (2022).
              thead
                tr
                  th.jumbotron-13 Atributos
                  th.jumbotron-17.texto-secundario Fortalezas y debilidades
                  th.jumbotron-13 Indicadores
                  th.jumbotron-17.texto-secundario Valor
              tbody
                tr
                  td.text-bold Productividad
                  td.text-left Incremento de ventas en plantas de ornamentales
                  td 
                    ol.lista-ol
                      li 
                        span.text-bold - 
                        |	Rendimiento no. Plantas x mes
                      li 
                        span.text-bold - 
                        |	Ingresos (neto)($semestrales)
                      li 
                        span.text-bold -
                        |	Costos de producción
                  td Bajo
                tr
                  td.text-bold Estabilidad, resiliencia, confiabilidad
                  td 
                    ol.lista-ol
                      li 
                        span.text-bold - 
                        |	Alto uso de agroquímicos
                      li 
                        span.text-bold - 
                        |	Bajo uso de fertilizantes orgánicos
                  td.text-left Crecimiento de plantas con agroquímicos vs fertilizantes orgánicos
                  td Medio
                tr
                  td.text-bold Equidad
                  td.text-left Mala distribución de costos y ventas
                  td.text-left Capacitación de manejo de contabilidad y finanzas
                  td Alto
                tr
                  td.text-bold Adaptabilidad
                  td 
                    ol.lista-ol
                      li 
                        span.text-bold - 
                        |	Disminución de la mano de obra
                      li 
                        span.text-bold - 
                        |	Pérdida de prácticas ancestrales
                  td.text-left Capacitación de trabajadores con prácticas ancestrales
                  td Alto
                tr
                  td.text-bold Autogestión
                  td.text-left Alta dependencia de insumos externos
                  td.text-left Costos de insumos externos por año
                  td Medio
                 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .tarjeta-avatar-b.mb-3.align-items-center
                .tarjeta-avatar-b__img
                  img.img-t.m-auto.mt-3(src='@/assets/curso/images/tema3/img_7.svg', alt='', width="150px", height="150px")
                .tarjeta.color-secundario.shadow-sm
                  p.p-3.p-sm-4.p-md-5 Por tanto, en lo referente a la evaluación de sustentabilidad, se tiene que, al conocer las debilidades y fortalezas de cada atributo, definido por el marco de evaluación MESMIS; se logra analizar e identificar la manera correcta de realizar un monitoreo de esa debilidad.  Dado a esto, se definen los indicadores, necesarios para dar un valor de importancia según la actividad del vivero o producto. Y para el caso específico del proceso de propagación de material vegetal, la evaluación de sustentabilidad se puede realizar, por ejemplo, a un vivero de plantas ornamentales de tipo comercial, encontrando que presenta algunas desventajas en las etapas de crecimiento de las plantas y pérdidas económicas.
          
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
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
