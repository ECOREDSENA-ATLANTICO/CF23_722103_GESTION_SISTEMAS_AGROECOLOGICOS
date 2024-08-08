<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Monitoreo y supervisión técnica del proceso de propagación vegetativa
      
      .row.align-items-center.mb-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema2/img_1.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p Como el monitoreo en los viveros de producción personal y/o comercial no se debe realizar solo durante la etapa de implementación, sino que también se debe llevar a cabo una supervisión de carácter técnico enfocado a la planta, específicamente durante los procedimientos de propagación vegetal, la normatividad cuenta lineamientos para estos procesos. 
            .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
              p.m-0 De acuerdo con la Resolución No.0780006 del 25/11/2009, el monitoreo y la supervisión técnica debe ser realizada por un profesional del área de conocimiento de ingeniería agrícola, agronomía, forestal, agroindustrial o demás profesiones que tenga la competencia para realizar actividades de manejo fitosanitario y producción de plantas de viveros, siendo contratado directamente por el vivero como asistente técnico y/o según corresponda la funcionalidad del mismo. 
                
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.my-3.order-2.order-lg-1
          .cajon.color-acento-botones.p-3.p-sm-4.p-md-5
            p.mb-0 Además, la autoridad fitosanitaria encargada de supervisar el cumplimiento a la normatividad en los procesos de propagación del material vegetal y la documentación requerida será el Instituto Colombiano Agropecuario (ICA), quien, a través de visitas de inspección, realiza una descripción del estado del vivero, constancia, compromisos y los plazos que el titular del registro o propietario del vivero debe cumplir. (ICA,2020).
        .col-lg-4.order-1.order-lg-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema2/img_2.png', alt='')
             
      .row.justify-content-center.align-items-center.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Siendo importante, durante el proceso de propagación, se debe realizar un monitoreo constante desde el inicio hasta el final del crecimiento de las plantas que permita determinar los niveles de desarrollo en cada uno de sus factores que involucran el estado de la planta y la productividad que obtendrá al ser plantada. Como, por ejemplo:

      .tarjeta.bg_grad-02.p-3.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")

          .row.justify-content-center.align-items-star.p-3
            .col-md-7.mb-4.mb-md-0
              h4.p-3 Porcentaje de Enraizamiento o Sobrevivencia
              p.p-3.mb-0 Esta evaluación será realizada a las plantas de una única especie, las cuales obtuvieron las mismas condiciones climáticas, nutricionales y empaque. Según Villegas Espinoza, J. P. (2016), el porcentaje de enraizamiento o sobrevivencia se determina dividiendo la cantidad de plantas en las que se apreciaba sus raíces saliendo de la bolsa o jiffy, entre la totalidad de las plantas propagadas, multiplicando ese dato por 100.
           
              figure
                img.img-t.m-auto.w-80(src='@/assets/curso/images/tema2/img_30.svg'  alt='')


            .col-md-5
              figure
                img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_4.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star.p-3
            .col-md-4.mb-4.mb-md-0
              h4.p-3 Presencia de Plagas y Enfermedades 
              p.p-3.mb-2 Según Acosta, N. R. (2018) La presencia de plagas y enfermedades es evaluada a través de indicadores como se relaciona a continuación en el numeral.
              ol.lista-ol.p-3
                li 
                  span.text-bold 1. 
                  | Incidencia (I)
                li 
                  span.text-bold 2. 
                  | Severidad (S)

            .col-md-7
              figure
                img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_5.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4.p-3 Incidencia (I)
              p.p-3.mb-3 Hace referencia al porcentaje de individuos (planta o parte de la planta) que presentan una enfermedad respecto al total, es decir, se evalúa la ausencia o presencia de enfermedad más no el nivel de esta.

              figure
                img.p-3.w-100.img-t.m-auto(src='@/assets/curso/images/tema2/img_31.svg', alt='Texto que describa la imagen')

                
            .col-md-7
              figure
                img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_6.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4.p-3 Severidad (S)
                p.p-3.mb-3 La severidad permite evaluar el nivel de la enfermedad que impacta la planta, el cual se determina a través de un porcentaje entre 0 y 100 de la superficie de la parte de la planta enferma o afectada.

             
                figure
                  img.p-3.w-100.img-t.m-auto(src='@/assets/curso/images/tema2/img_32.svg', alt='Texto que describa la imagen')

            .col-md-7
              figure
                img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_7.png', alt='Texto que describa la imagen')

      p.mx-5 Ahora bien, es de recordar que, durante el monitoreo, se deben adoptar las medidas necesarias y las recomendaciones establecidas por la normatividad referentes a fitosanidad, con el objetivo de proteger el área de propagación vegetal de la contaminación, de las enfermedades o plagas evidenciadas en otras áreas; y conlleven a un incremento de afectación en otros procesos.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2 
          figure
            img.img-t.m-auto.w-50(src='@/assets/curso/images/tema2/img_8.svg', alt='')
        .col-lg-8.my-3
          p.m-0 Así mismo, los abonos y fertilizantes empleados deben ser los adecuados para la necesidad que presenta la planta, su medida y método de aplicación, deberá ser la correcta para lograr obtener el componente nutricional que se requiere; igualmente la mano de obra empleada deberá ser realizada con elementos de protección personal y la herramienta necesaria, según las condiciones y tipos de propagación que presente el vivero y/o área del productor. 
      
      Separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1  Monitoreo de buenas prácticas agrícolas
                            
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.order-2.order-lg-1
          .cajon.color-acento-botones.p-3.p-sm-4.p-md-5
            p.mb-0 Las Buenas Prácticas Agrícolas (BPA), son un conjunto de principios, normas y recomendaciones técnicas aplicables a la producción, procesamiento y transporte de plantas y alimentos, orientados a cuidar la salud humana, proteger al medio ambiente y mejorar las condiciones de los trabajadores y su familia; permitiendo así disfrutar de un ambiente sostenible. 
        .col-lg-3.my-3.order-1.order-lg-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema2/img_9.png', alt='')

      .row.justify-content-center.align-items-center.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Con la implementación de las buenas prácticas agrícolas (BPA), se promueve hacer las cosas bien y dar garantía de ello, debido a que estas están enfocadas a la obtención de productos seguros y de calidad, producidos de manera sostenible, logrando beneficiar no solo a los agricultores y sus familias, sino que también a los consumidores y la población en general, por medio de actividades direccionadas a cuatro sectores o elementos que son la seguridad de las personas, el medio ambiente, la inocuidad de los alimentos y el bienestar animal.

      p.mb-3 Estas prácticas agrícolas promueven condiciones que aportan al cuidado, preservación del medio ambiente, bienestar animal y seguridad de las personas, como se comparte a continuación: 

      TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="Seguridad de las personas")
          .row
            .col-md-6.mb-4.mb-md-0
              h3.p-4 Seguridad de las personas
              ol.lista-ol.p-3
                li 
                  span.text-bold 1. 
                  | Mejorar las condiciones de los trabajadores y los consumidores. 
                li 
                  span.text-bold 2. 
                  | Mejorar el bienestar de la Familia Agrícola.
                li 
                  span.text-bold 3. 
                  | Mejorar la seguridad alimentaria. 
            .col-md-6
              figure
                img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_11.png', alt='Texto que describa la imagen')
        .py-3.py-md-4(titulo="Medio ambiente ")
          .row
            .col-md-6.mb-4.mb-md-0
              h3.p-4 Medio ambiente 
              ol.lista-ol.p-3
                li 
                  span.text-bold 1. 
                  | No contaminar aguas y suelos.
                li 
                  span.text-bold 2. 
                  | Manejo racional de agroquímicos.
                li 
                  span.text-bold 3. 
                  | Ciudad de la biodiversidad.
            .col-md-6
              figure
                img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_12.png', alt='Texto que describa la imagen')
        .py-3.py-md-4(titulo="Inocuidad alimentaria ")
          .row
            .col-md-6.mb-4.mb-md-0
              h3.p-4 Inocuidad alimentaria 
              ol.lista-ol.p-3
                li 
                  span.text-bold 1. 
                  | Alimentos sanos, no contaminados y de mayor calidad para mejorar la nutrición y alimentación. 
            .col-md-6
              figure
                img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_13.png', alt='Texto que describa la imagen')
        .py-3.py-md-4(titulo="Bienestar animal ")
          .row
            .col-md-6.mb-4.mb-md-0
              h3.p-4 Bienestar animal 
              ol.lista-ol.p-3
                li 
                  span.text-bold 1. 
                  | Cuidado de animales
                li 
                  span.text-bold 2. 
                  | Alimentación adecuada 
            .col-md-6
              figure
                img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_14.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mb-5(style="background: #DEE4F0")
        .col-lg-8.p-5.order-2.order-lg-1
          p Para lo cual, como lo indica Rombouts & Rivera (2014), se hace necesario y se exige la implementación de procedimientos de trazabilidad, de registro y gestión de solicitudes y peticiones, estándares y procedimientos de calidad en la cadena de producción, además de acciones de mejora que permitan alcanzar la eficiencia, productividad, sostenibilidad ambiental, y responsabilidad social.
        .col-lg-4.p-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/images/tema2/img_15.png', alt='')

      p.mb-3 Dado a lo anterior, algunas de las buenas prácticas que podrán ser identificadas y evaluadas en los monitoreos donde se lleva a cabo los procesos de propagación del material vegetal, son las siguientes:
      
      .bg--img_03
        .row.justify-content-center.mb-1
          .col-lg-12
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Protección a trabajadores")
                .col-3  
                  figure
                    img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_16.png', alt='Texto que describa la imagen')
                .col-lg-9
                  p.mb-0 Todos los trabajadores, deberán conocer el manejo adecuado de maquinarias, agroquímicos y fertilizantes, así también primeros auxilios y atención médica al momento de evidenciar un accidente en sus labores. Además, deben contar con elementos de protección personal o individual y el botiquín para heridas mínimas.

              .row(titulo="Medidas de higiene")
                .col-3  
                  figure
                    img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_17.png', alt='Texto que describa la imagen')
                .col-lg-9
                  p.mb-0 Mantener un buen aseo del lugar, evitando residuos sólidos y líquidos en las áreas de propagación y de acceso a personas, lavado de manos por parte del personal, cuando exista la evidencia de enfermedades contagiosas evitar estar en contacto con los procesos de propagación y demás personas del vivero.

              .row(titulo="Ahorro y uso del agua")
                .col-lg-3.mb-3  
                  figure
                    img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_18.png', alt='Texto que describa la imagen')
                .col-lg-9
                  p.mb-0 Se debe realizar una planificación del riego para evitar un exceso o una insuficiencia del agua en las plantas, en función de que no afecte el estado fenológico de la planta.	 

              .row(titulo="Contaminación de agua")
                .col-lg-3.mb-3  
                  figure
                    img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_16.png', alt='Texto que describa la imagen')
                .col-lg-9
                  p.mb-0 El predio debe estar libre de basuras, papeles, plásticos y envases vacíos que puedan llegar a fuentes hídricas.
                  
              .row(titulo="Bodega de insumos")
                .col-lg-3.mb-3  
                  figure
                    img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_19.png', alt='Texto que describa la imagen')
                .col-lg-9
                  p.mb-0 Debe existir un lugar previamente señalizado donde se guarden los insumos como agroquímicos y fertilizantes, los cuales deben estar debidamente separados y aislados de las semillas, plantas, forrajes, productos cosechados.
                  
              .row(titulo="Clasificación de residuos sólidos")
                .col-lg-3  
                  figure
                    img.img-t.m-auto.w-75(src='@/assets/curso/images/tema2/img_20.png', alt='Texto que describa la imagen')
                .col-9
                  p.mb-0 Los residuos generados por la propagación del material vegetal y demás actividades, deberán ser clasificados según la resolución 2184 de 2019, entre orgánicos, aprovechables y no aprovechables, con el fin de darles su respectivo manejo.
                      
      p.mb-5 Teniendo presente lo anterior, cabe mencionar como desde la resolución 2184 de 2019 se indica los parámetros para realizar la separación de residuos en la fuente, con un color específico (código de colores; blanco, negro y verde), para los contenedores de basura, canecas de reciclaje y bolsas que se utilicen. Así:

      .row.justify-content-center 
        .col-lg-10
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img.img-t.m-auto.w-80(src='@/assets/curso/images/tema2/img_29.svg'  alt='')

            .tarjeta.color-acento-botones.p-3(x="47%" y="2%" numero="+")
              .h5.mb-2 Residuos aprovechables
              p Son depositados en las canecas con color blanco, con el fin de ser aprovechados en otras actividades y/o organizaciones sin ánimo de lucro que busca obtener beneficios económicos, salud o educación con el reciclaje de estos. 

            .tarjeta.color-acento-botones.p-3(x="100.6%" y="90%" numero="+")
              .h5.mb-2 Residuos orgánicos
              p Son depositados en las canecas con color verde y son separados debido a su componente descomponedor para ser entregado a disposición final de residuos o aprovechamiento a través de abonos orgánicos, lixiviados. Entre los cuales se encuentran (residuos de frutas y verduras, hojarasca y restos vegetales).

            .tarjeta.color-acento-botones.p-3(x="4%" y="92%" numero="+")
              .h5.mb-2 Residuos no Aprovechables
              p Son depositados en las canecas con color negro y son definidos como agentes contaminantes de que no pueden recibir otro uso. Ejemplo (residuos de baños, envoltura de alimentos no plásticos, colillas de cigarrillo)
          
      
      Separador
        
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.2 Documentación
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-3
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_22.svg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En los procesos de monitoreo y supervisión, juegan un papel importante la documentación, la cual está relacionada con la que exige la normatividad y entidades que ejercen control (externa) para la obtención de registros, constancias o licencias obligatorias para el funcionamiento y desarrollo de actividades propias de la propagación vegetal.
        
        p.m-1.text-center Por tanto, dentro de los factores que afectan la calidad del material vegetal, se encuentran: 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2 
          figure
            img.img-t.m-auto.w-50(src='@/assets/curso/images/tema2/img_25.svg', alt='')
        .col-lg-8.my-3
          ol.lista-ol
            li 
              span.text-bold 1. 
              | Registro ICA: corresponde a un acto administrativo por el cual el ICA reconoce el cumplimiento de los requisitos, condiciones y procedimientos exigidos para realizar la actividad como productor y/o comercializador de material vegetal de propagación a través de vivero o huertos básicos de productores (ICA,2020)
            li 
              span.text-bold 2. 
              | Constancia vegetal: documento por medio del cual se certifica la calidad sanitaria, física, fisiológica y genética de uno o varios lotes de material vegetal de propagación. (ICA,2020)
            li 
              span.text-bold 3. 
              | Licencia fitosanitaria: documento oficial expedido por el ICA o quien éste delegue, mediante el cual se autoriza la movilización interna de material vegetal dentro del territorio nacional, cuando las razones de índole sanitaria así lo exijan. (ICA,2020)
           
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.mb-3
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_23.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Pero, de igual manera, existen diferentes actividades que se realicen día a día (internamente), que son necesarias registrar para ejercer un monitoreo en la propagación del material vegetal, las cuales podrán ser diseñadas de acuerdo a la necesidad y procesos que se llevan a cabo en el huerto básico de productores y/o viveros.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2 
          figure
            img.img-t.m-auto.w-50(src='@/assets/curso/images/tema2/img_24.svg', alt='')
        .col-lg-8.mt-3
          ol.lista-ol
            li 
              span.text-bold - 
              | Bitácora de actividades: Las bitácoras son utilizadas para el registro de las actividades realizadas, las cuales nos permiten conocer las acciones realizadas con el material vegetal con el fin de realizar seguimiento y control a las novedades presentadas. 
    
      .row.justify-content-center.align-items-center.mb-5
        .tarjeta.tarjeta--blanca.p-4.col-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1 
            span  Ejemplo de bitácora de actividades diarias  

        .tabla-b.col-12
          .tabla.color_titulo_tabla
            h4.mb-0 Bitácora de actividades diarias
          table.small
            caption Nota. Sena (2022).
            thead
              tr.jumbotron-14
                th Fecha
                th Identificación del área 
                th Actividad
                th Responsable
                th Observaciones
                th Firma
            tbody
              tr
                td 15/09/2022
                td Área de crecimiento
                td Verificación de plántulas y estado de presencia de hongos en las hojas
                td Andrea Vidales
                td Verificar la cantidad de agua en el riego diario con el fin de evitar sobrecargas a las plantas.
                td             
                
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2 
          figure
            img.img-t.m-auto.w-50(src='@/assets/curso/images/tema2/img_24.svg', alt='')
        .col-lg-8.mt-3
          ol.lista-ol
            li 
              span.text-bold - 
              |	Registro de siembra: La propagación del material vegetal debe ser supervisado, de acuerdo a los tiempos establecidos y condiciones necesarias para cada planta, llevar a cabo el registro de siembra permite evidenciar las novedades o modificaciones necesarias con el fin de que su crecimiento sea exitoso. 
        
      .row.justify-content-center.align-items-center.mb-5
        .tarjeta.tarjeta--blanca.p-4.col-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2 
            span  Ejemplo de registro de siembras 

        .tabla-b.col-12
          .tabla.color_titulo_tabla
            h4.mb-0 Registro de siembra
          table.small
            caption Nota. Sena (2022).
            thead
              tr.jumbotron-14
                th Fecha
                th Área de propagación
                th No. Lote
                th Variedad
                th No. Plantas
                th Observaciones
                th Responsable
            tbody
              tr
                td 13/09/2022
                td Cama No.1
                td 202210456C1402
                td Suculenta Ramillete
                td 30
                td Se realiza siembra sin novedad
                td Fernando Ramírez
              tr
                td 16/09/2022
                td Cama No.3
                td 20220408SC1507
                td Suculenta Roseta
                td 30
                td Se evidenció que se encontraban con bastante presencia de humedad
                td Milena Vásquez

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2 
          figure
            img.img-t.m-auto.w-50(src='@/assets/curso/images/tema2/img_24.svg', alt='')
        .col-lg-8.mt-3
          ol.lista-ol
            li 
              span.text-bold -  
              |	Registro de abonos y fertilizantes: Los requerimientos nutricionales de la planta, son evidenciados en su crecimiento, color y textura de las hojas, las cuales nos permiten identificar sus necesidades y enfermedades que está desarrollando. 
                
      .row.justify-content-center.align-items-center.mb-5
        .tarjeta.tarjeta--blanca.p-4.col-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3
            span  Ejemplo de Registro de abonos y fertilizantes

        .tabla-b.col-12
          .tabla.color_titulo_tabla
            h4.mb-0 Registro de abonos y fertilizantes
          table.small
            caption Nota. Sena (2022).
            thead
              tr.jumbotron-14
                th Fecha
                th Área de propagación
                th Producto
                th Inorgánico (x)
                th Orgánico (x)
                th Dosis aplicada %, cc, ml, cm, lt
                th Responsable
                th Observaciones
            tbody
              tr
                td 22/09/2022
                td Cama No.3
                td Caldo Sulfocalcico
                td X
                td 
                td 3 litros
                td Andrea Vidales
                td Se realizó en horas de la tarde, sin presencia de luz solar.
              tr
                td 24/09/2022
                td Cama No.6
                td Pyraclostrobin
                td 
                td X
                td 10 cc
                td Fernando Ramírez
                td Plantan con presencia de Acaro en plantas de crecimiento.
      
      p.mb-3 Por tanto, cada uno de los formatos mencionados, son adaptados de acuerdo a cada una de las diferentes actividades que se realicen día a día (internamente), que son necesarias registrar para ejercer un monitoreo en la propagación del material vegetal, las cuales podrán ser diseñadas según la necesidad y procesos que se llevan a cabo en el huerto básico de productores y/o viveros.

        
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    isZoomed: false,
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
