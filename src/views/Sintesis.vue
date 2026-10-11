<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La identificación de riesgos en inteligencia artificial generativa comienza con una comprensión adecuada del sistema y de su contexto. No resulta suficiente reconocer la aplicación utilizada; se requiere describir el propósito del caso de uso, los contenidos generados, los datos procesados, el modelo, las instrucciones, los usuarios, las integraciones, la infraestructura, los proveedores y las partes interesadas. La observación del ciclo de vida permite además reconocer que los riesgos pueden aparecer o cambiar durante la planeación, adquisición, implementación, operación, monitoreo y retiro. Esta caracterización proporciona la base necesaria para construir escenarios en los que se relacionan fuentes, amenazas, vulnerabilidades, eventos, consecuencias y controles.

    p La gestión responsable exige complementar la comprensión tecnológica con marcos de referencia y criterios éticos, jurídicos y organizacionales. NIST AI RMF y su perfil para IA generativa proporcionan criterios para gobernar, mapear, medir y gestionar riesgos; ISO/IEC 23894, ISO/IEC 42001 e ISO/IEC 5338 aportan orientaciones sobre riesgo, gestión y ciclo de vida; mientras UNESCO y los referentes colombianos fortalecen la consideración de derechos humanos, datos personales, transparencia, equidad, sostenibilidad y responsabilidad. De esta manera, el aprendiz desarrolla una visión crítica que permite aprovechar las oportunidades de la IA generativa sin desconocer sus limitaciones y posibles impactos.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Sintetiza el proceso de identificación y caracterización de los sistemas de inteligencia artificial generativa, la clasificación de las categorías de riesgo, los principales marcos de referencia, la gestión de los riesgos identificados y la documentación necesaria para su seguimiento y control. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
