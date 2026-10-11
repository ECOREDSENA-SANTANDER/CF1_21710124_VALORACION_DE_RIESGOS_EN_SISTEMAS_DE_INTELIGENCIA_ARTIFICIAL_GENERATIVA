<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.mb-3.col-md-9.col-11
        img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col-lg-7
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-2.col-md-2.mb-3.col-3
            img(src='@/assets/curso/temas/intro/img02.svg', alt='')
          .col-lg-10
            p La inteligencia artificial generativa se ha incorporado en diferentes ámbitos debido a su capacidad para generar textos, imágenes, audio, video, código y otros contenidos. Aunque ofrece oportunidades para apoyar la creatividad, automatizar tareas y mejorar procesos, también plantea riesgos relacionados con la exactitud de los resultados, los sesgos, la privacidad, la seguridad de la información, la propiedad intelectual y la dependencia tecnológica.
        p Este componente formativo permite reconocer las características, componentes, actores y dependencias de los sistemas de inteligencia artificial generativa, así como identificar y analizar posibles riesgos en diferentes contextos organizacionales. Para ello, se abordan referentes como el NIST Artificial Intelligence Risk Management Framework (AI RMF) y su perfil para inteligencia artificial generativa, las normas ISO/IEC 23894:2023 e ISO/IEC 42001:2023, la Recomendación sobre la Ética de la Inteligencia Artificial de la UNESCO y el Documento CONPES 4144 de 2025, entre otros referentes relacionados con la protección de datos personales.
      p(data-aos="fade-down") La apropiación de estos conocimientos permitirá que el aprendiz analice casos de uso, identifique datos, modelos, instrucciones, integraciones y proveedores, y reconozca amenazas, vulnerabilidades, impactos y escenarios de riesgo. De esta manera, podrá desarrollar criterios para comprender que los riesgos de la inteligencia artificial dependen de factores relacionados con su diseño, implementación, uso, supervisión y contexto organizacional.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
