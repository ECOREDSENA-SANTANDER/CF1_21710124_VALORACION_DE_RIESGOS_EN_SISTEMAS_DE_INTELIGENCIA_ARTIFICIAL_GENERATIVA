export default {
  global: {
    Name: 'Identificación de sistemas de inteligencia artificial generativa y sus factores de riesgo',
    Description:
      ' El componente Identificación de sistemas de inteligencia artificial generativa y sus factores de riesgo desarrolla capacidades para reconocer las características, componentes, actores y contexto de uso de estos sistemas, así como los principales factores que pueden generar riesgos en los procesos organizacionales. Promueve el análisis crítico de amenazas, vulnerabilidades y posibles consecuencias, mediante la aplicación de marcos de referencia y criterios de gestión del riesgo que favorecen un uso responsable, seguro y trazable de la inteligencia artificial generativa.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Fundamentos de inteligencia artificial generativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contexto organizacional y caracterización del sistema',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación y definición de los problemas en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Categorías de riesgo en inteligencia artificial generativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Referentes éticos y normativos',
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
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'información, recurso o elemento asociado que posee valor para una organización y que requiere protección frente a pérdida, alteración, exposición o uso no autorizado.',
    },
    {
      termino: 'Confabulación',
      significado:
        'generación de información falsa, incorrecta o no sustentada presentada por un sistema generativo de forma aparentemente coherente o plausible.',
    },
    {
      termino: 'Control',
      significado:
        'medida técnica, administrativa, organizacional o humana destinada a prevenir, detectar, reducir o corregir un riesgo.',
    },
    {
      termino: 'Datos sintéticos',
      significado:
        'información producida artificialmente con el propósito de representar características o patrones que pueden utilizarse en pruebas, simulaciones, análisis o entrenamiento.',
    },
    {
      termino: 'Dependencia tecnológica',
      significado:
        'relación mediante la cual el funcionamiento de un proceso depende de un proveedor, servicio, modelo, integración o infraestructura determinada.',
    },
    {
      termino: 'IA generativa',
      significado:
        'tipo de inteligencia artificial capaz de producir contenido como texto, imágenes, audio, video, código o datos a partir de entradas e instrucciones.',
    },
    {
      termino: 'Impacto',
      significado:
        'magnitud de las consecuencias que puede producir la materialización de un evento de riesgo.',
    },
    {
      termino: 'Instrucción o prompt',
      significado:
        'entrada utilizada para orientar el comportamiento o la respuesta de un sistema generativo.',
    },
    {
      termino: 'Inyección de instrucciones',
      significado:
        'manipulación de entradas procesadas por un modelo con el propósito de modificar su comportamiento de forma no prevista o no autorizada.',
    },
    {
      termino: 'Modelo de IA',
      significado:
        'componente computacional que procesa entradas y genera inferencias, predicciones, decisiones o contenidos según su diseño y parámetros.',
    },
    {
      termino: 'Parte interesada',
      significado:
        'persona, grupo u organización que participa en el sistema de IA, puede influir en él o puede resultar afectada por sus resultados.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'estimación de la posibilidad de que ocurra un evento de riesgo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'efecto de la incertidumbre sobre los objetivos que puede producir consecuencias positivas o negativas y que debe analizarse según el contexto.',
    },
    {
      termino: 'Riesgo inherente',
      significado:
        'nivel de riesgo existente antes de considerar los controles implementados para modificarlo.',
    },
    {
      termino: 'Riesgo residual',
      significado:
        'nivel de riesgo que permanece después de considerar la aplicación y efectividad de los controles existentes.',
    },
    {
      termino: 'Sistema de inteligencia artificial generativa',
      significado:
        'conjunto sociotécnico compuesto por modelos, datos, instrucciones, interfaces, personas, infraestructura, integraciones y procesos organizacionales orientados a producir y utilizar contenido generado mediante IA.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'debilidad o condición que puede facilitar la materialización de una amenaza y contribuir a producir un evento adverso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Nacional de Planeación. (2025). Documento CONPES 4144. Política Nacional de Inteligencia Artificial. Consejo Nacional de Política Económica y Social, República de Colombia.',
    },
    {
      referencia:
        'International Organization for Standardization & International Electrotechnical Commission. (2022). ISO/IEC 22989:2022 Information technology—Artificial intelligence—Artificial intelligence concepts and terminology. ISO.',
    },
    {
      referencia:
        'International Organization for Standardization & International Electrotechnical Commission. (2023a). ISO/IEC 23894:2023 Information technology—Artificial intelligence—Guidance on risk management. ISO.',
    },
    {
      referencia:
        'International Organization for Standardization & International Electrotechnical Commission. (2023b). ISO/IEC 42001:2023 Information technology—Artificial intelligence—Management system. ISO.',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1). U.S. Department of Commerce.',
    },
    {
      referencia:
        'OWASP Foundation. (2026). OWASP Top 10 for Large Language Model and Generative AI Applications 2026. OWASP Generative AI Security Project.',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2024). Circular Externa 002 de 2024: Lineamientos sobre el tratamiento de datos personales en sistemas de inteligencia artificial. República de Colombia.',
    },
    {
      referencia:
        'United Nations Educational, Scientific and Cultural Organization. (2021). Recommendation on the Ethics of Artificial Intelligence. UNESCO.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
