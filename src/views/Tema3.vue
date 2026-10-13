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

    .row.justify-content-center.align-items-center.mb-3.bg10.p-4
      .col-lg-6.mb-3
        img(src='@/assets/curso/temas/t3/1.svg', alt='')
      .col-lg-6
        h5 Por ejemplo:
        p.mb-0 Falta de restricciones sobre los datos → un funcionario introduce información personal en un servicio externo de IA → posible exposición o tratamiento no autorizado de los datos.

    p A partir de esta relación se pueden comprender los principales conceptos:


    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/2.svg' alt='')
        h4.text-center Riesgo
        p Es el efecto de la incertidumbre sobre los objetivos. En un sistema de IA, el riesgo puede relacionarse con personas, información, procesos, obligaciones, resultados o recursos de la organización. ISO/IEC 23894:2023 proporciona orientación para integrar la gestión de riesgos de IA en las actividades de las organizaciones.
      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/3.svg' alt='')
        h4.text-center Fuente de riesgo
        p Es el elemento que puede originar una situación de riesgo. Puede encontrarse en los datos, el modelo, un usuario, una integración, el proveedor o las condiciones del entorno.

      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/4.svg' alt='')
        h4.text-center Amenaza
        p Es una circunstancia o agente que puede producir un efecto perjudicial. Por ejemplo, una persona que intenta utilizar una cuenta sin autorización o una instrucción maliciosa incorporada a una fuente externa.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/5.svg' alt='')
        h4.text-center Vulnerabilidad
        p Es una condición que puede facilitar que una amenaza produzca efectos. Por ejemplo, la ausencia de controles de acceso o la falta de un procedimiento para verificar los resultados generados.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/6.svg' alt='')
        h4.text-center Evento
        p Es aquello que podría ocurrir. Por ejemplo, un sistema genera una referencia normativa inexistente y esta se incorpora a un material educativo sin validación.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/7.svg' alt='')
        h4.text-center Probabilidad
        p Representa la posibilidad de que ocurra un determinado evento.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/8.svg' alt='')
        h4.text-center Impacto
        p Expresa la magnitud de los efectos que podrían producirse si el evento ocurre.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/9.svg' alt='')
        h4.text-center Consecuencia
        p Corresponde al resultado o efecto derivado del evento. Puede afectar aspectos académicos, operacionales, legales, financieros, reputacionales, de seguridad o relacionados con los derechos de las personas.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/10.svg' alt='')
        h4.text-center Control
        p Es una medida que permite modificar el riesgo. Puede prevenir que ocurra un evento, detectarlo cuando sucede o ayudar a reducir sus efectos. Por ejemplo, exigir la validación de las referencias antes de publicar un contenido generado mediante IA.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/11.svg' alt='')
        h4.text-center Riesgo inherente
        p Corresponde al riesgo existente antes de considerar determinados controles.


      .tarjeta.bg14.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.col-md-6
            img(src='@/assets/curso/temas/t3/12.svg' alt='')
        h4.text-center Riesgo residual
        p Es el riesgo que permanece después de aplicar los controles establecidos. Esto permite comprender que un control puede reducir un riesgo, pero no necesariamente eliminar toda incertidumbre.
 
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.col-md-5.mb-3
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon1(src="@/assets/curso/temas/t2/ico2.svg" alt='')
              h3.bg3.py-2.w-card-text1 Un ejemplo completo

        .bg9.p-4
          p Una forma sencilla de relacionar estos conceptos es analizar el siguiente caso:
          p.mb-0 Una institución utiliza IA generativa para elaborar materiales de formación. El sistema puede producir referencias bibliográficas que no corresponden a fuentes reales. Si no existe un procedimiento de verificación, el contenido incorrecto podría llegar a los aprendices.
      .col-lg-8
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














</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
