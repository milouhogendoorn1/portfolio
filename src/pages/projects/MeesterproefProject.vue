<template>
  <section
      class="fadein-left bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Meesterproef
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        Social Media & Zelfbeeld
      </p>
    </header>

    <figure class="mb-8">
      <img
          src="/img/portfolio-meesterproef.png"
          alt="Screenshot van het meesterproef-project"
          class="rounded-xl w-full max-w-3xl mx-auto shadow-lg"
      />
      <figcaption class="mt-2 text-center text-sm text-fuchsia-300">
        Startscherm van de simulatie
      </figcaption>
    </figure>

    <article class="space-y-6 text-white text-justify text-sm md:text-lg leading-relaxed">
      <p>
        Voor mijn Meesterproef ontwierp ik een interactieve simulatie die jongeren bewust maakt van onnodig scrollen op sociale media en de impact hiervan op hun zelfbeeld. De ervaring speelt zich af op desktop maar ik heb geprobeerd het een mobile feeling te geven, waarin de gebruiker steeds geconfronteerd wordt met keuzes om door te scrollen of te stoppen.
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li>
          <strong>Concept:</strong> Door de website te laten aanvoelen als een echte app met onder andere pushmeldingen wordt de gebruiker overspoelt in herkenbare situaties. Het project focust op herkenning, confrontatie en uiteindelijk bewustwording.
        </li>
        <li>
          <strong>Vormgeving:</strong> Ik koos voor een Instagram-achtige visuele stijl, gecombineerd met rustige tussenmomenten en een helder eindscherm zonder afleiding. Dit balans helpt bij het overbrengen van de boodschap.
        </li>
        <li>
          <strong>Proces:</strong> Ik heb zelf rondgekeken tussen instagram posts die ik zie en mensen om mij heen. Deze inzichten vertaalde ik naar scenario’s binnen de simulatie. Tijdens het ontwerpen stond gebruikerservaring en empathie centraal.
        </li>
      </ul>

      <p>
        De grootste uitdaging was om een visueel aantrekkelijke ervaring te maken die ook écht tot nadenken aanzet. Door bewust keuzes in ontwerp, timing en copy te maken, heb ik een interactief eindproduct ontwikkeld dat past bij mijn visie als ontwerper.
      </p>

      <p><strong>Gebruikte tools:</strong> HTML, CSS, JS </p>
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
