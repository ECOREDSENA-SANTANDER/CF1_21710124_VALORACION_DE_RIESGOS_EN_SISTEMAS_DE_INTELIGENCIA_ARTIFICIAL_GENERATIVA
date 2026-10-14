<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Referentes éticos y normativos

    .bloque-texto-g.bloque-texto-g--inverso.bg06.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b La inteligencia artificial no funciona de manera aislada. Su utilización ocurre dentro de contextos jurídicos, sociales y organizacionales que establecen derechos, responsabilidades y condiciones para su uso. Por esta razón, identificar riesgos no implica analizar únicamente el funcionamiento técnico del sistema, sino también] la información que utiliza, las personas que puede afectar y las obligaciones que debe cumplir la organización.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Protección de datos personales en sistemas de inteligencia artificial
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-down")
      .col-lg-5.mb-3.col-md-10.col-11
        img(src='@/assets/curso/temas/t5/img02.png', alt='')
      .col-lg-7
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-2.col-md-3.mb-3.col-4
            img(src='@/assets/curso/temas/t5/img03.svg', alt='')
          .col-lg-10
            p Cuando un sistema de IA utiliza datos personales, la organización debe analizar si esa información es realmente necesaria para cumplir el propósito definido. En Colombia, la #[b Superintendencia de Industria y Comercio (SIC]) estableció en 2024 lineamientos relacionados con el tratamiento de datos personales en sistemas de inteligencia artificial mediante la Circular Externa 002.
        p Un principio práctico es la #[b minimización de datos:] utilizar únicamente la información necesaria para desarrollar la actividad. También deben considerarse aspectos como la finalidad del tratamiento, seguridad, acceso, circulación y conservación de la información.
        p Por ejemplo, un instructor podría utilizar una herramienta generativa para apoyar el análisis de trabajos de los aprendices. Antes de ingresar los documentos, debería determinar si es necesario incluir nombres, números de identificación u otros datos personales. Si el objetivo puede cumplirse con información anonimizada, esta alternativa reduce la exposición de datos.
    p El análisis debe continuar más allá de lo que introduce el usuario. También es necesario conocer #[b qué hace el proveedor con la información, dónde se procesa, cuánto tiempo puede conservarla y bajo qué condiciones puede utilizarla.]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.bg7.p-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/temas/t4/pregunta.svg', alt='')
          .col-lg-9 
            p.mb-0 #[b Pregunta orientadora:] ¿qué datos necesita realmente el sistema y qué ocurre con ellos después de ser ingresados?
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Política Nacional de Inteligencia Artificial y referentes colombianos
    p En Colombia, el #[b Documento CONPES 4144 de 2025] establece la Política Nacional de Inteligencia Artificial. Este documento plantea una hoja de ruta para fortalecer las capacidades del país y promover un desarrollo y uso ético, seguro, sostenible y responsable de la IA.

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-3.mb-3.col-9.col-md-6
        img(src='@/assets/curso/temas/t5/img04.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.bg11.p-4.mb-3
          .col-lg-8.mb-3 
            p Para las organizaciones, este referente permite comprender que adoptar inteligencia artificial no consiste solamente en incorporar herramientas. También requiere fortalecer capacidades humanas, gobernanza, infraestructura, investigación, innovación y gestión de riesgos.
            p.mb-0 Además, el marco relacionado con la IA continúa evolucionando. Por esta razón, las organizaciones deben mantener seguimiento de nuevas disposiciones legales, proyectos normativos, lineamientos sectoriales y orientaciones de las autoridades competentes.
          .col-lg-4.col-md-6.col-9
            img(src='@/assets/curso/temas/t5/img06.svg', alt='')
        p Esto significa que una evaluación de riesgos no debería considerarse definitiva para siempre. #[b Si cambia la normativa, el proveedor, el modelo, la finalidad o las condiciones de uso, puede ser necesario actualizarla.]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.bg12.p-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/temas/t4/pregunta.svg', alt='')
          .col-lg-9 
            p.mb-0 #[b Pregunta orientadora:] ¿los referentes utilizados para evaluar el sistema continúan vigentes y son aplicables al caso analizado?


    .fondo04.p-4.mb-3(data-aos="fade-right")
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
              h3.bg2.py-2.w-card-text.text-white Derechos humanos, equidad, transparencia, seguridad y responsabilidad
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-7.mb-3 
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t5/img08.svg")
            .col-lg-10 
              p La #[b Recomendación de la UNESCO sobre la Ética de la Inteligencia Artificial], adoptada en 2021, plantea principios relacionados con los derechos humanos y la dignidad. Entre ellos se encuentran la equidad, la no discriminación, la privacidad, la seguridad, la transparencia, la supervisión humana, la responsabilidad y la sostenibilidad.
          p Estos principios pueden convertirse en criterios concretos para identificar riesgos. Por ejemplo, la #[b equidad] permite analizar si determinados grupos podrían verse afectados de manera desproporcionada. La #[b transparencia] lleva a preguntar si las personas conocen cuándo interactúan con un sistema de IA y qué función cumple. La explicabilidad permite determinar qué información necesitan los responsables para comprender las limitaciones y los resultados del sistema.
          p La #[b seguridad] implica proteger los datos, sistemas e integraciones frente a accesos no autorizados o manipulaciones. La responsabilidad exige identificar quién tiene la autoridad para tomar decisiones, corregir resultados y responder ante un incidente. Por su parte, la sostenibilidad amplía el análisis hacia los posibles efectos ambientales y sociales asociados con la tecnología.
        
        .col-lg-4.col-10.mb-3.col-md-6
          img(src='@/assets/curso/temas/t5/img07.svg', alt='')
        p De esta manera, la ética deja de ser únicamente una declaración de principios y se convierte en una herramienta para formular preguntas durante la evaluación.

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5.mb-3.col-12
        img(src='@/assets/curso/temas/t5/img09.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t5/img10.svg', alt='')
          .col-lg-10 
            h5 Por ejemplo:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                | ¿El sistema puede afectar de manera desigual a algún grupo?
              li.d-flex
                i.fas.fa-angle-right2
                | ¿Las personas conocen que están interactuando con IA?
              li.d-flex
                i.fas.fa-angle-right2
                | ¿Es posible explicar las limitaciones del resultado?
              li.d-flex
                i.fas.fa-angle-right2
                | ¿Existe una forma de corregir un resultado incorrecto?
              li.d-flex
                i.fas.fa-angle-right2
                | ¿Quién responde si se presenta un incidente?

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Documentación y manejo seguro de la información

    .row.justify-content-center.mb-3.bg8.g-0(data-aos="fade-right")
      .col-lg-5.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t5/img11.png', alt='')
      .col-lg-7
        .row.mb-0.p-4.p-lg-5
          .col-lg-2.mb-3.col-5.col-md-3
            img(src='@/assets/curso/temas/t5/img12.svg', alt='')
          .col-lg-12.text-white
            p La evaluación de riesgos debe dejar #[b evidencia]. Documentar permite conocer qué sistema fue analizado, cuál era su propósito, qué información utilizaba, qué riesgos fueron identificados y quién era responsable de gestionarlos.

            p.mb-0 Un registro puede incluir datos como la identificación del riesgo, caso de uso, proceso o activo relacionado, fuente o causa, evento, consecuencias, categoría, controles existentes, responsable y estado del tratamiento. Posteriormente, pueden incorporarse la probabilidad, el impacto y el riesgo residual, de acuerdo con la metodología utilizada por la organización.
       
    p La documentación también debe mantener #[b trazabilidad.] Si cambia el modelo, el proveedor, la finalidad o las condiciones de uso, debe ser posible determinar qué aspectos de la evaluación necesitan actualizarse.
    p Además, los propios registros de riesgos pueden contener información confidencial. Por ejemplo, una evaluación podría incluir nombres de sistemas, arquitectura tecnológica, vulnerabilidades o información contractual. Por ello, estos documentos deben protegerse mediante controles de acceso y manejo seguro de la información.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Un caso para integrar los conceptos

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/temas/t5/img13.png', alt='')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-6.mb-3.bg10.p-4
        p Una institución utiliza un asistente generativo para apoyar la creación de un sitio web. El sistema depende de un proveedor externo, utiliza un modelo generativo, es empleado por desarrolladores y tiene acceso a repositorios de código.
        p.mb-0 Durante la evaluación se identifica que el asistente puede procesar información almacenada en los archivos del repositorio y que no existe una política clara para diferenciar el código público de la información confidencial.
      .col-lg-6 
        p A partir de esta situación puede formularse el siguiente escenario de riesgo:
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-angle-right2
            p.mb-0 #[b Fuente:] acceso del asistente a archivos del repositorio sin una clasificación clara de la información.
          li.d-flex.mb-0
            i.fas.fa-angle-right2
            p.mb-0 #[b Evento:] envío accidental de información confidencial al proveedor externo.
          li.d-flex.mb-0
            i.fas.fa-angle-right2
            p.mb-0 #[b Consecuencia:] exposición no autorizada de información y posibles afectaciones contractuales o reputacionales.
          li.d-flex.mb-0
            i.fas.fa-angle-right2
            p.mb-0 #[b Controles por revisar:] permisos de acceso, clasificación de la información, configuración de la herramienta, condiciones del proveedor y revisión de las salidas.
    p(data-aos="fade-right") Este ejemplo permite integrar los referentes éticos y normativos con el proceso de gestión de riesgos. La pregunta ya no es únicamente #[b “¿qué puede fallar?”], sino también #[b “¿qué derechos, obligaciones, principios y controles deben considerarse para prevenir o responder ante esa situación?”.]

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
