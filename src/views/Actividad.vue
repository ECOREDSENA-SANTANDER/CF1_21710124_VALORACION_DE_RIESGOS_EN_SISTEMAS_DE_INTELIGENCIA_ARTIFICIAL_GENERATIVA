<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> valoración de riesgos en sistemas de inteligencia artificial generativa.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál característica diferencia principalmente a la inteligencia artificial generativa de otros sistemas de inteligencia artificial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Produce nuevos contenidos a partir de instrucciones y patrones aprendidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se limita a recuperar información almacenada sin generar contenido nuevo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Funciona únicamente con datos numéricos y resultados estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Opera sin modelos, datos ni patrones aprendidos previamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la inteligencia artificial generativa y su capacidad para producir nuevos contenidos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el concepto y las características de la inteligencia artificial generativa.',
        },
        {
          id: 2,
          texto:
            '¿Cuál conjunto corresponde a modalidades de contenido que puede generar un sistema de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente texto, tablas y bases de datos relacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo imágenes, hojas de cálculo y formularios electrónicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Texto, imagen, audio, video, código y datos sintéticos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente predicciones, clasificaciones y puntuaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las modalidades de contenido que pueden producir los sistemas generativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los tipos de contenido generado por la inteligencia artificial generativa.',
        },
        {
          id: 3,
          texto:
            '¿Qué implica el comportamiento probabilístico de un sistema de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que una misma instrucción siempre produce exactamente la misma respuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las respuestas pueden variar y una salida convincente no garantiza exactitud.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que el sistema puede validar automáticamente todas las fuentes que utiliza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que las respuestas generadas no requieren revisión cuando están bien redactadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el comportamiento probabilístico y la necesidad de verificar las respuestas generadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las limitaciones, variabilidad y exactitud de las salidas generativas.',
        },
        {
          id: 4,
          texto:
            '¿Cuál situación representa una supervisión humana efectiva sobre las salidas de un sistema generativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar automáticamente todas las respuestas para reducir tiempos de revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asignar la revisión de miles de resultados a una persona sin tiempo suficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aceptar la respuesta cuando el sistema la presenta con un alto grado de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contar con una persona competente, criterios definidos, fuentes de contraste y autoridad para rechazar la salida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la supervisión humana como control efectivo sobre los resultados de la inteligencia artificial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las condiciones necesarias para una supervisión humana efectiva.',
        },
        {
          id: 5,
          texto:
            '¿Cuál secuencia corresponde al ciclo de vida de los sistemas de inteligencia artificial descrito en el componente formativo?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Planeación, adquisición o desarrollo, implementación, uso, monitoreo y retiro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseño gráfico, publicación, publicidad, comercialización y archivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registro, clasificación, impresión, distribución, actualización y eliminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Programación, venta, capacitación, auditoría financiera y renovación contractual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las etapas del ciclo de vida de los sistemas de inteligencia artificial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planeación, adquisición o desarrollo, implementación, uso, monitoreo y retiro.',
        },
        {
          id: 6,
          texto:
            'En la caracterización de un caso de uso de inteligencia artificial generativa, ¿qué establece el alcance?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el nombre comercial de la herramienta y del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo los resultados financieros esperados por la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las actividades, usuarios, datos, funciones y ambientes incluidos en el análisis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente las características técnicas del modelo utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la delimitación del alcance durante la caracterización de un caso de uso.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el proceso de negocio, el objetivo, el alcance y las partes interesadas.',
        },
        {
          id: 7,
          texto:
            '¿Cuál opción reúne componentes que deben considerarse al caracterizar un sistema de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Marca, publicidad, precio, logotipo y campaña de lanzamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Datos, modelo, instrucciones, interfaces, usuarios, salidas, integraciones, infraestructura y proveedor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solo <i>hardware</i>, sistema operativo y conexión a internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente modelo, usuario final y licencia comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los componentes interdependientes que conforman un sistema de inteligencia artificial generativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los datos, modelos, instrucciones, interfaces, salidas, integraciones e infraestructura.',
        },
        {
          id: 8,
          texto:
            '¿Cuál situación representa un punto crítico dentro de un sistema de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una función que genera borradores sin capacidad de ejecutar acciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un recurso didáctico que utiliza únicamente información pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una consulta ocasional realizada por un usuario sin integraciones externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una integración que permite escribir automáticamente información en una base de datos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los puntos críticos y las consecuencias potenciales de las integraciones automatizadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con activos, dependencias, condiciones operacionales y puntos críticos.',
        },
        {
          id: 9,
          texto:
            '¿Qué práctica refleja una adecuada asignación de roles y responsabilidades en el uso organizacional de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diferenciar quién usa, administra, supervisa y gobierna el sistema, manteniendo trazabilidad de las decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Asignar toda la responsabilidad al usuario que redacta la instrucción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Delegar todas las decisiones al proveedor porque administra el modelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar definir responsables para facilitar el uso flexible de la herramienta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la distribución de responsabilidades y la trazabilidad en la gestión de sistemas de inteligencia artificial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los roles en la adquisición, configuración, uso, supervisión y auditoría.',
        },
        {
          id: 10,
          texto:
            'En un escenario de riesgo, ¿qué se entiende por vulnerabilidad?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La magnitud final de las consecuencias producidas por un evento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La posibilidad estadística de que una situación ocurra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una debilidad o condición que facilita que una amenaza pueda materializarse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una medida implementada para prevenir, detectar o corregir un riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la vulnerabilidad como condición que facilita la materialización de una amenaza.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con riesgo, fuente, amenaza, vulnerabilidad, probabilidad, impacto y control.',
        },
        {
          id: 11,
          texto:
            '¿Cuál afirmación diferencia correctamente el riesgo inherente del riesgo residual?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El riesgo inherente aparece después de los controles y el residual antes de aplicarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El riesgo inherente existe antes de considerar controles y el residual permanece después de aplicarlos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ambos conceptos representan exactamente el mismo nivel de riesgo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El riesgo residual solo existe cuando no se ha identificado ninguna amenaza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la diferencia entre riesgo inherente y riesgo residual.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los controles y los niveles de riesgo antes y después de su aplicación.',
        },
        {
          id: 12,
          texto:
            '¿Cuáles son las cuatro funciones centrales del NIST AI Risk Management Framework?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar, programar, publicar y retirar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar, comprar, instalar y documentar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planear, ejecutar, verificar y actuar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gobernar, Mapear, Medir y Gestionar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las funciones Gobernar, Mapear, Medir y Gestionar del NIST AI RMF.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las funciones principales del NIST Artificial Intelligence Risk Management Framework.',
        },
        {
          id: 13,
          texto:
            'Dentro del NIST AI RMF, ¿qué propósito cumple principalmente la función Mapear?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprender el contexto, los actores, los impactos previstos y las condiciones de funcionamiento del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar de manera automática todos los riesgos identificados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir las políticas institucionales por decisiones del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular únicamente el costo económico de implementar la inteligencia artificial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función Mapear y su papel en la comprensión del contexto del sistema.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las funciones de gobernar, mapear, medir y gestionar.',
        },
        {
          id: 14,
          texto:
            '¿Qué caracteriza al NIST AI 600-1 dentro de los marcos de referencia estudiados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una norma exclusiva para el tratamiento contable de proveedores tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un estándar dedicado únicamente al diseño de centros de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es un perfil específico de inteligencia artificial generativa que complementa el NIST AI RMF.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es una regulación colombiana que reemplaza todas las normas internacionales de inteligencia artificial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con NIST AI 600-1 como perfil específico para los riesgos de inteligencia artificial generativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los marcos de referencia para la gestión de riesgos de inteligencia artificial.',
        },
        {
          id: 15,
          texto:
            '¿Cuál situación corresponde a una confabulación en un sistema de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sistema solicita autenticación adicional antes de procesar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema presenta una referencia inexistente como si fuera auténtica y confiable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El proveedor suspende temporalmente el servicio por mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El usuario decide revisar una salida antes de incorporarla a un documento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la confabulación como generación de información falsa o incorrecta presentada de manera plausible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la confabulación, la dependencia excesiva y la automatización inadecuada.',
        },
        {
          id: 16,
          texto:
            '¿Qué describe mejor una inyección de instrucciones o <i>prompt injection</i>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso normal mediante el cual un usuario redacta una solicitud autorizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La eliminación programada de datos al finalizar una sesión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La validación humana de una respuesta antes de su publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La manipulación de entradas para modificar el comportamiento del modelo de forma no prevista o no autorizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la inyección de instrucciones como vulnerabilidad de seguridad en sistemas generativos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con privacidad, seguridad de la información, inyección de instrucciones y uso indebido.',
        },
        {
          id: 17,
          texto:
            '¿Cuál situación evidencia un riesgo de sesgo o discriminación asociado con inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar de forma reiterada representaciones estereotipadas de determinados grupos en materiales visuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Guardar una copia de seguridad de las configuraciones autorizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar la versión del modelo utilizada durante una evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solicitar revisión humana antes de publicar un contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con sesgos, representaciones estereotipadas y posibles afectaciones a la equidad y la no discriminación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con sesgos, homogeneización, discriminación, exclusión y afectación de derechos.',
        },
        {
          id: 18,
          texto:
            '¿Qué se entiende por procedencia del contenido en el contexto de la inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La velocidad con la que el modelo produce una respuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El costo de almacenamiento de las salidas generadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La posibilidad de conocer el origen y las transformaciones que ha tenido un contenido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La capacidad del proveedor para aumentar automáticamente el número de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la procedencia y la trazabilidad del origen de los contenidos generados o modificados.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con desinformación, suplantación, propiedad intelectual y procedencia del contenido.',
        },
        {
          id: 19,
          texto:
            'Al utilizar inteligencia artificial generativa con información de aprendices, ¿qué práctica se ajusta al principio de minimización de datos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Introducir todos los datos disponibles para obtener respuestas más extensas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizar únicamente los datos necesarios y anonimizar la información cuando sea posible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compartir credenciales institucionales con el proveedor para agilizar el acceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservar indefinidamente todas las entradas sin revisar su finalidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la minimización y el tratamiento responsable de datos personales en sistemas de inteligencia artificial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con protección de datos personales, finalidad, seguridad, acceso y conservación.',
        },
        {
          id: 20,
          texto:
            '¿Qué práctica favorece la trazabilidad durante la documentación de una evaluación de riesgos de inteligencia artificial generativa?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar solo el nombre comercial de la herramienta y omitir cambios posteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar los responsables de los registros para evitar asignar obligaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Guardar únicamente la respuesta final del sistema sin contexto ni evidencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documentar versiones, configuraciones, fuentes, cambios, pruebas, responsables y evidencias de aprobación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la documentación, la trazabilidad y el manejo organizado de evidencias durante la evaluación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la documentación, el registro de riesgos y el manejo seguro de la información.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la identificación de sistemas de inteligencia artificial generativa y sus factores de riesgo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
