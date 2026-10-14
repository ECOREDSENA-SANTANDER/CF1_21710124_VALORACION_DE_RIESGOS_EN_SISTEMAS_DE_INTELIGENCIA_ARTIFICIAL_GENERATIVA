<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Identificación y definición de los problemas en el trabajo

    .bloque-texto-g.bloque-texto-g--inverso.bg0006.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left") 
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Una vez caracterizado el sistema de inteligencia artificial, el siguiente paso es identificar #[b qué podría salir mal, por qué podría ocurrir y qué consecuencias tendría.]
            br 
            br
            | Para hacerlo de manera organizada, es necesario utilizar conceptos comunes de gestión de riesgos. Estos conceptos permiten describir una situación de forma clara y establecer posteriormente qué medidas pueden aplicarse para prevenirla, detectarla o reducir sus efectos.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Conceptos básicos para identificar un riesgo

    p Para analizar un riesgo de IA, pueden relacionarse varios elementos:

    .row.justify-content-center.align-items-center.mb-3.bg10.p-4(data-aos="zoom-in-left")
      .col-lg-6.mb-3
        img(src='@/assets/curso/temas/t3/1.svg', alt='')
      .col-lg-6
        h5 Por ejemplo:
        p.mb-0 Falta de restricciones sobre los datos → un funcionario introduce información personal en un servicio externo de IA → posible exposición o tratamiento no autorizado de los datos.

    p A partir de esta relación se pueden comprender los principales conceptos:


    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/2.svg' alt='')
        h4.text-center Riesgo
        p Es el efecto de la incertidumbre sobre los objetivos. En un sistema de IA, el riesgo puede relacionarse con personas, información, procesos, obligaciones, resultados o recursos de la organización. ISO/IEC 23894:2023 proporciona orientación para integrar la gestión de riesgos de IA en las actividades de las organizaciones.
      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/3.svg' alt='')
        h4.text-center Fuente de riesgo
        p Es el elemento que puede originar una situación de riesgo. Puede encontrarse en los datos, el modelo, un usuario, una integración, el proveedor o las condiciones del entorno.

      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/4.svg' alt='')
        h4.text-center Amenaza
        p Es una circunstancia o agente que puede producir un efecto perjudicial. Por ejemplo, una persona que intenta utilizar una cuenta sin autorización o una instrucción maliciosa incorporada a una fuente externa.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/5.svg' alt='')
        h4.text-center Vulnerabilidad
        p Es una condición que puede facilitar que una amenaza produzca efectos. Por ejemplo, la ausencia de controles de acceso o la falta de un procedimiento para verificar los resultados generados.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/6.svg' alt='')
        h4.text-center Evento
        p Es aquello que podría ocurrir. Por ejemplo, un sistema genera una referencia normativa inexistente y esta se incorpora a un material educativo sin validación.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/7.svg' alt='')
        h4.text-center Probabilidad
        p Representa la posibilidad de que ocurra un determinado evento.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/8.svg' alt='')
        h4.text-center Impacto
        p Expresa la magnitud de los efectos que podrían producirse si el evento ocurre.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/9.svg' alt='')
        h4.text-center Consecuencia
        p Corresponde al resultado o efecto derivado del evento. Puede afectar aspectos académicos, operacionales, legales, financieros, reputacionales, de seguridad o relacionados con los derechos de las personas.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/10.svg' alt='')
        h4.text-center Control
        p Es una medida que permite modificar el riesgo. Puede prevenir que ocurra un evento, detectarlo cuando sucede o ayudar a reducir sus efectos. Por ejemplo, exigir la validación de las referencias antes de publicar un contenido generado mediante IA.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/11.svg' alt='')
        h4.text-center Riesgo inherente
        p Corresponde al riesgo existente antes de considerar determinados controles.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/12.svg' alt='')
        h4.text-center Riesgo residual
        p Es el riesgo que permanece después de aplicar los controles establecidos. Esto permite comprender que un control puede reducir un riesgo, pero no necesariamente eliminar toda incertidumbre.
 
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-4.col-md-12.mb-3
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg" alt='')
              h3.bg3.py-2.w-card-text1 Un ejemplo completo

        .bg9.p-5
          p Una forma sencilla de relacionar estos conceptos es analizar el siguiente caso:
          p.mb-0 Una institución utiliza IA generativa para elaborar materiales de formación. El sistema puede producir referencias bibliográficas que no corresponden a fuentes reales. Si no existe un procedimiento de verificación, el contenido incorrecto podría llegar a los aprendices.
      .col-lg-8.d-none.d-lg-block
        .row.align-items-end
          .col-lg-5.col-md-3.col-8.mb-3
            img(src='@/assets/curso/temas/t3/img02.svg' alt='Ilustración de inteligencia artificial')

          .col-lg-7.col-md-12.mb-2
            .row.justify-content-start.mb-4(data-aos="zoom-in-left")
              .col-sm-12.col-lg-12
                .d-flex.align-items-center
                  img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg" alt='')
                  h3.bg3.py-2.w-card-text1 En este caso

            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[strong Fuente:] sistema de IA generativa.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[strong Vulnerabilidad:] ausencia de un procedimiento de verificación.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[strong Evento:] generación y utilización de una referencia inexistente.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[strong Consecuencia:] difusión de información incorrecta.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[strong Control:] verificar las referencias antes de utilizar o publicar el material.

              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[strong Riesgo residual:] posibilidad de que permanezcan errores después de aplicar la verificación.

          .col-12.mt-2
            p Esta estructura facilita pasar de una descripción general del problema a un escenario de riesgo concreto.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white ¿Cómo se gestionan los riesgo

    p Una vez identificados los posibles escenarios, es necesario determinar cómo serán analizados y tratados. Para ello, el NIST AI RMF 1.0, publicado en 2023, propone cuatro funciones relacionadas entre sí:

    .tarjeta.bg10.p-4.pb-0.mb-4(data-aos="zoom-in-left")
      SlyderE.pb-lg-5.pb-3(tipo="a")
        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-4.mb-4.mb-md-0
            h4 Gobernar
            p Establece las condiciones para gestionar los riesgos. Incluye políticas, responsabilidades, supervisión, cultura organizacional y reglas para el uso de la inteligencia artificial. 
            h5 Pregunta orientadora:
            p ¿Quién establece las reglas y quién responde por las decisiones?
          .col-md-6.mb-md-0
            img(src='@/assets/curso/temas/t3/img03.png', alt='')
        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-4.mb-4.mb-md-0
            h4 Mapear
            p Permite comprender el contexto en el que funciona el sistema. Considera los usuarios, partes interesadas, posibles impactos, datos, procesos y condiciones de utilización.
            h5 Pregunta orientadora:
            p ¿Dónde se utiliza la IA, quiénes participan y quiénes podrían verse afectados?
          .col-md-6.mb-md-0
            img(src='@/assets/curso/temas/t3/img04.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-4.mb-4.mb-md-0
            h4 Medir
            p Consiste en analizar los riesgos identificados y el funcionamiento del sistema mediante métodos, criterios y métricas apropiadas.
            h5 Pregunta orientadora:
            p ¿Cómo se puede determinar si el riesgo está dentro de niveles aceptables?
          .col-md-6.mb-md-0
            img(src='@/assets/curso/temas/t3/img05.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4.mb-5
          .col-lg-4.mb-4.mb-md-0
            h4 Gestionar
            p Utiliza la información obtenida para establecer prioridades y definir las medidas necesarias frente a los riesgos.
            h5 Pregunta orientadora:
            p ¿Qué se debe hacer frente a los riesgos identificados?
            p Estas funciones no deben entenderse como pasos que se realizan una sola vez. La gestión de riesgos es iterativa: los resultados obtenidos pueden generar nuevos análisis, ajustes y controles.
          .col-md-6.mb-md-0
            img(src='@/assets/curso/temas/t3/img06.png', alt='')
                
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.col-md-12.mb-3
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg" alt='')
              h3.bg3.py-2.w-card-text1 Una forma sencilla de recordarlas

    .row.justify-content-center.align-items-center.mb-3.bg11.p-4(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-md-7
        img(src='@/assets/curso/temas/t3/img09.svg', alt='')
      .col-6
        img(src='@/assets/curso/temas/t3/img10.svg', alt='')

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.mb-3
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg" alt='')
              h3.bg3.py-2.w-card-text1 Marcos de referencia para la gestión de riesgos de IA

    p Existen diferentes normas y marcos que pueden apoyar la gestión de riesgos. Cada uno cumple una función particular, por lo que no es necesario estudiarlos como documentos aislados.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-9.col-md-6
        img(src='@/assets/curso/temas/t3/img11.png', alt='')
      .col-lg-9
        TabsA.color-secundario
          .tarjeta.color-acento-botones--borde.p-4(titulo="NIST AI RMF 1.0.")
            h4 NIST AI RMF 1.0.
            p Proporciona un marco general para ayudar a las organizaciones a gestionar los riesgos asociados con la inteligencia artificial mediante las funciones Gobernar, Mapear, Medir y Gestionar.

          .tarjeta.color-acento-botones--borde.p-4(titulo="NIST AI 600-1.")
            h4 NIST AI 600-1.
            p Publicado en 2024, desarrolla un perfil específico para la #[b inteligencia artificial generativa] y complementa el marco general con consideraciones relacionadas con los riesgos propios de esta tecnología.

          .tarjeta.color-acento-botones--borde.p-4(titulo="ISO/IEC 23894:2023.")
            h4 ISO/IEC 23894:2023.
            p Proporciona orientación para gestionar los riesgos relacionados con la inteligencia artificial e integrarlos en las actividades de la organización.

          .tarjeta.color-acento-botones--borde.p-4(titulo="ISO/IEC 42001:2023.")
            h4 ISO/IEC 42001:2023.
            p Establece requisitos para implementar, mantener y mejorar un #[b sistema de gestión de inteligencia artificial] dentro de una organización.

          .tarjeta.color-acento-botones--borde.p-4(titulo="ISO/IEC 5338:2023.")
            h4 ISO/IEC 5338:2023.
            p Define procesos relacionados con el #[b ciclo de vida de los sistemas de inteligencia artificial], desde las etapas iniciales hasta su retiro.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-10.p-4.bg11
        h3 ¿Qué debe aprender el aprendiz?
        p Más que memorizar los nombres de las normas, es importante comprender para qué puede utilizarse cada referente y cómo sus principios pueden apoyar el análisis de un caso concreto.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t2/ico.svg")
            h3.bg2.py-2.w-card-text.text-white Elementos de una gobernanza responsable de la inteligencia artificial


    p Gestionar una herramienta de IA no consiste únicamente en seleccionar una tecnología. También es necesario establecer reglas, responsables y mecanismos que permitan controlar su utilización.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-9.col-md-7
        img(src='@/assets/curso/temas/t3/img12.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Gobernanza")
            .col-md-12.mb-4.mb-md-0
              p Define cómo se dirige y controla el uso de la IA dentro de la organización. Establece políticas, responsabilidades, criterios de autorización y mecanismos para gestionar incidentes.
              p #[b Ejemplo:] determinar qué tipos de información pueden introducirse en una herramienta generativa institucional.

          .row(numero="2" titulo="Apetito de riesgo")
            .col-md-12.mb-4.mb-md-0
              p Representa el nivel y tipo de riesgo que una organización está dispuesta a asumir para alcanzar sus objetivos. No todos los casos de uso requieren los mismos controles.
              p #[b Ejemplo:] generar ideas para una actividad puede requerir controles diferentes a utilizar IA para apoyar una decisión que afecta directamente a una persona.

          .row(numero="3" titulo="Rendición de cuentas")
            .col-md-12.mb-4.mb-md-0
              p Permite establecer quién responde por las decisiones y acciones relacionadas con el sistema. El hecho de utilizar una herramienta automática no elimina la responsabilidad de la organización ni de las personas que intervienen en el proceso.
              p #[b Ejemplo:] si un contenido generado por IA se publica como material institucional, debe existir un responsable de su revisión y aprobación.

          .row(numero="4" titulo="Transparencia")
            .col-md-12.mb-4.mb-md-0
              p Busca proporcionar información suficiente sobre el uso de la IA, sus capacidades y sus limitaciones a las partes que necesitan conocerlas.
              p #[b Ejemplo:] informar cuando un contenido fue generado o asistido mediante IA, cuando esta información sea relevante para el contexto.

          .row(numero="5" titulo="Trazabilidad")
            .col-md-12.mb-4.mb-md-0
              p Permite reconstruir qué ocurrió durante el uso del sistema. Puede incluir registros de cambios, versiones, configuraciones, fuentes utilizadas, pruebas y responsables.
              p #[b Ejemplo:] conservar información que permita determinar quién autorizó una integración, qué configuración tenía el sistema y cuándo fue modificada.

          .row(numero="6" titulo="Supervisión humana")
            .col-md-12.mb-4.mb-md-0
              p Mantiene la capacidad de las personas para revisar, intervenir, modificar o rechazar resultados y decisiones relacionadas con la IA.
              p #[b Ejemplo:] un instructor revisa y valida una retroalimentación generada por IA antes de entregarla al aprendiz.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.mb-3
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg" alt='')
              h3.bg3.py-2.w-card-text1 Una idea para integrar los conceptos

    p Estos elementos pueden relacionarse de la siguiente manera:


    .row.justify-content-center.align-items-center.mb-3.bg11.p-4(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-md-6
        img(src='@/assets/curso/temas/t3/img13.svg', alt='')
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/img14.png', alt='')
      .col-lg-2
        p De esta manera, la gestión de riesgos de inteligencia artificial se convierte en un proceso continuo que permite #[b identificar problemas, comprender sus posibles efectos y establecer medidas para reducirlos.]






















</template>

<script>
export default {
  data: () => ({
    datosSlyder: [],
  }),
}
</script>

<style lang="sass"></style>
