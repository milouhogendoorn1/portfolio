<template>
  <section
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Promo Scraper
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        Frontendontwikkeling & Agile samenwerking
      </p>
    </header>

    <figure class="mb-8">
      <img
          src="/img/portfolio-scrapy.png"
          alt="Screenshot van de Promo Scraper tool"
          class="rounded-xl w-full max-w-3xl mx-auto shadow-lg"
      />
      <figcaption class="mt-2 text-center text-sm text-fuchsia-300">
        Beginpagina van de Promo Scraper tool
      </figcaption>
    </figure>

    <article class="space-y-6 text-white text-justify text-sm md:text-lg leading-relaxed">
      <p>
        Tijdens mijn stage bij <strong>AH Labs</strong> werkte ik als <strong>front-end developer</strong> aan een interne webapplicatie genaamd <strong>Promo Scraper</strong>.
        Deze tool is bedoeld om supermarktacties en folders met elkaar te vergelijken, en vormt een belangrijk hulpmiddel voor de medewerkers van Albert Heijn.
      </p>

      <p>
        Het project werd uitgevoerd in een <strong>agile team</strong> bestaande uit een business developer, UX-designer, backend developers en een andere front-end developer.
        We werkten in sprints van twee weken volgens de Scrum-methode, met vaste momenten voor stand-ups, planningen en retrospectives.
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li>
          <strong>Mijn rol:</strong> Implementeren van de frontend op basis van de aangeleverde UX-designs met <strong>React</strong> en <strong>TypeScript</strong>.
          Denk aan navigatie, filters, tabellen en interacties met de backend.
        </li>
        <li>
          <strong>Samenwerking:</strong> Regelmatig overleg met de business developer en UX-designer om prioriteiten te bepalen en de wensen van de stakeholders te vertalen naar concrete features.
        </li>
        <li>
          <strong>Scrum:</strong> Actieve deelname aan daily stand-ups, sprint planningen en refinements. Ik hielp bij het inschatten van de werkbelasting en het bespreken van technische haalbaarheid.
        </li>
        <li>
          <strong>Communicatie & initiatief:</strong> Toen de UX-designs vertraagd werden opgeleverd, heb ik dit probleem tijdig aangekaart binnen het team.
          Hierdoor kon er actie ondernomen worden en kregen we een nieuwe designer toegewezen, waardoor de voortgang werd hersteld.
        </li>
      </ul>

      <p>
        Dankzij deze aanpak kon de ontwikkeling van de tool gestructureerd en efficiënt verlopen.
        De belangrijkste features van de MVP werden tijdig gerealiseerd en de stakeholders gaven aan tevreden te zijn met het resultaat.
      </p>

      <p>
        Dit project heeft mij geleerd hoe belangrijk het is om binnen een team <strong>proactief te communiceren</strong> en <strong>flexibel</strong> om te gaan met planningen.
        Ook heb ik ervaren hoe een agile werkwijze helpt om overzicht te houden, kwaliteit te waarborgen en effectief samen te werken binnen een groter ontwikkelproces.
      </p>

      <p><strong>Gebruikte tools:</strong> React, TypeScript, Git, Agile/Scrum</p>
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
