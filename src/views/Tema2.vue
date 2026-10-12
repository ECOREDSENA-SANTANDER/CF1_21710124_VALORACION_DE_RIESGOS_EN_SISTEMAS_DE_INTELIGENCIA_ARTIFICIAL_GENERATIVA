<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contexto organizacional y caracterización del sistema

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una herramienta de inteligencia artificial generativa adquiere un significado particular cuando se utiliza dentro de un proceso real. Por esta razón, después de conocer sus capacidades y limitaciones, es necesario #[b analizar cómo, para qué, con qué información y bajo qué condiciones será utilizada.]
          br
          | Esta caracterización permite delimitar el sistema que será analizado, identificar las personas y recursos involucrados, reconocer la información que interviene y establecer dónde podrían presentarse consecuencias. De esta manera, la gestión de riesgos parte de una situación concreta y no solamente de las características generales de la tecnología.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Proceso de negocio, objetivo del caso, alcance, partes interesadas y criterios de éxito
    p El #[b proceso de negocio] corresponde al conjunto organizado de actividades que una organización desarrolla para alcanzar un resultado. En una institución de formación pueden existir procesos relacionados con el diseño curricular, la matrícula, la orientación al aprendiz, la evaluación, la certificación, la gestión administrativa, la contratación o el desarrollo tecnológico.
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-down")
      .col-lg-5.mb-3.col-md-9.col-11
        img(src='@/assets/curso/temas/t2/IMG02.png', alt='')
      .col-lg-7
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-2.col-md-2.mb-3.col-4
            img(src='@/assets/curso/temas/t2/img02.svg', alt='')
          .col-lg-10
            p Un #[b caso de uso de IA generativa] describe de manera concreta cómo participa el sistema dentro de uno de estos procesos. Por ejemplo, no es suficiente indicar que una institución “utiliza inteligencia artificial”. Una descripción más precisa sería: utilizar un asistente generativo para producir borradores de retroalimentación académica que posteriormente serán revisados por un instructor.
        p El #[b objetivo] establece qué se espera lograr con el uso de la herramienta. Puede estar relacionado con reducir tiempos de elaboración, facilitar el acceso a información, apoyar la productividad o generar recursos para una actividad. Los criterios de éxito permiten comprobar posteriormente si el caso de uso cumple el propósito establecido y si lo hace manteniendo los controles necesarios.
      p El #[b alcance] delimita qué actividades, usuarios, datos, funciones y ambientes serán considerados en el análisis. Esta delimitación evita realizar evaluaciones demasiado generales. Por ejemplo, si una institución utiliza una misma plataforma para elaborar material educativo y generar código de programación, cada uso puede requerir un análisis diferente, debido a que cambian la información procesada, las posibles consecuencias y los controles necesarios.
      p Las #[b partes interesadas] son las personas o grupos que participan en el sistema, lo administran, lo supervisan o pueden verse afectados por sus resultados. Pueden incluir aprendices, instructores, administradores tecnológicos, responsables de seguridad de la información, proveedores, directivos, titulares de datos y usuarios externos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg")
          h3.bg3.py-2.w-card-text1 Para caracterizar un caso de uso, conviene responder:

    .row.justify-content-center.align-items-center.mb-4.bg4.p-4(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-9.col-md-7
        img(src="@/assets/curso/temas/t2/img03.svg")
      .col-lg-6
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-angle-right2
            | ¿Qué proceso se desea apoyar?

          li.d-flex
              i.fas.fa-angle-right2
              | ¿Para qué se utilizará la IA generativa?

          li.d-flex
              i.fas.fa-angle-right2
              | ¿Quiénes utilizarán el sistema?

          li.d-flex
              i.fas.fa-angle-right2
              | ¿Qué información procesará?

          li.d-flex
              i.fas.fa-angle-right2
              | ¿Qué resultado se espera obtener?

          li.d-flex
              i.fas.fa-angle-right2
              | ¿Qué ocurriría si el resultado es incorrecto?

          li.d-flex
              i.fas.fa-angle-right2
              | ¿Cómo se determinará si el caso de uso cumple su propósito?

    p Estas preguntas ayudan a transformar una descripción general de la tecnología en un caso de uso concreto y evaluable.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Componentes del sistema Datos, modelo, instrucciones, interfaces, usuarios, salidas, integraciones, infraestructura y proveedor

    p Un sistema de inteligencia artificial generativa no está compuesto únicamente por el modelo que genera contenido. Su funcionamiento depende de diferentes elementos que interactúan entre sí. Identificarlos permite comprender cómo circula la información dentro del sistema, qué recursos intervienen y dónde pueden presentarse situaciones que requieran controles.

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.mb-3 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Los datos")
            .col-md-12.mb-4.mb-md-0
              p Corresponden a la información que interviene en las diferentes etapas del sistema. Pueden incluir información utilizada para desarrollar o adaptar el modelo, datos introducidos directamente por los usuarios, documentos recuperados de fuentes institucionales o contenidos generados durante una interacción. Por ello, es necesario determinar qué tipo de información se procesa y si corresponde a información pública, interna, confidencial, personal o sensible.

          .row(titulo="El modelo")
            .col-md-12.mb-4.mb-md-0
              p Es el componente computacional que procesa las entradas y genera los resultados. Puede ser desarrollado y administrado por la propia organización o utilizarse mediante un servicio proporcionado por un tercero. Cuando interviene un proveedor externo, también deben considerarse aspectos relacionados con la dependencia del servicio, las condiciones de uso, las actualizaciones y las responsabilidades de cada parte.

          .row(titulo="Las instrucciones o <i>prompts</i>")
            .col-md-12.mb-4.mb-md-0
              p Orientan la respuesta que se espera obtener del sistema. Pueden ser instrucciones configuradas previamente por los desarrolladores o solicitudes formuladas directamente por los usuarios. En sistemas integrados, también pueden incorporarse instrucciones de manera indirecta a partir de documentos, páginas web u otras fuentes externas. Por esta razón, es importante analizar qué información contienen las instrucciones y de dónde provienen.

          .row(titulo="La interfaz")
            .col-md-12.mb-4.mb-md-0
              p Es el medio mediante el cual los usuarios interactúan con el sistema. Puede ser una aplicación web, un chatbot, un complemento de #[em software] o una función incorporada a otra plataforma. Además de facilitar la interacción, la interfaz determina en buena medida qué funciones están disponibles y qué información puede introducirse, consultarse o recuperarse.
      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/temas/t2/img04.png', alt='')

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/img05.png', alt='')
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Los usuarios")
            .col-md-12.mb-4.mb-md-0
              p Son las personas que interactúan con el sistema, proporcionan instrucciones, reciben resultados o toman decisiones a partir de ellos. Pueden tener diferentes roles y niveles de autorización. Por ejemplo, un instructor puede utilizar la herramienta para elaborar un borrador de retroalimentación, mientras que un administrador puede encargarse de configurar permisos y accesos. Por ello, es necesario establecer qué puede hacer cada usuario y cuáles son sus responsabilidades.

          .row(titulo="Las salidas")
            .col-md-12.mb-4.mb-md-0
              p Corresponden a los contenidos o resultados generados por el sistema. Pueden ser textos, imágenes, código, resúmenes, recomendaciones u otros tipos de contenido. Para gestionar sus riesgos es necesario determinar qué ocurre después de su generación. Un resultado utilizado únicamente como borrador tiene consecuencias diferentes a otro que se publica directamente, se incorpora a un documento institucional o activa automáticamente una acción.

          .row(titulo="Las integraciones")
            .col-md-12.mb-4.mb-md-0
              p Permiten conectar la inteligencia artificial con otros sistemas o fuentes de información. Por ejemplo, un asistente puede acceder a documentos institucionales, bases de datos, correo electrónico o repositorios de código. Estas conexiones pueden ampliar las capacidades de la solución, pero también aumentar la exposición de la información cuando se asignan permisos que no son necesarios para cumplir la finalidad prevista.

          .row(titulo="La infraestructura")
            .col-md-12.mb-4.mb-md-0
              p Comprende los recursos tecnológicos necesarios para que la solución funcione. Entre ellos se encuentran los servicios de nube, redes, almacenamiento, dispositivos y APIs. Estos elementos permiten procesar, almacenar y transmitir la información. Por ello, aspectos como la disponibilidad, la seguridad, la capacidad y la continuidad del servicio también deben formar parte del análisis.

          .row(titulo="El proveedor")
            .col-md-12.mb-4.mb-md-0
              p Es el tercero que suministra alguno de los elementos necesarios para operar la solución, como el modelo, la plataforma, el almacenamiento o servicios tecnológicos asociados. Cuando existe dependencia de un proveedor, es importante conocer las condiciones del servicio, el tratamiento de los datos, las medidas de seguridad, las modificaciones que puede realizar y las responsabilidades establecidas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white ¿Cómo se relacionan estos componentes?

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-down")
      .col-lg-5.mb-3.col-md-9.col-11
        img(src='@/assets/curso/temas/t2/img06.png', alt='')
      .col-lg-7
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-2.col-md-2.mb-3.col-4
            img(src='@/assets/curso/temas/t2/img07.svg', alt='')
          .col-lg-10
            p Los componentes funcionan de manera conjunta. Por ejemplo, un instructor puede ingresar una solicitud mediante una #[b interfaz]; esa solicitud contiene unas #[b instrucciones] que son procesadas por un #[b modelo], posiblemente utilizando determinados datos. 
        p El sistema genera una #[b salida] que posteriormente puede ser revisada por el usuario o enviada a otro sistema mediante una #[b integración]. Todo este proceso depende de una #[b infraestructura] y, cuando la solución es suministrada por un tercero, también de un #[b proveedor.]

    p Comprender esta relación permite analizar el sistema de manera integral. Un riesgo no necesariamente se encuentra en el modelo; también puede originarse en los datos utilizados, los permisos asignados a los usuarios, una integración innecesaria, una instrucción maliciosa, una salida que no sea revisada o una dependencia tecnológica.

    .row.justify-content-center.align-items-center.mb-0.bg5.p-4(data-aos="zoom-in-left")
      .col-lg-10
        p.mb-0 Por ello, antes de evaluar los riesgos, es importante responder una pregunta central: #[b ¿qué componentes intervienen, cómo se relacionan y qué función cumple cada uno dentro del caso de uso?] Esta caracterización permite avanzar hacia la identificación de los activos, dependencias y puntos críticos del sistema.






















































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
