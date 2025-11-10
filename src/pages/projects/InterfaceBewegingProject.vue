<template>
  <section
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Interface & Beweging
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        Animatie & Interactie
      </p>
    </header>

    <figure class="mb-8">
      <img
          src="/img/portfolio-interface.png"
          alt="Screenshot van de interactieve bloem-animatie"
          class="rounded-xl w-full max-w-3xl mx-auto shadow-lg"
      />
      <figcaption class="mt-2 text-center text-sm text-fuchsia-300">
        Screenshot interactieve bloem
      </figcaption>
    </figure>

    <article class="space-y-6 text-white text-justify text-sm md:text-lg leading-relaxed">
      <p>
        In het vak <strong>Interface & Beweging</strong> kreeg ik de vrijheid om een eigen interactief karakter te ontwikkelen. Ik koos voor een bloem die als personage functioneert, met blaadjes als armen en een gezichtje. Dit karakter kan zwaaien, dansen en kaal worden. De animaties heb ik volledig zelf gebouwd met HTML, CSS en JavaScript.
        <strong>Mijn visie is dat interactie en animatie een ontwerp tot leven brengen en zorgen voor emotie, karakter en verbinding met de gebruiker.</strong>
      </p>

      <p>
        Het project begon met schetsen in Illustrator en inspiratie opdoen via AI-tools zoals Firefly en Craiyon. Ik heb veel geëxperimenteerd met stijl en vorm. Daarna ben ik overgestapt op coderen, wat goed aansloot bij mijn achtergrond. Voor het eerst werkte ik met animaties, een grote uitdaging maar ook een leerzaam proces waarin ik veel nieuwe technieken heb ontdekt.
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li><strong>Animaties:</strong> De bloem beweegt op muziek, zwaait met een blad en verliest blaadjes in de wind. Deze acties worden getriggerd via drie iconen.</li>
        <li><strong>Geluid:</strong> Aan elke actie is een geluid gekoppeld, zoals wind of zwaaien. Dit versterkt de sfeer en beleving.</li>
        <li><strong>Laadscherm:</strong> In plaats van een standaard loader groeit de bloem langzaam door blaadjes toe te voegen.</li>
        <li><strong>Feedback:</strong> Op basis van feedback heb ik visuele details verbeterd, zoals het laten ‘springen’ van iconen bij het hoveren.</li>
      </ul>

      <p>
        Omdat ik geen achtergrond heb in animatie, was dit project in het begin overweldigend. Maar door veel te testen, feedback te vragen en te experimenteren met AI en tools, groeide mijn zelfvertrouwen. Ik ontdekte hoe waardevol het is om eerst goed te schetsen en visueel te denken voordat je iets technisch uitwerkt.
      </p>

      <p>
        Voor mij is interactieve vormgeving een manier om digitale ontwerpen menselijker en speelser te maken. Door beweging, geluid en visuele elementen toe te voegen, kun je een beleving creëren die verder gaat dan alleen functionaliteit. Dat wil ik in toekomstige projecten blijven verkennen.
      </p>

      <p><strong>Gebruikte tools:</strong> HTML, CSS, JS</p>
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
