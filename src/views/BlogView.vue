<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex justify-center fade-zoom-up">
      <div class="w-full md:w-1/2 bg-[#1e1e1f] border border-[#383838] rounded-xl p-8 text-white text-center">
        <h1 class="text-2xl font-bold text-fuchsia-400 mb-6">Contactgegevens</h1>

        <div class="flex flex-col gap-4 text-left md:text-left text-white">
          <div>
            <span class="font-semibold text-fuchsia-400">Naam:</span> Milou Hogendoorn
          </div>
          <div>
            <span class="font-semibold text-fuchsia-400">Email:</span> milou.hogendoorn@upcmail.nl
          </div>
          <div>
            <span class="font-semibold text-fuchsia-400">Telefoonnummer:</span> +31 6 55182212
          </div>
          <div>
            <span class="font-semibold text-fuchsia-400">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/milouhogendoorn" target="_blank" class="text-fuchsia-300 hover:text-fuchsia-500">
              linkedin.com/in/milouhogendoorn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}
</style>
