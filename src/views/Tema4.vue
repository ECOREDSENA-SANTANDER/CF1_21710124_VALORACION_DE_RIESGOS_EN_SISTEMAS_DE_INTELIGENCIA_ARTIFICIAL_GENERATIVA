<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Categorías de riesgo en inteligencia artificial generativa

    .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los riesgos de la inteligencia artificial generativa (IAG) pueden organizarse en diferentes categorías para facilitar su identificación y análisis. Estas categorías no significan que todos los sistemas presenten los mismos riesgos. Su utilidad consiste en orientar al aprendiz sobre los aspectos que conviene revisar según el #[b propósito, los datos, los usuarios, las salidas y el contexto de uso] del sistema.
        p El #[em Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile] del NIST (AI 600-1) identifica diferentes riesgos asociados con la IAG, entre ellos la confabulación, la privacidad de los datos, la seguridad de la información, los sesgos, la propiedad intelectual, la procedencia del contenido y los riesgos relacionados con la interacción entre las personas y los sistemas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Información incorrecta, dependencia excesiva y automatización inadecuada

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-down")
      .col-lg-5.mb-3.col-md-10.col-11
        img(src='@/assets/curso/temas/t4/img02.png', alt='')
      .col-lg-7
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-2.col-md-3.mb-3.col-4
            img(src='@/assets/curso/temas/t4/img03.svg', alt='')
          .col-lg-10
            p Un sistema generativo puede producir información incorrecta y presentarla de manera convincente. Este fenómeno se conoce como #[b confabulación] y puede incluir datos inexistentes, referencias incorrectas, explicaciones no sustentadas o respuestas construidas a partir de información incompleta.
        p.mb-0 Por ejemplo, un asistente podría generar una característica técnica inexistente sobre una herramienta de ciberseguridad. Si el instructor revisa la información antes de utilizarla, el error puede detectarse. Si el contenido se publica automáticamente, podría llegar a los aprendices y generar información incorrecta.
        p Otro riesgo aparece cuando las personas confían demasiado en las respuestas del sistema. La #[b dependencia excesiva] puede disminuir la revisión profesional y el pensamiento crítico, especialmente cuando las respuestas parecen completas o están redactadas con seguridad.

    p También debe analizarse la #[b automatización] inadecuada. No todas las tareas pueden delegarse por completo a un sistema de IA. Por ejemplo, una herramienta puede generar una propuesta de retroalimentación para una evidencia, pero esto no significa que pueda reemplazar automáticamente el análisis pedagógico del instructor.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.bg7.p-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/temas/t4/pregunta.svg', alt='')
          .col-lg-9 
            p.mb-0 #[b Pregunta orientadora:] ¿qué sucede con la respuesta generada después de que el sistema la produce? Esta pregunta permite identificar si existe revisión humana, validación de fuentes o una acción automática asociada con la salida.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg")
          h3.bg3.py-2.w-card-text1 Sesgos, homogenización, discriminación y afectación de derechos

    .row.justify-content-center.mb-3.bg8.g-0(data-aos="fade-right")
      .col-lg-5.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img04.png', alt='')
      .col-lg-7
        .row.mb-0.p-4.p-lg-5
          .col-lg-2.mb-3.col-5.col-md-3
            img(src='@/assets/curso/temas/t4/img05.svg', alt='')
          .col-lg-12.text-white
            p Los sesgos pueden aparecer en los datos, durante el desarrollo del sistema o en el contexto en el que se utiliza. Como resultado, una herramienta puede representar de manera desigual a determinados grupos o reproducir asociaciones estereotipadas.
            p La homogenización puede presentarse cuando una misma herramienta se utiliza de manera generalizada y produce contenidos muy similares. En un contexto educativo, por ejemplo, utilizar una única herramienta para generar materiales podría reducir la diversidad de enfoques, ejemplos y estrategias pedagógicas.
            p.mb-0 La discriminación requiere especial atención cuando los resultados de la IA influyen en decisiones relacionadas con personas. El riesgo aumenta cuando el sistema interviene en procesos como selección, clasificación, acceso a oportunidades o evaluación.

    p Por esta razón, el análisis no debe limitarse a determinar si una respuesta es técnicamente correcta. También es necesario preguntarse #[b a quién puede afectar, de qué manera y si el resultado puede generar un trato desigual o vulnerar derechos.]
    p Por ejemplo, una herramienta que genere imágenes para representar diferentes profesiones podría mostrar repetidamente determinados perfiles demográficos asociados con ciertas ocupaciones. Aunque cada imagen parezca adecuada de manera individual, el patrón puede reforzar estereotipos.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.bg9.p-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/temas/t4/pregunta.svg', alt='')
          .col-lg-9 
            p.mb-0 #[b Pregunta orientadora:] ¿el sistema podría producir resultados diferentes o desfavorables para determinados grupos de personas?

    .fondo04.p-4.mb-3(data-aos="fade-right")
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
              h3.bg2.py-2.w-card-text.text-white Privacidad, exposición de datos, seguridad e inyección de instrucciones
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-7.mb-3 
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-4.col-md-3
              img(src="@/assets/curso/temas/t4/img08.svg")
            .col-lg-10 
              p Los sistemas generativos pueden procesar información proporcionada directamente por los usuarios o recibida mediante integraciones con otros sistemas. Por ello, es necesario identificar qué datos ingresan, dónde se procesan y quién puede acceder a ellos.
          p Por ejemplo, un funcionario podría copiar un documento que contiene nombres, números de identificación y datos de contacto en una herramienta externa para solicitar un resumen. Aunque la actividad parezca sencilla, puede implicar el tratamiento de datos por parte de un tercero y generar una exposición no prevista.
          p La #[b inyección de instrucciones], también conocida como #[em prompt injection], constituye otro riesgo de seguridad. Se presenta cuando una entrada consigue modificar el comportamiento esperado del modelo o influir en sus respuestas de una manera no prevista.
          p Este tipo de situación puede producirse directamente mediante una instrucción del usuario o indirectamente a través de documentos, páginas web u otros contenidos que el sistema procesa.
          p Por ejemplo, un asistente institucional puede consultar documentos almacenados en un repositorio. Si uno de esos documentos contiene instrucciones maliciosas, estas podrían intentar modificar el comportamiento del sistema y hacer que ignore determinadas reglas.
        .col-lg-4.col-10.mb-3.col-md-6
          img(src='@/assets/curso/temas/t4/img07.svg', alt='')
        p Por ejemplo, un asistente institucional puede consultar documentos almacenados en un repositorio. Si uno de esos documentos contiene instrucciones maliciosas, estas podrían intentar modificar el comportamiento del sistema y hacer que ignore determinadas reglas.

    p Por ello, proteger un sistema de IA no consiste únicamente en controlar contraseñas. También es necesario revisar #[b las instrucciones, los permisos, las integraciones, las fuentes de información y las acciones que el sistema puede ejecutar.]

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.bg10.p-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/temas/t4/pregunta.svg', alt='')
          .col-lg-9 
            p.mb-0 #[b Pregunta orientadora:] Pregunta orientadora: ¿qué información puede ingresar al sistema y qué podría hacer la herramienta con ella?

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/temas/t4/img03.png', alt='')


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Contenido dañino, desinformación, suplantación, propiedad intelectual y procedencia

    p La capacidad de generar contenidos realistas puede facilitar la creación de información engañosa o perjudicial. Esto incluye textos falsos, imágenes fabricadas, voces clonadas o videos sintéticos que pueden presentarse como si correspondieran a hechos reales.
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-3.mb-3.col-9.col-md-6
        img(src='@/assets/curso/temas/t4/img05.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.bg11.p-4.mb-3
          .col-lg-8.mb-3 
            p La #[b suplantación] adquiere especial relevancia cuando la tecnología permite generar contenido que imita la voz, imagen o forma de comunicación de una persona identificable.
            p.mb-0 También es necesario analizar la #[b propiedad intelectual]. Antes de utilizar una herramienta generativa, la organización debe considerar las condiciones de uso del proveedor, las licencias aplicables, los derechos asociados con los materiales utilizados y las condiciones para emplear posteriormente los contenidos generados.
          .col-lg-4.col-md-6
            img(src='@/assets/curso/temas/t4/img06.svg', alt='')
        p La procedencia del contenido permite conocer, en la medida de lo posible, su origen y las transformaciones que ha experimentado. Este aspecto adquiere importancia cuando es necesario diferenciar entre un contenido original, uno generado artificialmente y uno que ha sido modificado.

    p En un contexto educativo, por ejemplo, puede ser importante documentar cuándo un recurso fue elaborado con apoyo de IA y qué función cumplió la herramienta. Esto favorece la transparencia y facilita la revisión del proceso.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.bg12.p-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2.mb-3
            img.d-none.d-lg-block(src='@/assets/curso/temas/t4/pregunta.svg', alt='')
          .col-lg-9 
            p.mb-0 #[b Pregunta orientadora:] ¿es posible identificar de dónde proviene el contenido y qué participación tuvo la IA en su elaboración?
    
    img(src='@/assets/curso/temas/t4/podcast.png', alt='')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones.mb-3.p-3(
            texto="Pódcast: riesgos operacionales, legales, contractuales, reputacionales, ambientales y de terceros"
            :audio="require_src('@/assets/curso/temas/t4/podcast.png')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 Para ampliar los conocimientos sobre estas categorías de riesgo en inteligencia artificial.




























</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
