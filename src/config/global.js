export default {
  global: {
    Name: 'Ubicación y ajuste de válvulas, accionamiento eje de levas',
    Description:
      'El componente formativo describe el funcionamiento y ajuste del sistema de válvulas y árbol de levas en motores de combustión interna. Explica los diferentes tipos de accionamiento del eje de levas y sus ventajas. También aborda la ubicación de válvulas y levas, así como la calibración y ajustes necesarios para un óptimo rendimiento del motor, incluyendo sistemas modernos de propulsión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        titulo: 'Accionamiento del eje de levas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Accionamiento del eje de levas por piñones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Accionamiento del eje levas por cadena metálica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Accionamiento del eje de levas por banda dentada',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagrama estándar y mejorado de apertura de las válvulas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diagrama estándar de apertura de las válvulas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diagrama mejorado de apertura de las válvulas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ubicación de las válvulas y el eje de levas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Válvulas y eje de levas en el bloque de cilindros',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Válvulas en la culata y eje de levas en el bloque de cilindros',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Válvulas en la culata y eje de levas sobre palanca basculante',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Válvulas en la culata y eje de levas debajo del balancín',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Válvulas en la culata y propulsión directa',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistema moderno de propulsión de válvulas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ajustes y graduación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Juego y calibración de válvulas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formas calibración de las válvulas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Calibración de las válvulas con tornillo y tuerca',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Calibración de las válvulas con excéntrica',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Calibración de las válvulas con apoyo regulable',
            hash: 't_5_5',
          },
        ],
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
        download: 'downloads/dist.pdf',
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
      tema: 'Accionamiento del eje de levas',
      referencia:
        'Repman22. (2021). <em>Todo Sobre el ARBOL DE LEVAS, CRUCE, ALZADA, POTENCIA Y MAS Leva</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5mE-rTCcgEU',
    },
  ],
  glosario: [
    {
      termino: 'Balancín',
      significado:
        'mecanismo que transmite el movimiento del árbol de levas a las válvulas del motor, permitiendo su apertura y cierre.',
    },
    {
      termino: 'Cigüeñal',
      significado:
        'eje que convierte el movimiento lineal de los pistones en un movimiento rotatorio, impulsando otros componentes del motor.',
    },
    {
      termino: 'Leva',
      significado:
        'componente del árbol de levas que presiona las válvulas a través de diferentes mecanismos, regulando su apertura y cierre.',
    },
    {
      termino: 'Sincronización',
      significado:
        'ajuste preciso de la relación entre el cigüeñal y el árbol de levas para garantizar un funcionamiento eficiente del motor.',
    },
    {
      termino: 'Taqué',
      significado:
        'elemento ubicado entre la leva y la varilla empujadora o la válvula, encargado de transmitir el movimiento generado por el árbol de levas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aficionados a la mecánica. (2016). Manual del sistema de distribución del motor. ',
      link:
        'https://aficionadosalamecanica.blogspot.com/2016/06/manual-del-sistema-de-distribucion-del.html',
    },
    {
      referencia:
        'Pro-Lean. <em>(2025). ¿Cuáles son los conceptos básicos de una válvula de automóvil? Una guía completa.</em>',
      link: 'https://proleantech.com/es/basics-of-a-car-valve/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
