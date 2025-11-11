<template>
  <section
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto mb-20"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Recept Generator 2.0
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        Frontendontwikkeling & Agile samenwerking
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
        Tijdens mijn stage bij AH Labs werkte ik als front-end developer aan de interne webapplicatie Recept Generator 2.0.
        Deze tool ondersteunt de teams van Allerhande (Albert Heijn) bij het maken en beheren van recepten.
      </p>

      <p>
        Het project werd uitgevoerd in een agile team bestaande uit backend developers en een UX-designer.
        Er werd gewerkt in sprints van twee weken volgens de Scrum-methode, met vaste momenten voor stand-ups, planningen en retrospectives.
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li>
          Mijn rol: Ontwikkelen van de frontend in React op basis van UX-designs.
          Denk aan componenten en interacties met de backend.
        </li>
        <li>
          Samenwerking: Overleg met backend- en UX-designers om data en ontwerp goed op elkaar af te stemmen.
        </li>
        <li>
          Scrum: Actieve deelname aan stand-ups, sprintplanningen en refinements binnen het team.
        </li>
        <li>
          Codekwaliteit: Betrokken bij code-reviews en verbeteringen in structuur en herbruikbaarheid van het project.
        </li>
      </ul>

      <p>
        Dankzij de goede samenwerking en duidelijke planning werd de applicatie op tijd opgeleverd en voldeed aan de verwachtingen van de stakeholders.
      </p>

      <p>
        Dit project heeft mij verder gebracht in het bouwen van schaalbare React-applicaties en het werken binnen een professioneel agile team.
      </p>

      <p><strong>Gebruikte tools en werkwijzen:</strong> React, TypeScript, Agile/Scrum</p>
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
