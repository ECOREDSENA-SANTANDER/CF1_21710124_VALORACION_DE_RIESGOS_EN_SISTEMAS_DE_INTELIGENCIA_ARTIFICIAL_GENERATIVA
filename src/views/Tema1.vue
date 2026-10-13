<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de inteligencia artificial generativa
     
      .bloque-texto-g.bloque-texto-g--inverso.bg006.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left") 
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Comprender los fundamentos de la inteligencia artificial generativa constituye el punto de partida para identificar adecuadamente sus factores de riesgo. Una evaluación no debería comenzar preguntando solamente qué herramienta utiliza una organización, sino qué problema pretende resolver, qué capacidades tecnológicas intervienen y cuáles son las limitaciones conocidas del sistema. Esta perspectiva evita analizar la tecnología como un elemento aislado y facilita relacionarla posteriormente con personas, procesos, información e infraestructura. 
          
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Inteligencia artificial e inteligencia artificial generativa: conceptos, evolución, diferencias y aplicaciones

      .row.justify-content-center.align-items-center.mb-3.bg4.g-0(data-aos="zoom-in-left")
        .col-lg-4.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img02.svg', alt='')
        .col-lg-8.p-3
          p La inteligencia artificial (IA) comprende sistemas computacionales capaces de procesar información y generar resultados como predicciones, recomendaciones, clasificaciones, decisiones o contenidos. Es un campo amplio que reúne diferentes enfoques y tecnologías. La norma ISO/IEC 22989:2022 establece conceptos y términos que facilitan la comprensión de la IA, mientras que otras normas de la familia ISO/IEC orientan aspectos relacionados con su ciclo de vida, gestión y riesgos.
          p.mb-0 Dentro de este campo se encuentra la inteligencia artificial generativa (IAG), diseñada para generar nuevos contenidos a partir de instrucciones y de patrones aprendidos durante su desarrollo. Estos contenidos pueden incluir textos, imágenes, sonidos, videos, programas informáticos o combinaciones de diferentes modalidades. Debido a sus características particulares, la IAG puede presentar riesgos específicos. Por esta razón, el NIST publicó en 2024 el Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, que proporciona orientaciones para apoyar la gestión de estos riesgos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg")
            h3.bg3.py-2.w-card-text1 ¿Cómo diferenciar la IA de la IA generativa?

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-down")
        .col-lg-5.mb-3.col-md-9.col-11
          img(src='@/assets/curso/temas/t1/img03.png', alt='')
        .col-lg-7
          .row.justify-content-center(data-aos="fade-down")
            .col-lg-2.col-md-2.mb-3.col-4
              img(src='@/assets/curso/temas/t1/img04.svg', alt='')
            .col-lg-10
              p Para comprender esta diferencia, pensemos en una situación relacionada con la formación. Una plataforma académica tradicional puede consultar una base de datos y mostrar la calificación registrada para un aprendiz. En este caso, la información ya existe y el sistema se encarga principalmente de recuperarla y presentarla.
              p Ahora, imagine que una aplicación recibe información sobre las fortalezas y dificultades identificadas durante una actividad y, a partir de ella, genera un borrador de retroalimentación pedagógica. En este caso, el contenido se construye durante la interacción y puede variar de acuerdo con las instrucciones y la información proporcionada.

        p Esta capacidad permite utilizar la IA generativa en diferentes actividades de formación profesional. Por ejemplo, puede apoyar la elaboración preliminar de explicaciones, ejemplos, preguntas de evaluación, casos simulados, diagramas, recursos audiovisuales o fragmentos de código. También puede facilitar la síntesis de información y la exploración de posibles alternativas de solución.
        p Sin embargo, que una herramienta pueda realizar una determinada tarea no significa que siempre sea adecuado utilizarla para ese propósito. Antes de emplearla, es necesario considerar el contexto, la información utilizada, las personas involucradas, la posibilidad de verificar los resultados y las consecuencias que podría generar una respuesta incorrecta.

      .row.justify-content-center.align-items-center.mb-4.bg9.p-4(data-aos="zoom-in-left")
        .col-lg-12
          p Por ejemplo, una institución podría utilizar IA generativa para proponer cinco ejemplos ficticios que faciliten la comprensión de conceptos de ciberseguridad. Si los ejemplos son revisados y validados por el instructor antes de utilizarlos, las consecuencias de un posible error pueden mantenerse bajo control. En cambio, utilizar el mismo sistema para tomar automáticamente decisiones sobre la aprobación de evidencias, sin criterios verificables ni revisión humana, podría generar consecuencias mayores.
          p En este sentido, la herramienta por sí sola no determina el nivel de riesgo. Este también depende del propósito para el cual se utiliza, la información que procesa, las personas que pueden verse afectadas y las consecuencias que podrían derivarse de sus resultados. Por ello, comprender el contexto de uso es fundamental para identificar y gestionar los riesgos asociados con la inteligencia artificial generativa.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Cuadro comparativo. Inteligencia artificial e inteligencia artificial generativa.
      .tabla-a.color-acento-contenido.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.text-izq.w-25 Aspecto
              th.text-izq Inteligencia artificial (IA)
              th.text-izq Inteligencia artificial generativa (IAG)
          tbody
            tr
              th.text-izq Concepto
              td Campo de la informática orientado al desarrollo de sistemas capaces de procesar información y realizar tareas como clasificar, predecir, recomendar, reconocer patrones o apoyar decisiones.
              td Rama de la inteligencia artificial especializada en producir nuevos contenidos a partir de instrucciones y de patrones aprendidos durante el entrenamiento de los modelos.
            tr
              th.text-izq Propósito principal
              td Analizar información, identificar patrones, realizar predicciones, clasificar datos, optimizar procesos o apoyar la toma de decisiones.
              td Crear o transformar contenidos como textos, imágenes, audio, video, código y datos sintéticos en respuesta a instrucciones proporcionadas por los usuarios.
            tr
              th.text-izq Evolución
              td Su desarrollo ha pasado desde sistemas basados en reglas y conocimiento experto hacia técnicas de aprendizaje automático, aprendizaje profundo y modelos capaces de procesar grandes cantidades de datos.
              td Se consolida a partir de los avances en aprendizaje profundo y modelos generativos de gran escala, especialmente con arquitecturas capaces de producir contenido cada vez más coherente, contextual y multimodal.
            tr
              th.text-izq Tipo de resultado
              td Puede producir clasificaciones, predicciones, recomendaciones, detecciones, puntuaciones o decisiones automatizadas.
              td Produce contenido nuevo o transformado, como una respuesta escrita, una ilustración, una narración, un video, un fragmento de código o un conjunto de datos sintéticos.
            tr
              th.text-izq Forma de funcionamiento
              td Utiliza algoritmos y modelos para procesar datos, reconocer patrones y generar resultados relacionados con una tarea determinada.
              td Utiliza modelos generativos que estiman probabilísticamente qué contenido resulta adecuado de acuerdo con las instrucciones, el contexto y los patrones aprendidos.
            tr
              th.text-izq Relación con los datos
              td Los datos pueden utilizarse para entrenar modelos, realizar clasificaciones, detectar patrones o generar predicciones.
              td Los datos se utilizan para aprender estructuras y patrones que posteriormente permiten construir nuevos contenidos durante la interacción con el usuario.
            tr
              th.text-izq Interacción con el usuario
              td Puede funcionar sin interacción conversacional directa, por ejemplo, detectando fraude, recomendando productos o clasificando información.
              td Generalmente permite una interacción directa mediante instrucciones o #[em prompts], aunque también puede incorporarse de manera automática en aplicaciones y procesos organizacionales.
            tr
              th.text-izq Ejemplo general
              td Un sistema analiza transacciones y determina cuáles presentan características asociadas con posibles fraudes.
              td Un asistente recibe una instrucción y genera una explicación escrita sobre cómo prevenir el fraude electrónico.
            tr
              th.text-izq Aplicación en educación
              td Puede utilizarse para identificar patrones de aprendizaje, recomendar contenidos, analizar desempeño o detectar estudiantes que requieren acompañamiento.
              td Puede apoyar la elaboración de borradores de contenidos educativos, explicaciones, ejemplos, preguntas, imágenes, simulaciones y materiales adaptados a diferentes necesidades formativas.
            tr
              th.text-izq Aplicación en desarrollo de #[em software]
              td Puede detectar errores, analizar comportamiento de aplicaciones, clasificar vulnerabilidades o predecir fallos.
              td Puede generar código, explicar funciones, producir estructuras HTML y CSS, proponer consultas, documentar programas o apoyar la creación de pruebas.
            tr
              th.text-izq Ejemplo en formación profesional
              td Una plataforma analiza los resultados históricos de los aprendices para identificar contenidos en los que existen mayores dificultades.
              td Un instructor solicita al sistema generar un caso práctico sobre ciberseguridad que posteriormente revisa y adapta antes de incorporarlo al ambiente virtual de aprendizaje.
            tr
              th.text-izq Principales capacidades
              td Automatización, análisis de grandes cantidades de datos, reconocimiento de patrones, clasificación, predicción y optimización.
              td Generación, síntesis, reformulación, traducción y transformación de contenidos, apoyo creativo, interacción mediante lenguaje natural y generación de código.
            tr
              th.text-izq Principales limitaciones
              td Puede presentar errores derivados de los datos, sesgos, problemas de interpretación del contexto y dificultades para explicar algunos resultados.
              td Además de las limitaciones generales de la IA, puede generar información incorrecta o confabulada, contenidos sesgados, resultados variables y respuestas aparentemente convincentes que requieren verificación.
            tr
              th.text-izq Necesidad de supervisión humana
              td Depende de la criticidad del proceso y de las consecuencias que pueda producir una clasificación, recomendación o decisión incorrecta.
              td Resulta especialmente relevante debido al carácter probabilístico de las respuestas y a la posibilidad de producir contenido incorrecto, inadecuado o no verificable.
            tr
              th.text-izq Riesgos característicos
              td Sesgo algorítmico, discriminación, errores de clasificación o predicción, privacidad, seguridad, falta de transparencia y automatización inadecuada.
              td Confabulación, desinformación, exposición de datos, inyección de instrucciones, generación de contenido dañino, propiedad intelectual, suplantación, dependencia excesiva, sesgos y riesgos asociados con terceros.
            tr
              th.text-izq Relación entre ambos conceptos
              td Constituye el campo tecnológico general que comprende múltiples técnicas y tipos de sistemas inteligentes.
              td Constituye una categoría específica dentro de la inteligencia artificial orientada principalmente a la generación y transformación de contenidos.

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-12
          img(src='@/assets/curso/temas/t1/img05.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Tipos de contenido generado: texto, imagen, audio, video código y datos sintéticos

      p Los sistemas de inteligencia artificial generativa pueden clasificarse, entre otros criterios, según el tipo de contenido que reciben y producen. Esta característica se conoce como modalidad. Algunos sistemas están orientados principalmente al lenguaje, mientras que otros pueden trabajar con imágenes, audio, video, código o combinar varias modalidades.

      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Generación de texto")
              .col-md-12.mb-4.mb-md-0
                p La generación de texto permite producir respuestas conversacionales, resúmenes, traducciones, explicaciones, borradores de informes y otros contenidos escritos. En un entorno de formación virtual, por ejemplo, una herramienta de IA generativa podría utilizarse para elaborar una primera versión de preguntas frecuentes sobre el funcionamiento de un curso. Aunque el contenido sea coherente y esté bien redactado, es necesario verificarlo cuando incluya información institucional, normativa o técnica.

            .row(titulo="Generación de imágenes")
              .col-md-12.mb-4.mb-md-0
                p La generación de imágenes permite crear ilustraciones y composiciones visuales a partir de instrucciones escritas o de otras imágenes. Puede ser útil para elaborar materiales didácticos, prototipos y recursos de apoyo. Sin embargo, también plantea aspectos relacionados con los estereotipos, la procedencia del contenido, los derechos de autor y la posibilidad de que una imagen generada artificialmente sea interpretada como evidencia de un hecho real.

            .row(titulo="Generación de audio y video")
              .col-md-12.mb-4.mb-md-0
                p Los sistemas de generación de audio pueden producir voces, música y otros sonidos. En contextos formativos, pueden apoyar la creación de narraciones, ejercicios y simulaciones. Sin embargo, la reproducción de características vocales de personas reales puede facilitar situaciones de suplantación o uso no autorizado.
                p Por su parte, la generación de video combina elementos como imagen, movimiento y sonido para crear diferentes tipos de contenidos. Esta capacidad puede contribuir al desarrollo de recursos educativos, pero también puede generar contenidos que atribuyan de manera incorrecta declaraciones o acontecimientos a personas reales.

            .row(titulo="Generación de código")
              .col-md-12.mb-4.mb-md-0
                p La generación de código tiene especial importancia en el desarrollo de soluciones tecnológicas. Una herramienta de IA generativa puede producir estructuras HTML, consultas, scripts o funciones de programación.
                p Por ejemplo, durante la creación de un sitio web para gestionar solicitudes de soporte, una herramienta podría generar un formulario que solicite el nombre, número de identificación y correo electrónico de los usuarios. Aunque el código parezca funcional, podría presentar problemas como validaciones insuficientes, exposición de información personal o utilización de dependencias vulnerables. Por esta razón, el código generado mediante IA requiere revisión, pruebas y controles de seguridad, al igual que cualquier otro código.
            .row(titulo="Generación de datos sintéticos")
              .col-md-12.mb-4.mb-md-0
                p Los datos sintéticos son datos creados artificialmente para representar determinadas características, comportamientos o situaciones. Pueden ser útiles en actividades educativas y de prueba cuando no resulta conveniente utilizar datos personales reales. Sin embargo, es necesario revisar su calidad y representatividad, ya que pueden presentar distribuciones poco adecuadas o reproducir sesgos presentes en los datos y supuestos utilizados para generarlos.
        .col-lg-4.col-10.col-md-7
          img(src='@/assets/curso/temas/t1/img06.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg")
            h3.bg3.py-2.w-card-text1 ¿Por qué es importante reconocer las modalidades?

      p La posibilidad de generar diferentes tipos de contenido amplía las aplicaciones de la inteligencia artificial generativa, pero también puede aumentar la variedad de riesgos asociados con su uso. Estos pueden relacionarse con la privacidad, la seguridad, la integridad de la información, los derechos sobre los contenidos y otros aspectos. 
      p Por ello, identificar la modalidad con la que trabaja un sistema es un primer paso para comprender qué puede generar, qué información puede procesar, quiénes pueden verse afectados y qué riesgos deben gestionarse antes de utilizarlo en un contexto determinado.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Capacidades, limitaciones, comportamiento probabilístico y necesidad de supervisión humana

      .row.justify-content-center.mb-3.bg8.g-0(data-aos="fade-right")
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img07.png', alt='')
        .col-lg-7
          .row.mb-0.p-4.p-lg-5
            .col-lg-2.mb-3.col-5.col-md-3
              img(src='@/assets/curso/temas/t1/img08.svg', alt='')
            .col-lg-12.text-white
              p La inteligencia artificial generativa puede apoyar diferentes actividades relacionadas con la producción y transformación de información. Entre sus capacidades se encuentran la síntesis de textos, la reformulación de contenidos, la identificación de patrones, la generación de alternativas, la creación de recursos y el apoyo a tareas de programación. Estas capacidades pueden resultar especialmente útiles cuando el resultado generado se utiliza como insumo preliminar y posteriormente es revisado y validado por una persona con los conocimientos necesarios.
              p.mb-0 Sin embargo, las capacidades de estos sistemas están acompañadas de limitaciones que deben considerarse antes y durante su utilización. Una de las más importantes es su #[b comportamiento probabilístico]. En términos sencillos, el sistema genera una respuesta a partir de patrones y relaciones que considera apropiados según la información disponible y las características de la solicitud. Por esta razón, una misma instrucción puede producir respuestas diferentes y una respuesta expresada con seguridad no garantiza que sea correcta.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg")
            h3.bg3.py-2.w-card-text1 ¿Puede una respuesta bien redactada contener información incorrecta?

      p Sí. Una herramienta generativa puede producir información incorrecta y presentarla de manera coherente y convincente. Por ejemplo, si un instructor solicita referencias bibliográficas sobre un tema especializado, el sistema podría generar títulos, autores o datos de publicación que parecen válidos, pero que no corresponden a fuentes reales. Por ello, la información obtenida mediante IA debe contrastarse cuando su exactitud sea relevante para la actividad.
      p Esta situación permite comprender una idea fundamental: #[b fluidez no significa exactitud]. Una respuesta clara, completa y bien estructurada puede contener errores, información desactualizada o afirmaciones que requieren verificación.

      .fondo04.p-4.mb-3(data-aos="fade-right")
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg")
              h3.bg3.py-2.w-card-text1 La importancia de la supervisión humana
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-7.mb-3 
            .row.justify-content-center.align-items-center
              .col-lg-2.mb-3.col-4.col-md-3
                img(src="@/assets/curso/temas/t4/img08.svg")
              .col-lg-10 
                p La supervisión humana constituye un elemento fundamental para controlar los riesgos asociados con el uso de IA generativa. Sin embargo, no basta con establecer formalmente que una persona debe revisar los resultados. Para que la supervisión sea efectiva, la persona responsable debe contar con conocimientos suficientes, criterios previamente definidos, fuentes que permitan contrastar la información y autoridad para modificar, rechazar o detener el uso del resultado generado.
            p Por ejemplo, una institución puede establecer que todas las respuestas de un asistente de IA serán revisadas antes de ser utilizadas. Si una sola persona debe validar miles de resultados en un periodo de tiempo que no permite realizar una revisión adecuada, existe una supervisión formal, pero el control puede resultar insuficiente en la práctica.
          .col-lg-4.col-10.mb-3.col-md-6
            img(src='@/assets/curso/temas/t1/img09.svg', alt='')
       
      p Por tanto, al utilizar IA generativa es necesario preguntarse:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/1.svg' alt='')
          h3.text-center ¿Quién revisará los resultados?
      

        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/2.svg' alt='')
          h3.text-center ¿Qué aspectos deben verificarse?
       
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/3.svg' alt='')
          h3.text-center ¿Con qué fuentes se realizará el contraste?

        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/3.svg' alt='')
          h3.text-center ¿Qué ocurre si el resultado es incorrecto?
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/3.svg' alt='')
          h3.text-center ¿La persona responsable tiene la capacidad y autoridad para rechazarlo?

      p Estas preguntas ayudan a determinar si la supervisión realmente funciona como una medida de control y no solamente como un requisito establecido en un procedimiento.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Ciclo de vida de los sistemas de inteligencia artificial: planeación, adquisición o desarrollo, implementación, uso, monitoreo y retiro 

      p Los riesgos asociados con la inteligencia artificial pueden cambiar durante las diferentes etapas de existencia de un sistema. Por esta razón, la gestión de riesgos no debe limitarse al momento en que una herramienta comienza a utilizarse. ISO/IEC 5338:2023 establece procesos relacionados con el ciclo de vida de los sistemas de inteligencia artificial, mientras que ISO/IEC 42001:2023 establece requisitos para implementar y mantener un sistema de gestión de inteligencia artificial en una organización.
      p El ciclo de vida puede comprender las siguientes etapas:

      TabsC.color-primario.mb-4(data-aos="zoom-in-left")
        .py-3.py-md-4(titulo="Planeación")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-md-7.col-10
              img(src='@/assets/curso/temas/t1/1.png', alt='')
            .col-lg-6
              p La organización identifica una necesidad y determina si el uso de IA es una alternativa apropiada. Antes de seleccionar una herramienta, conviene definir qué proceso se desea apoyar, cuáles son los resultados esperados, quiénes estarán involucrados y qué consecuencias podría generar una respuesta incorrecta.
        .py-3.py-md-4(titulo="Adquisición o desarrollo")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-md-7.col-10
              img(src='@/assets/curso/temas/t1/2.png', alt='')
            .col-lg-6
              p En esta etapa se seleccionan proveedores, modelos, componentes o tecnologías, o se desarrolla una solución propia. Es necesario considerar aspectos como el tratamiento de datos, las condiciones contractuales, la disponibilidad del servicio, los derechos sobre los contenidos, los mecanismos de seguridad y las responsabilidades de terceros. ISO/IEC 23894:2023 proporciona orientación para la gestión de riesgos relacionados con sistemas de inteligencia artificial y puede ser considerada por organizaciones que desarrollan, producen, despliegan o utilizan productos y servicios basados en IA.

        .py-3.py-md-4(titulo="Implementación")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-md-7.col-10
              img(src='@/assets/curso/temas/t1/3.png', alt='')
            .col-lg-6
              p La solución se configura e integra en el entorno donde será utilizada. Esta etapa puede incluir la asignación de permisos, las pruebas, la capacitación de usuarios y la puesta en funcionamiento. Es importante reconocer que el mismo modelo puede presentar diferentes niveles de riesgo dependiendo de cómo se implemente. Por ejemplo, una organización que conecta una herramienta con información institucional confidencial enfrenta condiciones diferentes a otra que la utiliza exclusivamente con contenidos públicos.

        .py-3.py-md-4(titulo="Uso")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-md-7.col-10
              img(src='@/assets/curso/temas/t1/4.png', alt='')
            .col-lg-6
              p Durante esta etapa pueden aparecer situaciones que no fueron previstas inicialmente. Un usuario podría introducir información que no debía procesarse, utilizar la herramienta para una finalidad diferente de la autorizada o aceptar un resultado sin realizar la verificación correspondiente. Por ello, la gestión debe considerar tanto los usos previstos como aquellos que puedan resultar razonablemente previsibles.

        .py-3.py-md-4(titulo="Monitoreo")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-md-7.col-10
              img(src='@/assets/curso/temas/t1/5.png', alt='')
            .col-lg-6
              p El seguimiento permite identificar desviaciones, incidentes, cambios en el proveedor, modificaciones del modelo y nuevos riesgos. La gestión debe mantenerse de manera continua, ya que las condiciones del sistema y de su entorno pueden cambiar con el tiempo.

        .py-3.py-md-4(titulo="Retiro")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-3.col-md-7.col-10
              img(src='@/assets/curso/temas/t1/6.png', alt='')
            .col-lg-6
              p Cuando una solución deja de utilizarse, también deben gestionarse aspectos relacionados con la eliminación o transferencia de información, el cierre de cuentas, la revocación de credenciales, la conservación de evidencias y la terminación de integraciones. Suspender el uso de una plataforma no significa necesariamente que los datos almacenados desaparezcan de manera inmediata ni que finalicen todas las obligaciones asociadas con el servicio.

      .row.justify-content-center.mb-3.bg13.g-0(data-aos="fade-right")
        .col-lg-5.p-0.col-md-7
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img10.svg', alt='')
        .col-lg-7
          .row.mb-0.p-4.p-lg-5
            .col-lg-12.text-white
              h3.mb-4 Una idea clave para la gestión de riesgos
              p El ciclo de vida permite comprender que #[b gestionar los riesgos de la IA no es una actividad que se realiza una sola vez.] Una herramienta puede ser adecuada durante la planeación y requerir nuevos controles después de su implementación, o presentar riesgos diferentes cuando cambia su proveedor, configuración, información procesada o finalidad de uso.
              p Por ello, cada etapa debe incorporar actividades de identificación, evaluación, tratamiento y seguimiento de riesgos, de acuerdo con las características del sistema y el contexto en el que se utiliza.

















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
