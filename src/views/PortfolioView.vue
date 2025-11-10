<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-fuchsia-200 mx-3">
    <article>
      <header>
        <div class="text-2xl font-bold text-white mb-10 title-section flex items-center justify-center flex-col">
          <h4>Past Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-fuchsia-400">
            Explore the projects I've worked on so far</h4>
        </div>
      </header>

      <section>
        <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 xl:grid-cols-3 2xl:gap-5 fade-zoom-in">
          <div v-for="item in items" :key="item.id">
            <router-link :to="`/project/${item.id}`">
              <div class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-fuchsia-50 px-5 py-5">
                <div class="flex items-center justify-center w-full h-48 lg:h-48">
                  <img
                      :src="'/img/portfolio-' + item.imageUrl + '.png'"
                      alt=""
                      class="drop-shadow-xl rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary">{{ item.name }}</div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}
                  </div>
                  <div class="w-full mt-4 text-sm text-left text-fuchsia-500">
                    {{ item.tech }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 'grid-en-kleur', name: 'Grid & Kleur', imageUrl: 'grid', status: 'Websiteontwerp met focus op kleur en grid', tech: 'Figma' },
        { id: 'typografie', name: 'Typografie', imageUrl: 'typo', status: 'Magazine over lettervormgeving', tech: 'Figma' },
        { id: 'beeldtaal', name: 'Beeldtaal', imageUrl: 'beeldtaal', status: 'Visuele analyse over voedselverspilling', tech: 'Figma' },
        { id: 'interface-beweging', name: 'Interface & Beweging', imageUrl: 'interface', status: 'Ontwerp van een interactief bloemkarakter', tech: 'HTML, CSS, JS' },
        { id: 'zelfportret', name: 'AI zelfportret', imageUrl: 'zelfportret', status: 'Zelfportret gemaakt met AI', tech: 'AI' },
        { id: 'meesterproef', name: 'Meesterproef', imageUrl: 'meesterproef', status: 'Interactieve simulatie over social media', tech: 'HTML, CSS, JS' }
      ]
    };
  }
};
</script>

<style scoped>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover {
  stroke: #d946ef;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>
