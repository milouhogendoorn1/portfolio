<template>
  <section
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Recept Generator 2.0
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        Frontendontwikkeling in React
      </p>
    </header>

    <figure class="mb-8">
      <img
          src="/img/portfolio-recipe.png"
          alt="Screenshot van de Recept Generator 2.0"
          class="rounded-xl w-full max-w-3xl mx-auto shadow-lg"
      />
      <figcaption class="mt-2 text-center text-sm text-fuchsia-300">
        Interface van de Recept Generator 2.0
      </figcaption>
    </figure>

    <article class="space-y-6 text-white text-justify text-sm md:text-lg leading-relaxed">
      <p>
        De <strong>Recept Generator 2.0</strong> is een interne tool voor <strong>Allerhande (Albert Heijn)</strong>, ontwikkeld om het maken en beheren van recepten te ondersteunen.
        Het project werd uitgevoerd in een multidisciplinair team waarin AI, backend en frontend samenkwamen.
      </p>

      <p>
        Binnen dit project was ik verantwoordelijk voor de <strong>frontendontwikkeling</strong>.
        Op basis van aangeleverde ontwerpen heb ik de gebruikersinterface gebouwd met <strong>React</strong> en <strong>TypeScript</strong>.
        Mijn werk richtte zich op het vertalen van het ontwerp naar een functionele en goed gestructureerde webapplicatie.
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li>
          <strong>Implementatie:</strong> Opzetten en uitwerken van componenten in React met aandacht voor herbruikbaarheid en consistentie.
        </li>
        <li>
          <strong>Teamwerking:</strong> Werken in een <strong>agile</strong> omgeving met dagelijkse stand-ups, sprints en code reviews.
        </li>
        <li>
          <strong>Samenwerking:</strong> Nauwe afstemming met backend- en AI-ontwikkelaars om de frontend goed te integreren binnen het grotere systeem.
        </li>
      </ul>

      <p>
        Dit project gaf mij ervaring met werken in een professionele ontwikkelomgeving en leerde mij hoe belangrijk samenwerking en codekwaliteit zijn binnen grotere softwareprojecten.
      </p>

      <p><strong>Gebruikte tools:</strong> React, TypeScript</p>
    </article>

    <footer class="mt-10 text-center">
      <router-link
          to="/portfolio"
          class="text-fuchsia-400 hover:text-fuchsia-300"
      >← Ga terug naar projecten</router-link>
    </footer>
  </section>
</template>

<script setup>
</script>

<style scoped>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
