<template>
  <section
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-white max-w-4xl mx-auto"
  >
    <header>
      <div class="text-4xl font-extrabold mb-5 tracking-wide flex items-center gap-3">
        Zelfportret
        <div class="h-[1px] flex-1 bg-[#d946ef]" />
      </div>
      <p class="text-fuchsia-400 text-sm uppercase tracking-widest font-semibold mb-6">
        AI Workshop & Digitale Identiteit
      </p>
    </header>

    <figure class="mb-8">
      <img
          src="/img/portfolio-zelfportret.png"
          alt="AI gegenereerd zelfportret"
          class="rounded-xl w-full max-w-xs mx-auto shadow-lg"
      />
      <figcaption class="mt-2 text-center text-sm text-fuchsia-300">
        Mijn AI-avatar gebaseerd op mijn uiterlijk
      </figcaption>
    </figure>

    <article class="space-y-6 text-white text-justify text-sm md:text-lg leading-relaxed">
      <p>
        Tijdens een <strong>AI-workshop op school</strong> kreeg ik de opdracht om een zelfportret te maken met behulp van AI. Het doel was niet alleen om een afbeelding te genereren, maar ook om stil te staan bij hoe je jezelf visueel presenteert in een digitale wereld.
      </p>

      <p>
        Ik begon met een vrij algemene prompt zoals <em>"studentenmeisje"</em>, maar de resultaten voelden generiek en niet als mezelf. Stap voor stap verfijnde ik mijn beschrijving: <em>"jonge vrouw met bruin haar"</em>, <em>"zonder bril"</em>, <em>"schoolse uitstraling"</em>, <em>"niet te kinderachtig"</em> en langzaam ontstond er een beeld dat beter bij mij paste.
      </p>

      <ul class="list-disc pl-6 space-y-3">
        <li>Middellang donkerblond/licht bruin haar, zonder bril.</li>
        <li>Rustige kleuren, een warme sfeer, open uitstraling.</li>
        <li>Een blauw bloemetje in het haar om het wat unieker te maken.</li>
      </ul>

      <p>
        Uiteindelijk vond ik een avatar online die de juiste sfeer had: warm, vriendelijk, zacht. Ik gebruikte dit als inspiratiebron en paste het verder aan via AI-tools tot het echt voelde als mijn digitale zelfportret.
      </p>

      <p>
        <strong>Mijn visie:</strong> In een tijd waarin online representatie steeds belangrijker wordt, is het waardevol om stil te staan bij hoe je jezelf digitaal vormgeeft. Een avatar is meer dan een plaatje, het is een visuele identiteit. Door zelf keuzes te maken in stijl, sfeer en expressie, laat je iets van je persoonlijkheid zien.
      </p>

      <p>
        Deze opdracht liet me reflecteren op hoe technologie en zelfbeeld elkaar beïnvloeden. AI maakt het mogelijk om jezelf op nieuwe manieren te verbeelden, maar ook om bewuster keuzes te maken over hoe je gezien wilt worden.
      </p>

      <p><strong>Gebruikte tools:</strong> ChatGPT (beeldverwerking)</p>
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
