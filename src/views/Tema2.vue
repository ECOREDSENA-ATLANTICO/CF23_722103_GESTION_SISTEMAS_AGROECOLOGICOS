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
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p Como el monitoreo en los viveros de producción personal y/o comercial no se debe realizar solo durante la etapa de implementación, sino que también se debe llevar a cabo una supervisión de carácter técnico enfocado a la planta, específicamente durante los procedimientos de propagación vegetal, la normatividad cuenta lineamientos para estos procesos. 
          .row
            .cajon.color-secundario.p-4.ps-5.bg_18.mb-4.mb-lg-0.col-8
              p.m-0 De acuerdo con la Resolución No.0780006 del 25/11/2009, el monitoreo y la supervisión técnica debe ser realizada por un profesional del área de conocimiento de ingeniería agrícola, agronomía, forestal, agroindustrial o demás profesiones que tenga la competencia para realizar actividades de manejo fitosanitario y producción de plantas de viveros, siendo contratado directamente por el vivero como asistente técnico y/o según corresponda la funcionalidad del mismo. 
            .col-4 
              figure
                img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
                
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Además, la autoridad fitosanitaria encargada de supervisar el cumplimiento a la normatividad en los procesos de propagación del material vegetal y la documentación requerida será el Instituto Colombiano Agropecuario (ICA), quien, a través de visitas de inspección, realiza una descripción del estado del vivero, constancia, compromisos y los plazos que el titular del registro o propietario del vivero debe cumplir. (ICA,2020).
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__texto.p-4.izquierda_70
              p.mb-0 Siendo importante, durante el proceso de propagación, se debe realizar un monitoreo constante desde el inicio hasta el final del crecimiento de las plantas que permita determinar los niveles de desarrollo en cada uno de sus factores que involucran el estado de la planta y la productividad que obtendrá al ser plantada. Como, por ejemplo:
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`, 'left':'70%'}"
            )
      
      .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Bovinos y bufalinos
              p.mb-4 Se caracterizan por ser rumiantes y duran entre 9 y 11 horas en pastoreo continúo organizados en grupos en donde predomina la jerarquía y cualquier cambio los altera. Su comportamiento depende de la edad, etapa sexual, crías o lugar de estadía pues en hacinamiento el estrés produce cambios de conducta. 
              p.mb-4 Su audición es aguda y sensible por ello se recomienda evitar ruidos a no ser que se utilice música que oculte cualquier ruido extraño dentro de las áreas de trabajo. Tienen una visión frontal binocular de 360º y su compartimiento es rutinario.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Equinos
              p.mb-4 Se caracterizan por una vista aguda y visión amplia, es animal de manada y súper activo al medio donde su conformación está regida por macho alfa y subordinados. La alimentación es selectiva y solo duermen un promedio de 3 horas, en estado confinado por lo que se recomiendan los corrales en forma redonda. 
              p.mb-4 En altos niveles de estrés el animal tiende a presentar desmayos entonces no se recomienda su manejo con animales como perros ni tábanos. Quien lo maneje no se le recomienda hacer movimientos repentinos pues alerta al animal por lo que lo mejor es vendar los ojos o transportarlo con la manada.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Porcinos
              p.mb-3 Muy sensible a los sonidos, tienen vista deficiente y las temperaturas altas provocan altos niveles de estrés, muy agresivos cuando se mezclan con animales de otros grupos, por motivos de hacinamientos muestran comportamientos de canibalismo y se recomienda buena luz en los lugares de alojamiento.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Ovinos/caprinos y aves de corral
              p.mb-3 Los primero son poligástricos, animales sociables, pero son muy territoriales y pueden reconocer rostros, olores y sabores durante años, en el caso de las aves son jerárquicas, en hacinamiento tienen a ser caníbales y se caracterizan por ser mono gástrico y carecer de olfato y gusto siendo animales diurnos dependientes del fotoperiodo (luz).

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mb-5
        .col-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
        .col-8
          p.m-0 Así mismo, los abonos y fertilizantes empleados deben ser los adecuados para la necesidad que presenta la planta, su medida y método de aplicación, deberá ser la correcta para lograr obtener el componente nutricional que se requiere; igualmente la mano de obra empleada deberá ser realizada con elementos de protección personal y la herramienta necesaria, según las condiciones y tipos de propagación que presente el vivero y/o área del productor. 
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1  Monitoreo de buenas prácticas agrícolas
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__texto.p-4.izquierda_70.color-transparente
              p.mb-0 Las Buenas Prácticas Agrícolas (BPA), son un conjunto de principios, normas y recomendaciones técnicas aplicables a la producción, procesamiento y transporte de plantas y alimentos, orientados a cuidar la salud humana, proteger al medio ambiente y mejorar las condiciones de los trabajadores y su familia; permitiendo así disfrutar de un ambiente sostenible. 
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`, 'left':'70%'}"
            )
                          
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4.color-transparente
              p.mb-0 Con la implementación de las buenas prácticas agrícolas (BPA), se promueve hacer las cosas bien y dar garantía de ello, debido a que estas están enfocadas a la obtención de productos seguros y de calidad, producidos de manera sostenible, logrando beneficiar no solo a los agricultores y sus familias, sino que también a los consumidores y la población en general, por medio de actividades direccionadas a cuatro sectores o elementos que son la seguridad de las personas, el medio ambiente, la inocuidad de los alimentos y el bienestar animal.

      p.mb-3 Estas prácticas agrícolas promueven condiciones que aportan al cuidado, preservación del medio ambientes, bienestar animal y seguridad de las personas, como se comparte a continuación: 

      TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="Zona de huida o de fuga")
          .row
            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
            .col-md-5.mb-4.mb-md-0
              p Es la manera más adecuada para movilizar cualquier animal de producción dado que es el espacio que tiene para moverse y si un operario lo interrumpe tiende a moverse y si sale de ahí de inmediato se detiene. Este espacio depende de la docilidad del animal y el ángulo de visibilidad hacia la persona que se aproxima, por lo que esta zona de huida se agranda cuando se viene de frente y se minimiza cuando está dentro de un brete de manejo donde cualquier circunstancia de excitación provocará que esta zona aumente de tamaño. 
              p Una persona debe estar lo suficientemente cerca del ganado para lograr que éste camine, pero no demasiado dado que puede provocar el pánico y huida. Finalmente tenga en cuenta que si es un animal manso puede realizar el manejo con una cuerda o bozal pero jamás usar caninos. 
            
        .py-3.py-md-4(titulo="Punto de balance")
          .row
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
            .col-md-5
              p Este es un punto determinante pues la persona ubicada casi atrás genera que el animal camine, pero si se ubica hacia delante el animal retrocederá. En el caso de los bovinos y equinos no se recomienda hacerse detrás en el punto ciego pues la reacción es la de patear y es mejor manejarlos en grupo que individual.
              p Otro principio es que los animales de pastoreo, solos o en grupo, se moverán hacia adelante cuando un vaquero pasa rápidamente su punto de balance de la cruz en dirección contraria a la deseada para el movimiento. Los movimientos descritos en zona del trabajador sirven para inducir al ganado a entrar a una manga reduciendo notablemente o eliminando el uso de la picana eléctrica.
  
        .py-3.py-md-4(titulo="Punto de balance")
          .row
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
            .col-md-5
              p Este es un punto determinante pues la persona ubicada casi atrás genera que el animal camine, pero si se ubica hacia delante el animal retrocederá. En el caso de los bovinos y equinos no se recomienda hacerse detrás en el punto ciego pues la reacción es la de patear y es mejor manejarlos en grupo que individual.
              p Otro principio es que los animales de pastoreo, solos o en grupo, se moverán hacia adelante cuando un vaquero pasa rápidamente su punto de balance de la cruz en dirección contraria a la deseada para el movimiento. Los movimientos descritos en zona del trabajador sirven para inducir al ganado a entrar a una manga reduciendo notablemente o eliminando el uso de la picana eléctrica.
  
        .py-3.py-md-4(titulo="Punto de balance")
          .row
            .col-md-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
            .col-md-5
              p Este es un punto determinante pues la persona ubicada casi atrás genera que el animal camine, pero si se ubica hacia delante el animal retrocederá. En el caso de los bovinos y equinos no se recomienda hacerse detrás en el punto ciego pues la reacción es la de patear y es mejor manejarlos en grupo que individual.
              p Otro principio es que los animales de pastoreo, solos o en grupo, se moverán hacia adelante cuando un vaquero pasa rápidamente su punto de balance de la cruz en dirección contraria a la deseada para el movimiento. Los movimientos descritos en zona del trabajador sirven para inducir al ganado a entrar a una manga reduciendo notablemente o eliminando el uso de la picana eléctrica.
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__texto.p-4.izquierda_70.color-transparente
              p.mb-0 Para lo cual, como lo indica Rombouts & Rivera (2014), se hace necesario y se exige la implementación de procedimientos de trazabilidad, de registro y gestión de solicitudes y peticiones, estándares y procedimientos de calidad en la cadena de producción, además de acciones de mejora que permitan alcanzar la eficiencia, productividad, sostenibilidad ambiental, y responsabilidad social.
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`, 'left':'70%'}"
            )
  
      p.mb-3 Dado a lo anterior, algunas de las buenas prácticas que podrán ser identificadas y evaluadas en los monitoreos donde se lleva a cabo los procesos de propagación del material vegetal, son las siguientes:
      
      //- maps
      
      p.mb-5 Teniendo presente lo anterior, cabe mencionar como desde la resolución 2184 de 2019 se indica los parámetros para realizar la separación de residuos en la fuente, con un color especifico (código de colores; blanco, negro y verde), para los contenedores de basura, canecas de reciclaje y bolsas que se utilicen. Así:
  
      //- maps
  
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.2 Documentación
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-3
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En los procesos de monitoreo y supervisión, juegan un papel importante la documentación, la cual está relacionada con la que exige la normatividad y entidades que ejercen control (externa) para la obtención de registros, constancias o licencias obligatorias para el funcionamiento y desarrollo de actividades propias de la propagación vegetal.
        
        p.m-3 Por tanto, dentro de los factores que afectan la calidad del material vegetal, se encuentran: 

      .row.justify-content-center.align-items-center.mb-5
        .col-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
        .col-8
          ol.lista-ol
            li 
              span.text-bold 1. 
              | Registro ICA: Corresponde a un acto administrativo por el cual el ICA reconoce el cumplimiento de los requisitos, condiciones y procedimientos exigidos para realizar la actividad como productor y/o comercializador de material vegetal de propagación a través de vivero o huertos básicos de productores (ICA,2020)
            li 
              span.text-bold 2. 
              | ✔	Constancia Vegetal: Documento por medio del cual se certifica la calidad sanitaria, física, fisiológica y genética de uno o varios lotes de material vegetal de propagación. (ICA,2020)
            li 
              span.text-bold 3. 
              | ✔	Licencia Fitosanitaria: Documento oficial expedido por el ICA o quien éste delegue, mediante el cual se autoriza la movilización interna de material vegetal dentro del territorio nacional, cuando las razones de índole sanitaria así lo exijan. (ICA,2020)
           
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-3
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Pero, de igual manera, existen diferentes actividades que se realicen día a día (internamente), que son necesarias registrar para ejercer un monitoreo en la propagación del material vegetal, las cuales podrán ser diseñadas de acuerdo a la necesidad y procesos que se llevan a cabo en el huerto básico de productores y/o viveros.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
        .col-8
          ol.lista-ol
            li 
              span.text-bold 1. 
              | Bitácora de actividades: Las bitácoras son utilizadas para el registro de las actividades realizadas, las cuales nos permiten conocer las acciones realizadas con el material vegetal con el fin de realizar seguimiento y control a las novedades presentadas. 
    
      .row.justify-content-center.align-items-center.mb-5
        .tarjeta.tarjeta--blanca.p-4.col-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1 
            span  Ejemplo de bitácora de actividades diarias  

        .tabla-b.col-10
          .tabla.color_titulo_tabla
            h4.mb-0 Bitácora de actividades diarias
          table
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
        .col-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
        .col-8
          ol.lista-ol
            li 
              span.text-bold 1. 
              |	Registro de Siembra: La propagación del material vegetal debe ser supervisado, de acuerdo a los tiempos establecidos y condiciones necesarias para cada planta, llevar a cabo el registro de siembra permite evidenciar las novedades o modificaciones necesarias con el fin de que su crecimiento sea exitoso. 
        
      .row.justify-content-center.align-items-center.mb-5
        .tarjeta.tarjeta--blanca.p-4.col-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2 
            span  Ejemplo de registro de siembras 

        .tabla-b.col-10
          .tabla.color_titulo_tabla
            h4.mb-0 Registro de siembra
          table
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
                td Se evidencio que se encontraban con bastante presencia de humedad
                td Milena Vásquez

      .row.justify-content-center.align-items-center.mb-5
        .col-2 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.png', alt='')
        .col-8
          ol.lista-ol
            li 
              span.text-bold 1. 
              |	Registro de Abonos y Fertilizantes: Los requerimientos nutricionales de la planta, son evidenciados en su crecimiento, color y textura de las hojas, las cuales nos permiten identificar sus necesidades y enfermedades que está desarrollando. 
                
      .row.justify-content-center.align-items-center.mb-5
        .tarjeta.tarjeta--blanca.p-4.col-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3
            span  Ejemplo de Registro de Abonos y Fertilizantes

        .tabla-b.col-10
          .tabla.color_titulo_tabla
            h4.mb-0 Registro de abonos y fertilizantes
          table
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
