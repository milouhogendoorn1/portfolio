<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-fuchsia-200 mx-3">
    <article>
      <header>
        <div class="text-2xl font-bold text-white mb-10 title-section flex items-center justify-center flex-col">
          <h4>Projecten</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-fuchsia-400">
            Bekijk de projecten waar ik aan heb gewerkt</h4>
        </div>
      </header>

      <section>
        <div class="flex flex-wrap justify-center gap-6 pb-32 fade-zoom-in">
          <div v-for="item in items" :key="item.id" class="w-full sm:w-80 md:w-96 lg:w-96">
            <router-link :to="`/project/${item.id}`">
              <div
                  class="item-card flex flex-col items-center gap-4 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] text-fuchsia-50 px-6 py-6">
                <div class="flex items-center justify-center w-full h-56">
                  <img
                      :src="'/img/portfolio-' + item.imageUrl + '.png'"
                      alt=""
                      class="drop-shadow-xl rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg text-center">
                  <div class="title-text font-medium text-secondary">{{ item.name }}</div>
                  <div class="w-full text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}
                  </div>
                  <div class="w-full mt-4 text-sm text-fuchsia-500">
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
        {
          id: 'recipe',
          name: 'Recept Generator 2.0',
          imageUrl: 'recipe',
          status: 'Recepten maken en beheren',
          tech: 'React, TypeScript'
        },
        {
          id: 'promo',
          name: 'Promo Scraper',
          imageUrl: 'scrapy',
          status: 'Supermarkt acties vergelijken',
          tech: 'React, TypeScript'
        },
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
