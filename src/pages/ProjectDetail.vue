<template>
  <div class="text-white px-6 py-10">
    <h1 class="text-3xl font-bold mb-4">Project Detail</h1>
    <p>Project ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  mounted() {
    console.log('Project ID:', this.$route.params.id);
  }
}
</script>
