export default {
  global: {
    componenteFormativo: 'Monitoreo del proceso de propagación vegetal',
    descripcionCurso:
      'En el componente “Monitoreo del proceso de propagación vegetal.”, se abordarán temáticas relacionadas con la normatividad ambiental establecida para realizar el monitoreo a la propagación vegetal, según los parámetros correspondientes de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad ambiental vigente para la propagación vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Requerimientos en la Implementación de Viveros y Áreas de Propagación Vegetal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Calidad del Material Vegetal de Propagación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Monitoreo y supervisión técnica del proceso de propagación vegetativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Monitoreo de Buenas Prácticas Agrícolas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Documentación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Acciones de mejora para el monitoreo de la propagación vegetal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad ambiental vigente para la propagación vegetal',
      referencia:
        'Resolución No.0780006 del 25/11/2020, Centro Colombiano Agropecuario (ICA)',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/56d15d28-b186-498e-bc07-7a6fcf65fb2c/2020R78006.aspx',
    },
    {
      tema: '',
      referencia:
        'Agrocultivos TV (2021). Cómo calcular área foliar y porcentaje de severidad de una hoja',
      tipo: 'Video',
      descarga: 'https://youtu.be/MXXUbL4ykYk',
    },
    {
      tema: 'Acciones de mejora para el monitoreo de la propagación vegetal',
      referencia:
        'Sarandón, S. J., & Flores, C. C. (2014). Agroecología. Editorial de la Universidad Nacional de La Plata (EDULP). Facultad de Ciencias Agrarias y Forestales. ISBN: 978-950-34-1107-0 CAPÍTULO 14: Análisis y evaluación de agroecosistemas: construcción y aplicación de indicadores',
      tipo: 'Capítulo 14',
      descarga: 'http://sedici.unlp.edu.ar/handle/10915/37280',
    },
  ],
  glosario: [
    {
      termino: 'Almácigo',
      significado:
        'conjunto de plantas trasplantadas a bolsas llenas de sustrato (suelo y materia orgánica) y dispuestas adecuadamente para su mantenimiento durante la etapa de crecimiento.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de acciones y medidas y acciones que se deben tomar para evaluar, evitar, prevenir, mitigar, manejar o controlar los posibles riesgos y efectos directos o indirectos.',
    },
    {
      termino: 'Calidad',
      significado:
        'conjunto de atributos del material vegetal de propagación que involucra los factores genéticos, físicos, fisiológicos y sanitarios.',
    },
    {
      termino: 'Inspección',
      significado:
        'examen visual oficial de plantas, productos vegetales u otros artículos reglamentados para determinar si hay plagas o determinar el cumplimiento con las reglamentaciones fitosanitarias',
    },
    {
      termino: 'Lote',
      significado:
        'cantidad específica de semilla sexual o asexual, cuyo origen y calidad son uniformes; físicamente identificable con un número o con letra, correspondiente a un período de cosecha y procedencia.',
    },
    {
      termino: 'Sanidad Vegetal',
      significado:
        'conjunto de condiciones y acciones orientadas a la prevención, control y erradicación de plagas que afectan a las plantas, sus productos o subproductos.',
    },
    {
      termino: 'Vivero',
      significado:
        'conjunto de instalaciones que cumple con los criterios técnicos para producir, multiplicar y/o comercializar material vegetal de propagación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, N. R. (2018). Enfermedades en vivero forestal. Guía para la identificación de enfermedades fúngicas en vivero forestal y pautas para su manejo. Facultad de Ciencias Agrarias y Forestales UNLP',
      link: '',
    },
    {
      referencia:
        'Astier, M., Masera, O. R., & Galván-Miyoshi, Y. (2008). Evaluación de sustentabilidad: un enfoque dinámico y multidimensional (No. Sirsi) i9788461256419). Valencia: SEAE.',
      link: '',
    },
    {
      referencia:
        'Noriega, R. N., Fletes, I. O., Castillo, J. F. E., Magaña, A. P., & Miguez, S. E. R. (2008). La sustentabilidad de los sistemas agrícolas con pequeña irrigación. El caso de San Pablo Actipan. Ra Ximhai, 4(2), 139-163.',
      link: '',
    },
    {
      referencia:
        'FAO. (2012). Manual de Buenas Prácticas Agrícolas - para el Productor Hortofrutícola. 2° Edición. Oficina Regional para América Latina y el Caribe, Santiago de Chile (2012)',
      link: '',
    },
    {
      referencia:
        'Villegas Espinoza, J. P. (2016). Área foliar y período de enraizamiento para la propagación vegetativa de melina (Gmelina arborea Roxb.) en vivero, La Palma de Puerto Jiménez, Golfito.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yisela Andrea Vidales Vásquez',
          cargo: 'Experta Temática',
          centro:
            'Centro de la industria la empresa y los servicios- CIES - Regional Norte de Santander',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología  - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    // {
    //   titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
    //   autores: [
    //     {
    //       nombre: 'Nombre responsable',
    //       cargo: 'Diseñador de Contenidos Digitales',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //     {
    //       nombre: 'Nombre responsable',
    //       cargo: 'Desarrollador Fullstack',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //     {
    //       nombre: 'Nombre',
    //       cargo: 'Animador y Producción audiovisual',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //     {
    //       nombre: 'Nombre',
    //       cargo: 'Actividad Didáctica',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //   ],
    // },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
