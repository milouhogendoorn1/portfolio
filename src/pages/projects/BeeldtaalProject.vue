<template>
  <section
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Beeldtaal
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        Retoriek & Visuele Analyse
      </p>
    </header>

    <figure class="mb-8">
      <img
          src="/img/portfolio-beeldtaal.png"
          alt="Poster tegen voedselverspilling"
          class="rounded-xl w-full max-w-3xl mx-auto shadow-lg"
      />
      <figcaption class="mt-2 text-center text-sm text-fuchsia-300">
        Bewustwordingscampagne voedselverspilling
      </figcaption>
    </figure>

    <article class="space-y-6 text-white text-justify text-sm md:text-lg leading-relaxed">
      <p>
        Voor de opdracht <strong>Retorische Analyse</strong> binnen het vak Beeldtaal analyseerde ik een krachtige campagneposter die aandacht vraagt voor voedselverspilling. Het beeld toont een man die zorgeloos fastfood eet tegenover een hongerig kind dat in een prullenbak kijkt. Dit confronterende contrast roept direct vragen op over ongelijkheid, verspilling en onze consumptiegewoonten.
        <strong>Mijn visie is dat beeldtaal pas echt krachtig is wanneer het niet alleen informeert, maar ook raakt — als beeld je aan het denken zet over je eigen gedrag, heeft het zijn doel bereikt.</strong>
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li><strong>Ethos:</strong> Het gebruik van feiten ("1.3 billion tons of food is wasted") versterkt de geloofwaardigheid.</li>
        <li><strong>Pathos:</strong> Het emotionele contrast tussen overvloed en honger raakt de kijker persoonlijk.</li>
        <li><strong>Logos:</strong> De scheve voedselverdeling wordt helder en confronterend in beeld gebracht.</li>
        <li><strong>Kairos:</strong> Sluit aan bij urgente thema’s als duurzaamheid, ongelijkheid en bewust consumeren.</li>
      </ul>

      <p>
        Verschillende <strong>stijlfiguren</strong> versterken de boodschap: contrast (rijk vs. arm), herhaling (verspild eten) en een tekstballon met de zin “I wish I had your waste.” Visuele tropen zoals personificatie en hyperbool zorgen voor een dramatische en duidelijke boodschap. De prullenbak wordt een metafoor voor ongelijkheid.
      </p>

      <p>
        Met behulp van <strong>Gestaltprincipes</strong> wordt de boodschap versterkt: nabijheid en figuur-achtergrond zorgen voor samenhang en focus, terwijl beeld en tekst samen de boodschap compleet maken. Daarnaast zijn <strong>indexicale tekens</strong> belangrijk, zoals de koelkast (overvloed), fastfood (gemak) en het kind bij de prullenbak (honger).
      </p>

      <p>
        Tot slot is de <strong>framing</strong> gericht op emotie: de visuele volgorde stuurt eerst naar de etende man, daarna pas naar het hongerige kind, wat de impact vergroot. Deze aanpak maakt het probleem tastbaar en persoonlijk voor de kijker.
      </p>

      <p>
        Door deze analyse leerde ik hoe beeldtaal overtuigend ingezet kan worden met retoriek, framing en semiotiek. Het project heeft mijn inzicht verdiept in hoe vormgeving en beeld mensen kunnen aanzetten tot denken én actie.
        Ik geloof dat ontwerpers hierin een maatschappelijke verantwoordelijkheid hebben: met beeld kun je niet alleen iets moois maken, maar ook iets betekenen en dat is voor mij de kracht van visueel ontwerp.
      </p>

      <p><strong>Gebruikte tools:</strong> Figma</p>
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
